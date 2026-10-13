import { useTranslation } from "react-i18next";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { pageRoutes } from './pages/index.js';
function NotFound() {
  const {
    t
  } = useTranslation();
  return <main dir="rtl">
      <h1>{t("pages.App.text1")}</h1>
      <Link to="/beneficiary">{t("pages.App.text2")}</Link>
    </main>;
}
function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        {pageRoutes?.map(({
        path,
        Component
      }) => <Route key={path} path={path} element={<Component />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>;
}
export default App;
