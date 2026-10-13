import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Individuals_Donations_css/donation_information.css?raw';
function IndividualsDonationsHtmlDonationInformation() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Donation Information" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <header>
                
                <hr className="thin_line" />
            </header>
            <main className="main_content">
                <div className="Individuals_Donations_paje">
        
                    <div className="text_section">
                        <h3 className="green_back">{t("pages.IndividualsDonationsHtmlDonationInformation.text1")}</h3>
                        <h1>{t("pages.IndividualsDonationsHtmlDonationInformation.text2")}</h1>
                        <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text3")}</p>
        
                        <Link to="/donations/new">
                            <h3 className="orange_back">{t("pages.IndividualsDonationsHtmlDonationInformation.text4")}</h3>
                        </Link>
                    </div>
                    <div className="four_card_section">
                        <h2>{t("pages.IndividualsDonationsHtmlDonationInformation.text5")}</h2>
                        <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text6")}</p>
        
                        <div className="cards_wrapper">
        
                            <div className="top_two_section">
                                <div className="food_stuffs">
                                    <i className="fa-solid fa-utensils" style={{
                    color: "rgb(37, 104, 97)"
                  }}></i>
                                    <h4>{t("pages.IndividualsDonationsHtmlDonationInformation.text7")}</h4>
                                    <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text8")}</p>
                                </div>
                                <div className="packaged_foods">
                                    <i className="fa-solid fa-box" style={{
                    color: "rgb(142, 78, 20)"
                  }}></i>
                                    <h4>{t("pages.IndividualsDonationsHtmlDonationInformation.text9")}</h4>
                                    <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text10")}</p>
                                </div>
                            </div>
                            <div className="bottom_two_section">
                                <div className="household_items">
                                    <i className="fa-solid fa-bag-shopping" style={{
                    color: "rgb(142, 78, 20)"
                  }}></i>
                                    <h4>{t("pages.IndividualsDonationsHtmlDonationInformation.text11")}</h4>
                                    <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text12")}</p>
                                </div>
                                <div className="household_recycle">
                                    <i className="fa-solid fa-recycle" style={{
                    color: "rgb(37, 104, 97)"
                  }}></i>
                                    <h4>{t("pages.IndividualsDonationsHtmlDonationInformation.text13")}</h4>
                                    <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text14")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="how_it_works_card">
                        <h2>{t("pages.IndividualsDonationsHtmlDonationInformation.text15")}</h2>
                        <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text16")}</p>
        
                        <div className="cards_wrapper_two">
        
                            <div className="add">
        
                                <i className="fa-regular fa-square-plus" style={{
                  color: "rgb(37, 104, 97)"
                }}></i>
                                <h4>{t("pages.IndividualsDonationsHtmlDonationInformation.text17")}</h4>
                                <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text18")}</p>
                            </div>
        
                            <div className="share">
        
                                <i className="fa-solid fa-share-nodes" style={{
                  color: "rgb(37, 104, 97)"
                }}></i>
                                <h4>{t("pages.IndividualsDonationsHtmlDonationInformation.text19")}</h4>
                                <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text20")}</p>
        
                            </div>
        
                            <div className="benefit">
        
                                <i className="fa-solid fa-hand-holding-heart" style={{
                  color: "rgb(255, 255, 255)"
                }}></i>
                                <h4>{t("pages.IndividualsDonationsHtmlDonationInformation.text21")}</h4>
                                <p>{t("pages.IndividualsDonationsHtmlDonationInformation.text22")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
      </>
    </PageShell>;
}
export default IndividualsDonationsHtmlDonationInformation;
