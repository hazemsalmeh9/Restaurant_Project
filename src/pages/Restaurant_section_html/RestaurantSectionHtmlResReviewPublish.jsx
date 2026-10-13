import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Restaurant_section_css/res_review_publish.css?raw';
function RestaurantSectionHtmlResReviewPublish() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Reservations" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <header>
                <Link to="/restaurant/meals/new">
                    <button className="back_button">
                        <i className="fa-solid fa-arrow-right" style={{
              color: "rgba(63, 73, 71, 1)"
            }}></i>
                    </button>
                </Link>
                <hr className="thin_line" />
            </header>
            <main className="main_content">
                <div className="review_publish_page">
                    <h1>{t("pages.RestaurantSectionHtmlResReviewPublish.text1")}</h1>
                    <p>{t("pages.RestaurantSectionHtmlResReviewPublish.text2")}</p>
        
                    <div className="review_publish_card">
                        <div className="meal_name">
                            <i className="fa-solid fa-utensils" style={{
                color: "rgba(37, 104, 97, 1)"
              }}></i>
                            <div className="text_setcion">
                                <h3>{t("pages.RestaurantSectionHtmlResReviewPublish.text3")}</h3>
                                <h4>{t("pages.RestaurantSectionHtmlResReviewPublish.text4")}</h4>
                            </div>
                        </div>
                        <div className="quantity">
                            <i className="fa-solid fa-box-archive" style={{
                color: "rgba(37, 104, 97, 1)"
              }}></i>
                            <div className="text_setcion">
                                <h3>{t("pages.RestaurantSectionHtmlResReviewPublish.text5")}</h3>
                                <h4>{t("pages.RestaurantSectionHtmlResReviewPublish.text6")}</h4>
                            </div>
                        </div>
                        <div className="pickup_time">
                            <i className="fa-regular fa-clock" style={{
                color: "rgba(37, 104, 97, 1)"
              }}></i>
                            <div className="text_setcion">
                                <h3>{t("pages.RestaurantSectionHtmlResReviewPublish.text7")}</h3>
                                <h4>{t("pages.RestaurantSectionHtmlResReviewPublish.text8")}</h4>
                            </div>
                        </div>
                        <div className="location">
                            <i className="fa-solid fa-location-dot" style={{
                color: "rgba(37, 104, 97, 1)"
              }}></i>
                            <div className="text_setcion">
                                <h3>{t("pages.RestaurantSectionHtmlResReviewPublish.text9")}</h3>
                                <h4>{t("pages.RestaurantSectionHtmlResReviewPublish.text10")}</h4>
                            </div>
                        </div>
                        <div className="notes">
                            <h5>{t("pages.RestaurantSectionHtmlResReviewPublish.text11")}</h5>
                            <h6>{t("pages.RestaurantSectionHtmlResReviewPublish.text12")}</h6>
                        </div>
                    </div>
                    <button className="confirm_publication">{t("pages.RestaurantSectionHtmlResReviewPublish.text13")}</button>
                    <Link className="edit_details" to="/restaurant/meals/new">{t("pages.RestaurantSectionHtmlResReviewPublish.text14")}</Link>
        
                </div>
            </main>
      </>
    </PageShell>;
}
export default RestaurantSectionHtmlResReviewPublish;
