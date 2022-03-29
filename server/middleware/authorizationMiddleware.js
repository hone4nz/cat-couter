const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "http://catcouterhm.com",
  issuerBaseURL: `https://dev-ygpkdxif.us.auth0.com`,
});

const checkScopes = requiredScopes("read:reports");

module.exports = {
  checkJwt,
  checkScopes,
};
