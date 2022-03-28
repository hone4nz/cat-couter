import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const StyledPaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin: unset;
  padding: unset;
  justify-content: center;
  @media only screen and (min-width: 672px) {
    margin-left: 25%;
    margin-right: 20%;
    padding-left: 5%;
    padding-right: 15%;
  }
`;

const StyledPaginationControls = styled.div`
  width: 100%;
  max-width: 200px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationControls = ({ setCurrentPage, currentPage, totalPages }) => {
  const prevDisabled = currentPage > 1 ? false : true;
  const nextDisabled = currentPage < totalPages ? false : true;
  const onClickPrev = () => {
    if (!prevDisabled) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNext = () => {
    if (!nextDisabled) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pageData = [];

  for (let i = 1; i <= totalPages; i++) {
    let extraClass = "";
    if (i === currentPage) {
      extraClass = "active";
    }
    pageData[i] = (
      <a
        href="!#"
        key={i}
        className={extraClass}
        onClick={(e) => {
          e.preventDefault();

          setCurrentPage(i);
        }}
      >
        {i}
      </a>
    );
  }
  return (
    <StyledPaginationContainer>
      <StyledPaginationControls>
        <div>
          <button
            aria-label="Previous page"
            onClick={onClickPrev}
            disabled={prevDisabled}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <button
            aria-label="Next page"
            onClick={onClickNext}
            disabled={nextDisabled}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </StyledPaginationControls>
    </StyledPaginationContainer>
  );
};

export default PaginationControls;
