import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import globalStyles from '../../../Beneficiary_css/global.css?raw';
import authStyles from './auth.css?raw';
function LoginPage() {
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate('/beneficiary');
  }
  return <PageShell title={t("pages.LoginPage.text1")} bodyStyle="direction: rtl;" styles={[globalStyles, authStyles]}>
      <main className="auth-page">
        <section className="auth-card">
          <div className="auth-heading">
            <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i>
            <h1>{t("pages.LoginPage.text2")}</h1>
            <p>{t("pages.LoginPage.text3")}</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="login-email">{t("pages.LoginPage.text4")}</label>
              <input id="login-email" name="email" type="email" placeholder="name@example.com" required />
            </div>

            <div className="auth-field">
              <label htmlFor="login-password">{t("pages.LoginPage.text5")}</label>
              <input id="login-password" name="password" type="password" placeholder={t("pages.LoginPage.text6")} required />
            </div>

            <button className="auth-submit" type="submit">{t("pages.LoginPage.text7")}</button>
          </form>

          <p className="auth-switch">{t("pages.LoginPage.text8")}<Link to="/register">{t("pages.LoginPage.text9")}</Link>
          </p>
        </section>
      </main>
    </PageShell>;
}
export default LoginPage;
