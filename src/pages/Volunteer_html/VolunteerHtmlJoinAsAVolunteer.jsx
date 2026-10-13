import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Volunteer_css/join_as_a_volunteer.css?raw';
function VolunteerHtmlJoinAsAVolunteer() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Restaurants Project" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <main className="join-page">
        
                <section className="texts">
                    <h1>{t("pages.VolunteerHtmlJoinAsAVolunteer.text1")}</h1>
                    <h5>{t("pages.VolunteerHtmlJoinAsAVolunteer.text2")}</h5>
                </section>
        
        
                <form action="">
                    <div className="name box">
                        <label htmlFor="fullName">{t("pages.VolunteerHtmlJoinAsAVolunteer.text3")}</label>
                        <input placeholder={t("pages.VolunteerHtmlJoinAsAVolunteer.text4")} type="text" id="fullName" />
                    </div>
        
                    <div className="number box">
                        <label htmlFor="num">{t("pages.VolunteerHtmlJoinAsAVolunteer.text5")}</label>
                        <input placeholder="09XX XXX XXX" type="number" id="num" />
                    </div>
        
                    <div className="city box">
                        <label htmlFor="city">{t("pages.VolunteerHtmlJoinAsAVolunteer.text6")}</label>
                        <select required name="city" id="city">
                            <option value="" disabled selected>{t("pages.VolunteerHtmlJoinAsAVolunteer.text7")}</option>
                            <option value="damascus">{t("pages.VolunteerHtmlJoinAsAVolunteer.text8")}</option>
                            <option value="homs">{t("pages.VolunteerHtmlJoinAsAVolunteer.text9")}</option>
                            <option value="aleppo">{t("pages.VolunteerHtmlJoinAsAVolunteer.text10")}</option>
                            <option value="latkia">{t("pages.VolunteerHtmlJoinAsAVolunteer.text11")}</option>
                            <option value="idlib">{t("pages.VolunteerHtmlJoinAsAVolunteer.text12")}</option>
                            <option value="tartus">{t("pages.VolunteerHtmlJoinAsAVolunteer.text13")}</option>
                            <option value="alhasaka">{t("pages.VolunteerHtmlJoinAsAVolunteer.text14")}</option>
                            <option value="der al-zor">{t("pages.VolunteerHtmlJoinAsAVolunteer.text15")}</option>
                            <option value="hama">{t("pages.VolunteerHtmlJoinAsAVolunteer.text16")}</option>
                            <option value="al raqqa">{t("pages.VolunteerHtmlJoinAsAVolunteer.text17")}</option>
                            <option value="damascus-city-side">{t("pages.VolunteerHtmlJoinAsAVolunteer.text18")}</option>
                        </select>
                    </div>
        
                    <div className="contact">
                        <h5>{t("pages.VolunteerHtmlJoinAsAVolunteer.text19")}</h5>
                        <div className="selection">
                            <div className="first">
                                <input type="radio" id="wat" name="contact" value="whatsapp" checked />
                                <label htmlFor="wa">{t("pages.VolunteerHtmlJoinAsAVolunteer.text20")}</label>
                            </div>
                            <div className="second">
                                <input type="radio" id="call" name="contact" value="call" />
                                <label htmlFor="wa">{t("pages.VolunteerHtmlJoinAsAVolunteer.text21")}</label>
                            </div>
                        </div>
                    </div>
                    <div className="bio">
                        <label htmlFor="bio">{t("pages.VolunteerHtmlJoinAsAVolunteer.text22")}</label>
                        <textarea name="bio" placeholder={t("pages.VolunteerHtmlJoinAsAVolunteer.text23")}></textarea>
                    </div>
                </form>
        
                <Link to="/volunteer/profile">{t("pages.VolunteerHtmlJoinAsAVolunteer.text24")}</Link>
            </main>
      </>
    </PageShell>;
}
export default VolunteerHtmlJoinAsAVolunteer;
