import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Restaurant_section_css/meal_collected.css?raw';
function RestaurantSectionHtmlMealCollected() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Meal Collected" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <main className="main_content">
                <div className="meal_collected_page">
                    <div className="meal_collected_card">
                        <i className="fa-solid fa-circle-check" style={{
              color: "var(--white-bg)"
            }}></i>
                        <h1>{t("pages.RestaurantSectionHtmlMealCollected.text1")}</h1>
                        <p>{t("pages.RestaurantSectionHtmlMealCollected.text2")}</p>
                        <div className="comment_section">
                            <i className="fa-solid fa-hand-holding-heart" style={{
                color: "rgba(120, 61, 1, 1)"
              }}></i>
                            <span>{t("pages.RestaurantSectionHtmlMealCollected.text3")}</span>
                        </div>
                        <div className="buttons">
                            <Link className="return_reservations" to="/restaurant/reservations">{t("pages.RestaurantSectionHtmlMealCollected.text4")}</Link>
                            <Link className="add_new_meal" to="/restaurant/meals/new">{t("pages.RestaurantSectionHtmlMealCollected.text5")}</Link>
        
                        </div>
        
        
                    </div>
                </div>
            </main>
      </>
    </PageShell>;
}
export default RestaurantSectionHtmlMealCollected;
