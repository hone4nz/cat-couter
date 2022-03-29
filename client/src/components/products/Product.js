import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const StyledMain = styled.div`
  position: relative;
  background-color: #eeeeee;
`;
const StyledCard = styled.div`
  border: 1px solid black;
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  padding: 5px;
`;
const StyledDiscountBadge = styled(DiscountBadge)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #901d1d;
  color: #ffffff;
`;

const StyledButton = styled.button`
  background-color: black;
  color: white;
`;

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <StyledMain>
      <StyledCard role="listitem">
        {imageName ? (
          <img
            src={`./img/${imageName}`}
            alt={imageDescription}
            className="product-image"
            width="100%"
            height="100%"
          />
        ) : (
          <img
            src="./img/cat-photo-default.jpg"
            alt="Default product cat"
            className="product-image"
            width="100%"
            height="100%"
          />
        )}
        {discountValue && discountType && (
          <StyledDiscountBadge
            discountValue={discountValue}
            discountType={discountType}
          />
        )}

        <h3>{name}</h3>
        <p>Price {price}</p>
        <p data-testid="product-description">{description}</p>
        <StyledButton>Add to Cart</StyledButton>
      </StyledCard>
    </StyledMain>
  );
};

export default Product;
