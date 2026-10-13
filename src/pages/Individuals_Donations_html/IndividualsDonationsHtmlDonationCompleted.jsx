import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Individuals_Donations_css/donation_completed.css?raw';
function IndividualsDonationsHtmlDonationCompleted() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Donation Completed" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <main className="main_content">
                <div className="donation_completed_page">
                    <div className="check_border">
                        <i className="fa-regular fa-circle-check" style={{
              color: "rgba(0, 66, 60, 1)"
            }}></i>
                    </div>
                    <h1>{t("pages.IndividualsDonationsHtmlDonationCompleted.text1")}</h1>
                    <p>{t("pages.IndividualsDonationsHtmlDonationCompleted.text2")}</p>
        
                    <div className="donation_explanation">
                        <i className="fa-solid fa-hand-holding-heart" style={{
              color: "rgba(37, 104, 97, 1)"
            }}></i>
                        <h3>{t("pages.IndividualsDonationsHtmlDonationCompleted.text3")}</h3>
                    </div>
        
                    <Link to="/donations/mine">
                        <button className="return_donations">{t("pages.IndividualsDonationsHtmlDonationCompleted.text4")}</button>
                    </Link>
                    <Link to="/donations/new">
                        <button className="add_donation">{t("pages.IndividualsDonationsHtmlDonationCompleted.text5")}</button>
                    </Link>
                </div>
            </main>
      </>
    </PageShell>;
}
export default IndividualsDonationsHtmlDonationCompleted;
