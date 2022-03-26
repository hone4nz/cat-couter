const express = require("express");
const Joi = require("joi");
const router = express.Router();
const db = require("../db");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");
const errorHandlerMiddleware = require("../middleware/errorHandlerMiddleware");
const productRepository = require("./product.repository");
const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});

router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  errorHandlerMiddleware,
  async (req, res, next) => {
    try {
      const { limit, page } = req.query;
      const safeLimit = Boolean(limit) ? parseInt(limit) : 10;
      const safePage = Boolean(parseInt(page)) ? parseInt(page) : 1;
      const allProducts = await productRepository.getTotalProducts();
      const products = await productRepository.getProducts(safeLimit, safePage);

      const responseResults = {
        products,
        currentPage: safePage,
        itemsPerPage: safeLimit,
        totalItems: allProducts.length,
        totalPages: Math.ceil(allProducts.length / safeLimit),
      };

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
