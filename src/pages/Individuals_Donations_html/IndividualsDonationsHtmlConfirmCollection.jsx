import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Individuals_Donations_css/confirm_collection.css?raw';
function IndividualsDonationsHtmlConfirmCollection() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Confirm Collection" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <main className="main_content">
                <div className="confirm_collection_page">
                    <Link to="/donations/mine">
                        <button className="back_button">
                            <i className="fa-solid fa-arrow-right" style={{
                color: "rgba(63, 73, 71, 1)"
              }}></i>
                        </button>
                    </Link>
                    <div className="donation_receipt_card">
                        <h1>{t("pages.IndividualsDonationsHtmlConfirmCollection.text1")}</h1>
                        <p>{t("pages.IndividualsDonationsHtmlConfirmCollection.text2")}</p>
                        <div className="stages_section">
                            <div className="icon_section">
                                <i className="fa-solid fa-circle-check" style={{
                  color: "rgb(37, 104, 97)"
                }}></i>
                                <div className="connecting_line"></div>
                                <i className="fa-solid fa-circle" style={{
                  color: "rgb(37, 104, 97)"
                }}></i>
                            </div>
                            <div className="text_section">
                                <div className="ordered">
                                    <h3>{t("pages.IndividualsDonationsHtmlConfirmCollection.text3")}</h3>
                                    <h4>{t("pages.IndividualsDonationsHtmlConfirmCollection.text4")}</h4>
                                </div>
                                <div className="to_be_sure">
                                    <h5>{t("pages.IndividualsDonationsHtmlConfirmCollection.text5")}</h5>
                                    <h6>{t("pages.IndividualsDonationsHtmlConfirmCollection.text6")}</h6>
                                </div>
                            </div>
                        </div>
                        <h2>{t("pages.IndividualsDonationsHtmlConfirmCollection.text7")}</h2>
                        <p>{t("pages.IndividualsDonationsHtmlConfirmCollection.text8")}</p>
        
                        <Link to="/donations/completed">
        
                            <button className="been_received">
                                <i className="fa-solid fa-thumbs-up" style={{
                  color: "rgb(255, 255, 255)"
                }}></i>{t("pages.IndividualsDonationsHtmlConfirmCollection.text9")}</button>
                        </Link>
        
                        <a href="">
        
                            <button className="encountered_problem">
                                <i className="fa-solid fa-headset" style={{
                  color: "rgb(37, 104, 97)"
                }}></i>{t("pages.IndividualsDonationsHtmlConfirmCollection.text10")}</button>
                        </a>
                    </div>
        
        
        
        
        
        
        
        
        
        
        
                </div>
            </main>
      </>
    </PageShell>;
}
export default IndividualsDonationsHtmlConfirmCollection;
