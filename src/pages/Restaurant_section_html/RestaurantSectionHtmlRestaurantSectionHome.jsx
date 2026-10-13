import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Restaurant_section_css/Restaurant_section_home.css?raw';
function RestaurantSectionHtmlRestaurantSectionHome() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Restaurant Section Home" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <header>
                <a href="">
                    <button className="back_button">
                        <i className="fa-solid fa-arrow-right" style={{
              color: "rgba(63, 73, 71, 1)"
            }}></i>
                    </button>
                </a>
                <hr className="thin_line" />
            </header>
            <main className="main_content">
                <div className="restaurant_section_page">
                    <h1>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text1")}</h1>
        
                    <p>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text2")}</p>
        
                    <div className="restaurant_section_cards">
                        <h2>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text3")}</h2>
        
                        <div className="stages_card">
                            <i className="fa-regular fa-square-plus" style={{
                color: "rgb(0, 32, 29)"
              }}></i>
                            <div className="text_section">
                                <h3>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text4")}</h3>
                                <p>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text5")}</p>
                            </div>
                        </div>
                        <div className="stages_card">
                            <i className="fa-solid fa-share-nodes" style={{
                color: "rgba(0, 32, 29, 1)"
              }}></i>
                            <div className="text_section">
                                <h3>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text6")}</h3>
                                <p>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text7")}</p>
                            </div>
                        </div>
                        <div className="stages_card">
                            <i className="fa-solid fa-handshake" style={{
                color: "rgba(0, 32, 29, 1)"
              }}></i>
                            <div className="text_section">
                                <h3>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text8")}</h3>
                                <p>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text9")}</p>
                            </div>
                        </div>
                        <div className="heart_card">
                            <i className="fa-solid fa-heart" style={{
                color: "rgb(142, 78, 20)"
              }}></i>
                            <h4>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text10")}</h4>
                        </div>
        
                        <div className="ready_to_started_card">
                            <h5>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text11")}</h5>
                            <p>{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text12")}</p>
        
                            <Link to="/restaurant/meals/new">
                                <button className="join_button">{t("pages.RestaurantSectionHtmlRestaurantSectionHome.text13")}</button>
                            </Link>
                        </div>
        
                    </div>
        
                </div>
            </main>
      </>
    </PageShell>;
}
export default RestaurantSectionHtmlRestaurantSectionHome;
