import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Volunteer_css/pickup.css?raw';
function VolunteerHtmlPickup() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Restaurants Project" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <main className="pickup">
                <div className="header">
                    <i className="logo-1 fa-solid fa-xmark" style={{
            color: "rgb(63, 73, 71)"
          }}></i>
                    <h1>{t("pages.VolunteerHtmlPickup.text1")}</h1>
                </div>
                <div className="steps">
                    <div className=" line line-1 step accept">
                        <i className=" logo-ac fa-solid fa-check" style={{
              color: "rgb(255, 255, 255)"
            }}></i>
                        <h5>{t("pages.VolunteerHtmlPickup.text2")}</h5>
                    </div>
                    <div className="line step take">
                        <i className=" logo-t fa-solid fa-circle" style={{
              color: "rgb(111, 175, 166)"
            }}></i>
                        <h5>{t("pages.VolunteerHtmlPickup.text3")}</h5>
                    </div>
                    <div className="line step deliver">
                        <i className="logo-2  fa-solid fa-truck" style={{
              color: "rgb(63, 73, 71)"
            }}></i>
                        <h5>{t("pages.VolunteerHtmlPickup.text4")}</h5>
                    </div>
                    <div className="step approve">
                        <i className="logo-2 fa-solid fa-check-double" style={{
              color: "rgb(63, 73, 71)"
            }}></i>
                        <h5>{t("pages.VolunteerHtmlPickup.text5")}</h5>
                    </div>
                </div>
        
                <div className="texts">
                    <h2>{t("pages.VolunteerHtmlPickup.text6")}</h2>
                    <h6>{t("pages.VolunteerHtmlPickup.text7")}</h6>
                </div>
        
                <div className="box">
                    <div className="head">
                        <i className="logo-3 fa-solid fa-store" style={{
              color: "rgb(111, 175, 166)"
            }}></i>
                        <div className="texts-2">
                            <h3>{t("pages.VolunteerHtmlPickup.text8")}</h3>
                            <h5>{t("pages.VolunteerHtmlPickup.text9")}</h5>
                        </div>
                    </div>
        
                    <div className="loc">
                        <a href="">
                            <i className="logo-4 fa-solid fa-diamond-turn-right" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                            <h6>{t("pages.VolunteerHtmlPickup.text10")}</h6>
                        </a>
                    </div>
        
                    <div className="lower">
                        <div className="right">
                            <h6>{t("pages.VolunteerHtmlPickup.text11")}</h6>
                            <h4>
                                <i className="fa-solid fa-box-archive" style={{
                  color: "rgb(111, 175, 166)"
                }}></i>{t("pages.VolunteerHtmlPickup.text12")}</h4>
                        </div>
                        <div className="left">
                            <h6>{t("pages.VolunteerHtmlPickup.text13")}</h6>
                            <h4>
                                <i className="fa-regular fa-clock" style={{
                  color: "rgb(111, 175, 166)"
                }}></i>
                                5:00 PM
                            </h4>
                        </div>
                    </div>
                </div>
                
                <Link to="/volunteer/delivery">{t("pages.VolunteerHtmlPickup.text14")}</Link>
                <a href="">{t("pages.VolunteerHtmlPickup.text15")}</a>
        
            </main>
      </>
    </PageShell>;
}
export default VolunteerHtmlPickup;
