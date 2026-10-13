import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Individuals_Donations_css/donation_requested.css?raw';
function IndividualsDonationsHtmlDonationRequested() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Donation Requested" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <main className="main_content">
                <div className="donation_requested_page">
                    <div className="your_donation_successfully">
                        <i className="fa-solid fa-handshake" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <h1>{t("pages.IndividualsDonationsHtmlDonationRequested.text1")}</h1>
                        <p>{t("pages.IndividualsDonationsHtmlDonationRequested.text2")}</p>
                    </div>
                    <div className="vegetable_box_card">
                        <div className="top_section">
                            <i className="fa-solid fa-box-archive" style={{
                color: "rgba(63, 73, 71, 1)"
              }}></i>
                            <div className="text_section">
                                <h2>{t("pages.IndividualsDonationsHtmlDonationRequested.text3")}</h2>
                                <div className="fresh_food">
                                    <i className="fa-solid fa-shapes" style={{
                    color: "rgb(63, 73, 71)"
                  }}></i>
                                    <p>{t("pages.IndividualsDonationsHtmlDonationRequested.text4")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pickup_location">
                            <i className="fa-solid fa-location-dot" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                            <div className="text_section">
                                <p>{t("pages.IndividualsDonationsHtmlDonationRequested.text5")}</p>
                                <h3>{t("pages.IndividualsDonationsHtmlDonationRequested.text6")}</h3>
                            </div>
                        </div>
                        <div className="pickup_location">
                            <i className="fa-regular fa-clock" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                            <div className="text_section">
                                <p>{t("pages.IndividualsDonationsHtmlDonationRequested.text7")}</p>
                                <h3>{t("pages.IndividualsDonationsHtmlDonationRequested.text8")}</h3>
                            </div>
                        </div>
                    </div>
                    <Link className="view_details" to="/donations/review">
                        <button>{t("pages.IndividualsDonationsHtmlDonationRequested.text9")}</button>
                    </Link>
                    <Link className="return_home" to="/donations">
                        <button>{t("pages.IndividualsDonationsHtmlDonationRequested.text10")}</button>
                    </Link>
                    <p className="beneficiary_details">{t("pages.IndividualsDonationsHtmlDonationRequested.text11")}</p>
                </div>
            </main>
      </>
    </PageShell>;
}
export default IndividualsDonationsHtmlDonationRequested;
