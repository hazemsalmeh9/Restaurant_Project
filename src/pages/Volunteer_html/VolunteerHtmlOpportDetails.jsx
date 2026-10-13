import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Volunteer_css/opport_details.css?raw';
function VolunteerHtmlOpportDetails() {
  const {
    t
  } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return <PageShell title="Restaurants Project" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <main className="opp-det">
                <h1>
                    <Link to="/volunteer/opportunities"><i className=" logo fa-solid fa-arrow-right" style={{
              color: "rgb(63, 73, 71)"
            }}></i></Link>{t("pages.VolunteerHtmlOpportDetails.text1")}</h1>
        
                <div className="box-one">
                    <div className="up">
                        <h2>{t("pages.VolunteerHtmlOpportDetails.text2")}</h2>
                        <h5>
                            <i className="logo fa-solid fa-utensils" style={{
                color: "rgb(63, 73, 71)"
              }}></i>{t("pages.VolunteerHtmlOpportDetails.text3")}</h5>
                    </div>
                    <div className="low">
                       <div className="right">
                            <h6>{t("pages.VolunteerHtmlOpportDetails.text4")}</h6>
                            <h5>{t("pages.VolunteerHtmlOpportDetails.text5")}</h5>
                        </div>
                        <div className="left">
                            <h6>{t("pages.VolunteerHtmlOpportDetails.text6")}</h6>
                            <h5>
                                <i className="logo fa-solid fa-calendar-day" style={{
                  color: "rgb(37, 104, 97)"
                }}></i>{t("pages.VolunteerHtmlOpportDetails.text7")}</h5>
                        </div>
                    </div>
                </div>
        
                <div className="box-two">
                    <h2>{t("pages.VolunteerHtmlOpportDetails.text8")}</h2>
                    <div className="row">
                        <i className="logo logo-1 fa-regular fa-circle-dot" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h6>{t("pages.VolunteerHtmlOpportDetails.text9")}</h6>
                            <h5>{t("pages.VolunteerHtmlOpportDetails.text10")}</h5>
                        </div>
                    </div>
        
                    <div className="row">
                        <i className="logo fa-regular fa-circle-dot" style={{
              color: "rgb(142, 78, 20)"
            }}></i>
                        <div className="texts">
                            <h6>{t("pages.VolunteerHtmlOpportDetails.text11")}</h6>
                            <h5>{t("pages.VolunteerHtmlOpportDetails.text12")}</h5>
                        </div>
                    </div>
                </div>
        
                <div className="box-thr">
                    <i className=" logo-2 fa-solid fa-circle-info" style={{
            color: "rgb(37, 104, 97)"
          }}></i>
                    <div className="texts">
                        <h5>{t("pages.VolunteerHtmlOpportDetails.text13")}</h5>
                        <h6>{t("pages.VolunteerHtmlOpportDetails.text14")}</h6>
                    </div>
                </div>
        
        
                <a id="button" href="" onClick={event => {
          event.preventDefault();
          setIsOpen(true);
        }}>{t("pages.VolunteerHtmlOpportDetails.text15")}</a>
                <Link to="/volunteer/opportunities">{t("pages.VolunteerHtmlOpportDetails.text16")}</Link>
            
        
        
        
                <div className={`overlay${isOpen ? ' show' : ''}`} id="overlay"></div>
                
                <div className={`modal-cont${isOpen ? ' open' : ''}`} id="modal">
        
                    <div className="dash"></div>
                    <i className=" logo-3 fa-solid fa-hand-holding-heart" style={{
            color: "rgb(37, 104, 97)"
          }}></i>
                    <div className="texts">
                        <h2>{t("pages.VolunteerHtmlOpportDetails.text17")}</h2>
                        <h5>{t("pages.VolunteerHtmlOpportDetails.text18")}</h5>
                    </div>
                    <div className="lower">
                        <h5>
                            <i className="logo-4 fa-solid fa-location-dot" style={{
                color: "rgb(111, 121, 119)"
              }}></i>{t("pages.VolunteerHtmlOpportDetails.text19")}</h5>
                        <h5>
                            <i className="logo-4 fa-regular fa-clock" style={{
                color: "rgb(111, 121, 119)"
              }}></i>{t("pages.VolunteerHtmlOpportDetails.text20")}</h5>
                        <h5>
                            <i className="logo-4 fa-solid fa-utensils" style={{
                color: "rgb(111, 121, 119)"
              }}></i>{t("pages.VolunteerHtmlOpportDetails.text21")}</h5>
                    </div>
        
                    <Link to="/volunteer/pickup">{t("pages.VolunteerHtmlOpportDetails.text22")}</Link>
                    <a id="cancel" href="" onClick={event => {
            event.preventDefault();
            setIsOpen(false);
          }}>{t("pages.VolunteerHtmlOpportDetails.text23")}</a>
        
                </div>
        </main>
      </>
    </PageShell>;
}
export default VolunteerHtmlOpportDetails;
