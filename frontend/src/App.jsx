import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import SedintePage from "./pages/SedintePage.jsx";
import SedintaDetaliuPage from "./pages/SedintaDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SedintePage />} />
        <Route path="/sedinte/:id" element={<SedintaDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}