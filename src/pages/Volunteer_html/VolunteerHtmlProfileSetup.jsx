import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Volunteer_css/profile_setup.css?raw';
function VolunteerHtmlProfileSetup() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Profile Set-Up" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <main className="profile_setup">
                <div className="head">
                    <h1>{t("pages.VolunteerHtmlProfileSetup.text1")}</h1>
                    <h5>{t("pages.VolunteerHtmlProfileSetup.text2")}</h5>
                </div>
                <section className="top">
                    <h2>{t("pages.VolunteerHtmlProfileSetup.text3")}</h2>
        
                    <div className="search">
                        <i className="fa-solid fa-location-dot" style={{
              color: "rgb(111, 121, 119)"
            }}></i>
                        <input placeholder={t("pages.VolunteerHtmlProfileSetup.text4")} type="text" />
                    </div>
        
                    <div className="options">
                        <input type="checkbox" name="location-1" id="loc-1" />
                        <label htmlFor="loc-1">{t("pages.VolunteerHtmlProfileSetup.text5")}</label>
        
                        <input type="checkbox" name="location-2" id="loc-2" />
                        <label htmlFor="loc-2">{t("pages.VolunteerHtmlProfileSetup.text6")}</label>
        
                        <input type="checkbox" name="location-3" id="loc-3" />
                        <label htmlFor="loc-3">{t("pages.VolunteerHtmlProfileSetup.text7")}</label>
        
                        <input type="checkbox" name="location-4" id="loc-4" />
                        <label htmlFor="loc-4">{t("pages.VolunteerHtmlProfileSetup.text8")}</label>
                    </div>
        
                </section>
        
        
                <section className="mid">
                    <h2>{t("pages.VolunteerHtmlProfileSetup.text9")}</h2>
                    <div className="transport">
                        <input type="radio" name="mode" id="walking" checked />
                        <label htmlFor="walking">
                        <i className="logo fa-solid fa-person-walking"></i>
                        <span>{t("pages.VolunteerHtmlProfileSetup.text10")}</span>
                        </label>
        
                        <input type="radio" name="mode" id="car" />
                        <label htmlFor="car">
                        <i className="logo fa-solid fa-car"></i>
                        <span>{t("pages.VolunteerHtmlProfileSetup.text11")}</span>
                        </label>
        
                        <input type="radio" name="mode" id="other" />
                        <label htmlFor="other">
                        <i className="logo fa-solid fa-motorcycle"></i>
                        <span>{t("pages.VolunteerHtmlProfileSetup.text12")}</span>
                        </label>
                    </div>
                </section>
        
        
                <section className="lower">
                    <h2>{t("pages.VolunteerHtmlProfileSetup.text13")}</h2>
                    <div className="box">
                        <input type="checkbox" id="morning" />
                        <label htmlFor="morning">
                            <i className=" tick fa-solid fa-square-check" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                        </label>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlProfileSetup.text14")}</h5>
                            <h5>{t("pages.VolunteerHtmlProfileSetup.text15")}</h5>
                        </div>
                    </div>
        
                    <div className="box">
                        <input type="checkbox" id="afternoon" />
                        <label htmlFor="afternoon">
                            <i className="tick fa-solid fa-square-check" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                        </label>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlProfileSetup.text16")}</h5>
                            <h5>{t("pages.VolunteerHtmlProfileSetup.text17")}</h5>
                        </div>
                    </div>
        
                    <div className="box">
                        <input type="checkbox" id="evening" />
                        <label htmlFor="evening">
                            <i className="tick fa-solid fa-square-check" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                        </label>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlProfileSetup.text18")}</h5>
                            <h5>{t("pages.VolunteerHtmlProfileSetup.text19")}</h5>
                        </div>
                    </div>
        
                </section>
        
                <Link to="/volunteer/opportunities">{t("pages.VolunteerHtmlProfileSetup.text20")}</Link>
            </main>
      </>
    </PageShell>;
}
export default VolunteerHtmlProfileSetup;
