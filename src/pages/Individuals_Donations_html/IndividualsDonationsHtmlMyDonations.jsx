import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Individuals_Donations_css/my_donations.css?raw';
function IndividualsDonationsHtmlMyDonations() {
  const {
    t
  } = useTranslation();
  return <PageShell title="My Donations - Mobile" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <header>
                
                <hr className="thin_line" />
            </header>
            <main className="main_content">
                <div className="my_donation_page">
                    <div className="my_donation">
                        <h1>{t("pages.IndividualsDonationsHtmlMyDonations.text1")}</h1>
                        <button className="plus_icon">
                            <i className="fa-solid fa-plus" style={{
                color: "rgb(255, 255, 255)"
              }}></i>
        
                        </button>
                    </div>
                    <div className="donation_section">
                        <button className="green_backg">{t("pages.IndividualsDonationsHtmlMyDonations.text2")}</button>
                        <button className="white_backg">{t("pages.IndividualsDonationsHtmlMyDonations.text3")}</button>
                        <button className="white_backg">{t("pages.IndividualsDonationsHtmlMyDonations.text4")}</button>
                        <button className="white_backg">{t("pages.IndividualsDonationsHtmlMyDonations.text5")}</button>
                    </div>
                    <div className="my_donation_cards">
        
                        <div className="donation_cards">
                            <div className="top_section">
                                <div className="objectives_icon">
                                    <i className="fa-solid fa-utensils" style={{
                    color: "rgba(63, 73, 71, 1)"
                  }}></i>
                                    <h4>{t("pages.IndividualsDonationsHtmlMyDonations.text6")}</h4>
                                </div>
                                <h5>{t("pages.IndividualsDonationsHtmlMyDonations.text7")}</h5>
                            </div>
                            <h2>{t("pages.IndividualsDonationsHtmlMyDonations.text8")}</h2>
                            <div className="bottom_section">
                                <p>{t("pages.IndividualsDonationsHtmlMyDonations.text9")}</p>
                                <Link to="/donations/collection">
                                    <button className="view_details">{t("pages.IndividualsDonationsHtmlMyDonations.text10")}</button>
                                </Link>
                            </div>
                        </div>
                        <div className="donation_cards">
                            <div className="top_section">
                                <div className="objectives_icon">
                                    <i className="fa-solid fa-shirt" style={{
                    color: "rgba(63, 73, 71, 1)"
                  }}></i>
                                    <h4>{t("pages.IndividualsDonationsHtmlMyDonations.text11")}</h4>
                                </div>
                                <h5>{t("pages.IndividualsDonationsHtmlMyDonations.text12")}</h5>
                            </div>
                            <h2>{t("pages.IndividualsDonationsHtmlMyDonations.text13")}</h2>
                            <div className="bottom_section">
                                <p>{t("pages.IndividualsDonationsHtmlMyDonations.text14")}</p>
                                <Link to="/donations/collection">
                                    <button className="view_details">{t("pages.IndividualsDonationsHtmlMyDonations.text15")}</button>
                                </Link>
                            </div>
                        </div>
                        <div className="donation_cards_opacity">
                            <div className="top_section">
                                <div className="objectives_icon">
                                    <i className="fa-solid fa-book" style={{
                    color: "rgba(63, 73, 71, 1)"
                  }}></i>
                                    <h4>{t("pages.IndividualsDonationsHtmlMyDonations.text16")}</h4>
                                </div>
                                <h5>{t("pages.IndividualsDonationsHtmlMyDonations.text17")}</h5>
                            </div>
                            <h2>{t("pages.IndividualsDonationsHtmlMyDonations.text18")}</h2>
                            <div className="bottom_section">
                                <p>{t("pages.IndividualsDonationsHtmlMyDonations.text19")}</p>
                                <Link to="/donations/collection">
                                    <button className="view_details">{t("pages.IndividualsDonationsHtmlMyDonations.text20")}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
        
        
        
        
                </div>
            </main>
      </>
    </PageShell>;
}
export default IndividualsDonationsHtmlMyDonations;
