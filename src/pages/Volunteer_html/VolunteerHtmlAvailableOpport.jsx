import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Volunteer_css/available_opport.css?raw';
function VolunteerHtmlAvailableOpport() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Restaurants Project" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <main className="opport">
                <div className="head">
                    <h1>{t("pages.VolunteerHtmlAvailableOpport.text1")}</h1>
                    <h5>{t("pages.VolunteerHtmlAvailableOpport.text2")}</h5>
                </div>
        
                <section>
                    <div className="box">
                        <div className="header">
                            <h2>{t("pages.VolunteerHtmlAvailableOpport.text3")}</h2>
                            <h3>{t("pages.VolunteerHtmlAvailableOpport.text4")}</h3>
                        </div>
                        <div className="row">
                            <h5>
                                <i className="logo fa-solid fa-utensils" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>{t("pages.VolunteerHtmlAvailableOpport.text5")}</h5>
                            <h5>
                                <i className="logo fa-solid fa-box-archive" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>{t("pages.VolunteerHtmlAvailableOpport.text6")}</h5>
                        </div>
                        <div className="row">
                            <h5>
                                <i className="logo fa-solid fa-location-dot" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>{t("pages.VolunteerHtmlAvailableOpport.text7")}</h5>
                            <h5>
                                <i className="logo fa-regular fa-clock" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>{t("pages.VolunteerHtmlAvailableOpport.text8")}</h5>
                        </div>
                        <Link to="/volunteer/opportunities/details">{t("pages.VolunteerHtmlAvailableOpport.text9")}</Link>
                    </div>
        
                    <div className="box">
                        <div className="header">
                            <h2>{t("pages.VolunteerHtmlAvailableOpport.text10")}</h2>
                        
                        </div>
                        <div className="row">
                            <h5>
                                <i className="logo fa-solid fa-hand-holding-heart" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>{t("pages.VolunteerHtmlAvailableOpport.text11")}</h5>
                            <h5>
                                <i className="fa-solid fa-bag-shopping" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>{t("pages.VolunteerHtmlAvailableOpport.text12")}</h5>
                        </div>
                        <div className="row">
                            <h5>
                                <i className="logo fa-solid fa-location-dot" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>{t("pages.VolunteerHtmlAvailableOpport.text13")}</h5>
                            <h5>
                                <i className="logo fa-regular fa-clock" style={{
                  color: "rgb(111, 121, 119)"
                }}></i>{t("pages.VolunteerHtmlAvailableOpport.text14")}</h5>
                        </div>
                        <Link to="/volunteer/opportunities/details">{t("pages.VolunteerHtmlAvailableOpport.text15")}</Link>
                    </div>
        
                </section>
        
            </main>
      </>
    </PageShell>;
}
export default VolunteerHtmlAvailableOpport;
