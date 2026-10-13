import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Individuals_Donations_css/add_donation.css?raw';
function IndividualsDonationsHtmlAddDonation() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Add Donation" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <header>
                <Link to="/donations">
                    <button className="back_button">
                        <i className="fa-solid fa-arrow-right" style={{
              color: "rgb(63, 73, 71)"
            }}></i>
                    </button>
                </Link>
        
                <hr className="thin_line" />
            </header>
            <main className="main_content">
                <h1>{t("pages.IndividualsDonationsHtmlAddDonation.text1")}</h1>
        
                <div className="add_donation_card">
        
                    <div className="donation_address">
                        <h2>{t("pages.IndividualsDonationsHtmlAddDonation.text2")}</h2>
                        <input type="text" className="donation_input" placeholder={t("pages.IndividualsDonationsHtmlAddDonation.text3")} />
                    </div>
        
                    <div className="donation_type">
                        <h2>{t("pages.IndividualsDonationsHtmlAddDonation.text4")}</h2>
                        <div className="donation_type_buttons">
                            <button className="white_button">{t("pages.IndividualsDonationsHtmlAddDonation.text5")}</button>
                            <button className="white_button">{t("pages.IndividualsDonationsHtmlAddDonation.text6")}</button>
                            <button className="green_back">{t("pages.IndividualsDonationsHtmlAddDonation.text7")}</button>
                            <button className="white_button">{t("pages.IndividualsDonationsHtmlAddDonation.text8")}</button>
                        </div>
                    </div>
        
                    <div className="description_donation">
                        <h2>{t("pages.IndividualsDonationsHtmlAddDonation.text9")}</h2>
                        <textarea className="donation_textarea" placeholder={t("pages.IndividualsDonationsHtmlAddDonation.text10")}></textarea>
                    </div>
        
                    <Link className="tracking" to="/donations/requested">
                        <button>{t("pages.IndividualsDonationsHtmlAddDonation.text11")}</button>
                    </Link>
        
                </div>
        
        
        
        
        
            </main>
      </>
    </PageShell>;
}
export default IndividualsDonationsHtmlAddDonation;
