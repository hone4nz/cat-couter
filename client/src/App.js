import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import DashboardPage from "./components/dashboard/DashboardPage";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  & > * {
    flex-shrink: 0;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </StyledApp>
  );
};

export default App;
