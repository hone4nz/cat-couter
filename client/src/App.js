import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import DashboardPage from "./components/dashboard/DashboardPage";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
const StyledApp = styled.div`
  display: grid;
  height: 100vh;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route exact path="/dashboard" element={<ProtectedRoute />}>
          <Route exact path="/dashboard" element={<DashboardPage />} />
        </Route>

        <Route exact path="/" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </StyledApp>
  );
};

export default App;
