import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Volunteer_css/volunteer_info.css?raw';
function VolunteerHtmlVolunteerInfo() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Volunteer" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <main className="volunteer-info">
        
                <section className="header">
                    <h1>{t("pages.VolunteerHtmlVolunteerInfo.text1")}</h1>
                    <h5>{t("pages.VolunteerHtmlVolunteerInfo.text2")}</h5>
                </section>
        
                <section className="info">
                    <h2>{t("pages.VolunteerHtmlVolunteerInfo.text3")}</h2>
        
                    <div className="box">
                        <i className=" logo fa-solid fa-box-archive" style={{
              color: "rgb(111, 175, 166)"
            }}></i>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlVolunteerInfo.text4")}</h5>
                            <h6>{t("pages.VolunteerHtmlVolunteerInfo.text5")}</h6>
                        </div>
                    </div>
        
                    <div className="box">
                        <i className="logo fa-solid fa-truck-fast" style={{
              color: "rgb(111, 175, 166)"
            }}></i>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlVolunteerInfo.text6")}</h5>
                            <h6>{t("pages.VolunteerHtmlVolunteerInfo.text7")}</h6>
                        </div>
                    </div>
        
                    <div className="box">
                        <i className="logo fa-solid fa-hand-holding-heart" style={{
              color: "rgb(111, 175, 166)"
            }}></i>
                        <div className="texts">
                            <h5>{t("pages.VolunteerHtmlVolunteerInfo.text8")}</h5>
                            <h6>{t("pages.VolunteerHtmlVolunteerInfo.text9")}</h6>
        
                        </div>
                    </div>
        
                </section>
        
                <section className="join">
                    <h5>{t("pages.VolunteerHtmlVolunteerInfo.text10")}</h5>
                    <h5>{t("pages.VolunteerHtmlVolunteerInfo.text11")}</h5>
                    <Link to="/volunteer/join">{t("pages.VolunteerHtmlVolunteerInfo.text12")}</Link>
                </section>
        
            </main>
      </>
    </PageShell>;
}
export default VolunteerHtmlVolunteerInfo;
