import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Restaurant_section_css/add_surplus_meal.css?raw';
function RestaurantSectionHtmlAddSurplusMeal() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Add Surplus Meal" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <header>
                <Link to="/restaurant">
                    <button className="back_button">
                        <i className="fa-solid fa-arrow-right" style={{
              color: "rgba(63, 73, 71, 1)"
            }}></i>
                    </button>
                </Link>
                <hr className="thin_line" />
            </header>
            <main className="main_content">
                <div className="add_surplus_meal_page">
                    <div className="add_surplus_meal_card">
                        <div className="meal_name">
                            <h3>{t("pages.RestaurantSectionHtmlAddSurplusMeal.text1")}</h3>
                            <input type="text" className="custom_input" placeholder={t("pages.RestaurantSectionHtmlAddSurplusMeal.text2")} />
                        </div>
                        <div className="quantity_available">
                            <h3>{t("pages.RestaurantSectionHtmlAddSurplusMeal.text3")}</h3>
                            <div className="input_meal">
                                <input type="number" className="custom_meal" placeholder="25" />
                                <span>{t("pages.RestaurantSectionHtmlAddSurplusMeal.text4")}</span>
                            </div>
                        </div>
                        <div className="pickup_time">
                            <h3>{t("pages.RestaurantSectionHtmlAddSurplusMeal.text5")}</h3>
                            <div className="input_time">
                                <input type="datetime-local" className="custom_time" />
                                <i className="fa-regular fa-clock" style={{
                  color: "rgba(63, 73, 71, 1)"
                }}></i>
                            </div>
                        </div>
                        <div className="location">
                            <h3>{t("pages.RestaurantSectionHtmlAddSurplusMeal.text6")}</h3>
                            <div className="input_location">
                                <input type="text" placeholder={t("pages.RestaurantSectionHtmlAddSurplusMeal.text7")} className="custom_location" />
                                <i className="fa-solid fa-location-dot" style={{
                  color: "rgba(63, 73, 71, 1)"
                }}></i>
                            </div>
                        </div>
                        <div className="additional_notes">
                            <h3>{t("pages.RestaurantSectionHtmlAddSurplusMeal.text8")}</h3>
                            <textarea name="" id="" placeholder={t("pages.RestaurantSectionHtmlAddSurplusMeal.text9")}></textarea>
                        </div>
                    </div>
                    <Link className="serving_meal" to="/restaurant/meals/review">{t("pages.RestaurantSectionHtmlAddSurplusMeal.text10")}</Link>
        
                </div>
            </main>
      </>
    </PageShell>;
}
export default RestaurantSectionHtmlAddSurplusMeal;
