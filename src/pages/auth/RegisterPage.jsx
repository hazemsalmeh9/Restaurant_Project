import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import globalStyles from '../../../Beneficiary_css/global.css?raw';
import authStyles from './auth.css?raw';
function RegisterPage() {
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate('/login');
  }
  return <PageShell title={t("pages.RegisterPage.text1")} bodyStyle="direction: rtl;" styles={[globalStyles, authStyles]}>
      <main className="auth-page">
        <section className="auth-card">
          <div className="auth-heading">
            <i className="fa-solid fa-user-plus" aria-hidden="true"></i>
            <h1>{t("pages.RegisterPage.text2")}</h1>
            <p>{t("pages.RegisterPage.text3")}</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="register-name">{t("pages.RegisterPage.text4")}</label>
              <input id="register-name" name="name" type="text" placeholder={t("pages.RegisterPage.text5")} required />
            </div>

            <div className="auth-field">
              <label htmlFor="register-email">{t("pages.RegisterPage.text6")}</label>
              <input id="register-email" name="email" type="email" placeholder="name@example.com" required />
            </div>

            <div className="auth-field">
              <label htmlFor="register-role">{t("pages.RegisterPage.text7")}</label>
              <select id="register-role" name="role" defaultValue="beneficiary" required>
                <option value="beneficiary">{t("pages.RegisterPage.text8")}</option>
                <option value="donor">{t("pages.RegisterPage.text9")}</option>
                <option value="restaurant">{t("pages.RegisterPage.text10")}</option>
                <option value="volunteer">{t("pages.RegisterPage.text11")}</option>
              </select>
            </div>

            <div className="auth-field">
              <label htmlFor="register-password">{t("pages.RegisterPage.text12")}</label>
              <input id="register-password" name="password" type="password" placeholder={t("pages.RegisterPage.text13")} minLength="8" required />
            </div>

            <button className="auth-submit" type="submit">{t("pages.RegisterPage.text14")}</button>
          </form>

          <p className="auth-switch">{t("pages.RegisterPage.text15")}<Link to="/login">{t("pages.RegisterPage.text16")}</Link>
          </p>
        </section>
      </main>
    </PageShell>;
}
export default RegisterPage;
