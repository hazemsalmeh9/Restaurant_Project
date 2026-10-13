import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Volunteer_css/confirm.css?raw';
function VolunteerHtmlConfirm() {
  const {
    t
  } = useTranslation();
  const [isConfirmed, setIsConfirmed] = useState(false);
  return <PageShell title="Restaurants Project" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <main className="confirm">
                <div className="header">
                    <h1>{t("pages.VolunteerHtmlConfirm.text1")}</h1>
                    <h5>{t("pages.VolunteerHtmlConfirm.text2")}</h5>
                </div>
        
                <div className="box">
                    <div className="row">
                        <i className="logo-1 fa-solid fa-circle-check" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h6>{t("pages.VolunteerHtmlConfirm.text3")}</h6>
                            <h5>{t("pages.VolunteerHtmlConfirm.text4")}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <i className="logo-2 fa-solid fa-location-dot" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h6>{t("pages.VolunteerHtmlConfirm.text5")}</h6>
                            <h5>{t("pages.VolunteerHtmlConfirm.text6")}</h5>
                        </div>
                    </div>
                </div>
        
                <h2>{t("pages.VolunteerHtmlConfirm.text7")}</h2>
        
                <a id="yes-but" href="" onClick={event => {
          event.preventDefault();
          setIsConfirmed(true);
        }}>{t("pages.VolunteerHtmlConfirm.text8")}</a>
                <a href="">{t("pages.VolunteerHtmlConfirm.text9")}</a>
            
            </main>
            
            
                <div id="overlay" className="overlay" style={isConfirmed ? {
        opacity: 1,
        visibility: 'visible'
      } : undefined}></div>
                <div id="conf-modal" className={`conf-modal${isConfirmed ? ' open' : ''}`}>
                    <i className="fa-solid fa-hand-holding-heart" style={{
          color: "rgb(255, 255, 255)"
        }}></i>
                    <div className="texts">
                        <h2>{t("pages.VolunteerHtmlConfirm.text10")}</h2>
                        <h3>{t("pages.VolunteerHtmlConfirm.text11")}</h3>
                        <p>{t("pages.VolunteerHtmlConfirm.text12")}</p>
                    </div>
                    <a href="">{t("pages.VolunteerHtmlConfirm.text13")}</a>
                    <Link to="/volunteer">{t("pages.VolunteerHtmlConfirm.text14")}</Link>
                </div>
      </>
    </PageShell>;
}
export default VolunteerHtmlConfirm;
