import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Individuals_Donations_css/review_publish.css?raw';
import image0 from '../../../imgs/location.jpg';
function IndividualsDonationsHtmlReviewPublish() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Review & Publish" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <main className="main_content">
                <div className="review_publish_page">
                    <div className="review_donation">
                        <Link to="/donations/requested">
                            <button className="back_button">
                                <i className="fa-solid fa-arrow-right" style={{
                  color: "rgba(37, 104, 97, 1)"
                }}></i>
                            </button>
                        </Link>
                        <h1>{t("pages.IndividualsDonationsHtmlReviewPublish.text1")}</h1>
                    </div>
                    <div className="vegetables_fruits_card">
                        <h2>{t("pages.IndividualsDonationsHtmlReviewPublish.text2")}</h2>
                        <div className="fresh_food">
                            <i className="fa-solid fa-utensils" style={{
                color: "rgba(63, 73, 71, 1)"
              }}></i>
                            <h3>{t("pages.IndividualsDonationsHtmlReviewPublish.text3")}</h3>
                        </div>
                        <h4>{t("pages.IndividualsDonationsHtmlReviewPublish.text4")}</h4>
                        <p>{t("pages.IndividualsDonationsHtmlReviewPublish.text5")}</p>
        
                        <h5>{t("pages.IndividualsDonationsHtmlReviewPublish.text6")}</h5>
                        <div className="pickup_location">
                            <i className="fa-solid fa-location-dot" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                            <p>{t("pages.IndividualsDonationsHtmlReviewPublish.text7")}</p>
                        </div>
                        <button className="location_img"><img src={image0} alt="" /></button>
                    </div>
                    <Link to="/donations/new">
                        <button className="edit_button">{t("pages.IndividualsDonationsHtmlReviewPublish.text8")}</button>
                    </Link>
        
                </div>
        
            </main>
      </>
    </PageShell>;
}
export default IndividualsDonationsHtmlReviewPublish;
