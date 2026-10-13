import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Volunteer_css/delivery_task.css?raw';
function VolunteerHtmlDeliveryTask() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Restaurants Project" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <div className="header">
                <i className="logo-1 fa-solid fa-arrow-right" style={{
          color: "rgb(63, 73, 71)"
        }}></i>
                <h1>{t("pages.VolunteerHtmlDeliveryTask.text1")}</h1>
            </div>
            <main className="del-tak">
        
                <div className="steps">
                    <div className=" line line-1 step accept">
                        <i className=" logo-ac fa-solid fa-check" style={{
              color: "rgba(0, 66, 60, 1)"
            }}></i>
                        <h5>{t("pages.VolunteerHtmlDeliveryTask.text2")}</h5>
                    </div>
                    <div className="line step take">
                        <i className=" logo-ac fa-solid fa-check" style={{
              color: "rgba(0, 66, 60, 1)"
            }}></i>
                        <h5>{t("pages.VolunteerHtmlDeliveryTask.text3")}</h5>
                    </div>
                    <div className="line step deliver">
                        <i className="logo-2  fa-solid fa-truck"></i>
                        <h5>{t("pages.VolunteerHtmlDeliveryTask.text4")}</h5>
                    </div>
                    <div className="step approve">
                        <i className="logo-2 fa-solid fa-check-double" style={{
              color: "rgb(63, 73, 71)"
            }}></i>
                        <h5>{t("pages.VolunteerHtmlDeliveryTask.text5")}</h5>
                    </div>
                </div>
        
        
        
                <div className="box">
                    <div className="head">
                        <h2>{t("pages.VolunteerHtmlDeliveryTask.text6")}</h2>
                        <div className="est">
                            <i className="fa-regular fa-clock" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                            <h5>{t("pages.VolunteerHtmlDeliveryTask.text7")}</h5>
                        </div>
                    </div>
                    <div className="cont det">
                        <i className="fa-solid fa-utensils" style={{
              color: "rgb(111, 175, 166)"
            }}></i>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlDeliveryTask.text8")}</h5>
                            <h2>{t("pages.VolunteerHtmlDeliveryTask.text9")}</h2>
                        </div>
                    </div>
        
                    <div className="dest det">
                        <i className="fa-solid fa-location-dot" style={{
              color: "rgb(111, 175, 166)"
            }}></i>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlDeliveryTask.text10")}</h5>
                            <h2>{t("pages.VolunteerHtmlDeliveryTask.text11")}</h2>
                            <a href="https://www.youtube.com/">{t("pages.VolunteerHtmlDeliveryTask.text12")}</a>
                        </div>
                    </div>
        
                    <div className="note">
                        <i className="fa-solid fa-circle-info" style={{
              color: "rgb(142, 78, 20)"
            }}></i>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlDeliveryTask.text13")}</h5>
                            <h6>{t("pages.VolunteerHtmlDeliveryTask.text14")}</h6>
                        </div>
                    </div>
        
                </div>
                <Link className="main-but" to="/volunteer/confirm">empty but</Link>
            
            </main>
      </>
    </PageShell>;
}
export default VolunteerHtmlDeliveryTask;
