import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Restaurant_section_css/reservations.css?raw';
function RestaurantSectionHtmlReservations() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Reservations" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <main className="main_content">
                <div className="reservations_page">
                    <h1>{t("pages.RestaurantSectionHtmlReservations.text1")}</h1>
                    <p>{t("pages.RestaurantSectionHtmlReservations.text2")}</p>
        
                    <div className="sections">
                        <a href="" className="green_section">{t("pages.RestaurantSectionHtmlReservations.text3")}</a>
                        <a href="" className="white_section">{t("pages.RestaurantSectionHtmlReservations.text4")}</a>
                        <a href="" className="white_section">{t("pages.RestaurantSectionHtmlReservations.text5")}</a>
                        <a href="" className="white_section">{t("pages.RestaurantSectionHtmlReservations.text6")}</a>
                    </div>
                    <div className="reservations_card">
        
                        <div className="orange_card">
                            <div className="orange_overlay"></div>
                            <div className="top_section">
                                <span>#RES-0980</span>
                                <div className="meal_name">
                                    <i className="fa-solid fa-utensils" style={{
                    color: "rgba(111, 121, 119, 1)"
                  }}></i>
                                    <h2>{t("pages.RestaurantSectionHtmlReservations.text7")}</h2>
                                </div>
                                <div className="quantity">
                                    <i className="fa-solid fa-box-archive" style={{
                    color: "rgba(111, 121, 119, 1)"
                  }}></i>
                                    <h3>{t("pages.RestaurantSectionHtmlReservations.text8")}</h3>
                                </div>
                                <div className="pickup_time">
                                    <i className="fa-regular fa-clock" style={{
                    color: "rgba(111, 121, 119, 1)"
                  }}></i>
                                    <h3>{t("pages.RestaurantSectionHtmlReservations.text9")}</h3>
                                </div>
                            </div>
                            <div className="note">
                                <i className="fa-solid fa-shield-halved" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>
                                <h5>{t("pages.RestaurantSectionHtmlReservations.text10")}</h5>
                            </div>
                            <Link className="verification" to="/restaurant/reservations/verify">{t("pages.RestaurantSectionHtmlReservations.text11")}</Link>
                        </div>
        
                        <div className="green_card">
                            <div className="green_overlay"></div>
                            <div className="top_section">
                                <div className="new">
                                    <i className="fa-solid fa-circle" style={{
                    color: "rgb(111, 175, 166)"
                  }}></i>
                                    <h6>{t("pages.RestaurantSectionHtmlReservations.text12")}</h6>
                                </div>
                                <span>#RES-0983</span>
                                <div className="meal_name">
                                    <i className="fa-solid fa-utensils" style={{
                    color: "rgba(111, 121, 119, 1)"
                  }}></i>
                                    <h2>{t("pages.RestaurantSectionHtmlReservations.text13")}</h2>
                                </div>
                                <div className="quantity">
                                    <i className="fa-solid fa-box-archive" style={{
                    color: "rgba(111, 121, 119, 1)"
                  }}></i>
                                    <h3>{t("pages.RestaurantSectionHtmlReservations.text14")}</h3>
                                </div>
                                <div className="pickup_time">
                                    <i className="fa-regular fa-clock" style={{
                    color: "rgba(111, 121, 119, 1)"
                  }}></i>
                                    <h3>{t("pages.RestaurantSectionHtmlReservations.text15")}</h3>
                                </div>
                            </div>
                            <div className="note">
                                <i className="fa-solid fa-shield-halved" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>
                                <h5>{t("pages.RestaurantSectionHtmlReservations.text16")}</h5>
                            </div>
                            <a href="" className="awaiting">{t("pages.RestaurantSectionHtmlReservations.text17")}</a>
                        </div>
        
                        <div className="gray_card">
                            <div className="gray_overlay"></div>
                            <div className="done">
                                <i className="fa-regular fa-circle-check" style={{
                  color: "rgba(63, 73, 71, 1)"
                }}></i>
                                <h6>{t("pages.RestaurantSectionHtmlReservations.text18")}</h6>
                            </div>
                            <span>#RES-0980</span>
                            <div className="meal_name_op">
                                <i className="fa-solid fa-utensils" style={{
                  color: "rgba(111, 121, 119, 1)"
                }}></i>
                                <h2>{t("pages.RestaurantSectionHtmlReservations.text19")}</h2>
                            </div>
                            <div className="quantity">
                                <i className="fa-solid fa-box-archive" style={{
                  color: "rgba(111, 121, 119, 1)"
                }}></i>
                                <h3>{t("pages.RestaurantSectionHtmlReservations.text20")}</h3>
                            </div>
                            <div className="pickup_time">
                                <i className="fa-regular fa-clock" style={{
                  color: "rgba(111, 121, 119, 1)"
                }}></i>
                                <h3>{t("pages.RestaurantSectionHtmlReservations.text21")}</h3>
                            </div>
                        </div>
                        <a href="" className="adding"><i className="fa-solid fa-plus" style={{
                color: "rgb(255, 255, 255)"
              }}></i></a>
                    </div>
                </div>
            </main>
      </>
    </PageShell>;
}
export default RestaurantSectionHtmlReservations;
