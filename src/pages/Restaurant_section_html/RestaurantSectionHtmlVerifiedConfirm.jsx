import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Restaurant_section_css/verified_confirm.css?raw';
function RestaurantSectionHtmlVerifiedConfirm() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Verified & Confirm" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <main className="main_content">
                <div className="verified_confirm_page">
                    <div className="chek_card">
                        <i className="fa-solid fa-circle-check" style={{
              color: "var(--white-bg)"
            }}></i>
                        <h1>{t("pages.RestaurantSectionHtmlVerifiedConfirm.text1")}</h1>
                        <p>{t("pages.RestaurantSectionHtmlVerifiedConfirm.text2")}</p>
                        <div className="booking_details">
                            <h2>{t("pages.RestaurantSectionHtmlVerifiedConfirm.text3")}</h2>
                            <div className="meal_name">
                                <i className="fa-solid fa-utensils" style={{
                  color: "rgba(37, 104, 97, 1)"
                }}></i>
                                <h3>{t("pages.RestaurantSectionHtmlVerifiedConfirm.text4")}</h3>
                            </div>
                            <div className="quantity">
                                <i className="fa-solid fa-box-archive" style={{
                  color: "rgba(37, 104, 97, 1)"
                }}></i>
                                <h3>{t("pages.RestaurantSectionHtmlVerifiedConfirm.text5")}</h3>
                            </div>
                            <div className="condition">
                                <h3>{t("pages.RestaurantSectionHtmlVerifiedConfirm.text6")}</h3>
                                <h4>{t("pages.RestaurantSectionHtmlVerifiedConfirm.text7")}</h4>
                            </div>
                        </div>
                        <div className="buttons">
                            <Link className="delivery_confirmation" to="/restaurant/meals/collected">{t("pages.RestaurantSectionHtmlVerifiedConfirm.text8")}</Link>
                            <Link className="cancel" to="/restaurant/reservations/verify">{t("pages.RestaurantSectionHtmlVerifiedConfirm.text9")}</Link>
                        </div>
                    </div>
                </div>
            </main>
      </>
    </PageShell>;
}
export default RestaurantSectionHtmlVerifiedConfirm;
