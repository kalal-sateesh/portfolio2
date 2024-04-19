import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default PageRoutes;
