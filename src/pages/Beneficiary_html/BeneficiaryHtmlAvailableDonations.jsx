import { useTranslation } from "react-i18next";
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Beneficiary_css/available_donations.css?raw';
function BeneficiaryHtmlAvailableDonations() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Restaurants Project" bodyStyle="background-color: #eee; direction: rtl;" styles={[styles0, styles1]}>
      <>
        <section className="upper">
                <h1>{t("pages.BeneficiaryHtmlAvailableDonations.text1")}</h1>
                <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text2")}</h5>
            </section>
        
            <main className="donations">
        
                <section className="box">
                    <div className="up">
                        <i className=" logo fa-solid fa-box-archive" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h3>{t("pages.BeneficiaryHtmlAvailableDonations.text3")}</h3>
                            <div className="type">
                                <i className="fa-solid fa-shapes" style={{
                  color: "rgb(63, 73, 71)"
                }}></i>
                                <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text4")}</h5>
                            </div>
                            <div className="location">
                                <i className="fa-solid fa-location-dot" style={{
                  color: "rgb(63, 73, 71)"
                }}></i>
                                <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text5")}</h5>
                            </div>
                        </div>
                    </div>
        
                    <a href="">{t("pages.BeneficiaryHtmlAvailableDonations.text6")}</a>
                </section>
        
                <section className="box">
                    <div className="up">
                        <i className=" logo fa-solid fa-shirt" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h3>{t("pages.BeneficiaryHtmlAvailableDonations.text7")}</h3>
        
                            <div className="type">
                                <i className="fa-solid fa-shapes" style={{
                  color: "rgb(63, 73, 71)"
                }}></i>
                                <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text8")}</h5>
                            </div>
                            <div className="location">
                                <i className="fa-solid fa-location-dot" style={{
                  color: "rgb(63, 73, 71)"
                }}></i>
                                <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text9")}</h5>
                            </div>
                        </div>
                    </div>
        
                    <a href="">{t("pages.BeneficiaryHtmlAvailableDonations.text10")}</a>
                </section>
                
                <section className="box">
                    <div className="up">
                        <i className=" logo fa-solid fa-book-open" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h3>{t("pages.BeneficiaryHtmlAvailableDonations.text11")}</h3>
        
        
                            <div className="type">
                                <i className="fa-solid fa-shapes" style={{
                  color: "rgb(63, 73, 71)"
                }}></i>
                                <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text12")}</h5>
                            </div>
                            <div className="location">
                                <i className="fa-solid fa-location-dot" style={{
                  color: "rgb(63, 73, 71)"
                }}></i>
                                <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text13")}</h5>
                            </div>
                        </div>
                    </div>
        
                    <a href="">{t("pages.BeneficiaryHtmlAvailableDonations.text14")}</a>
                </section>
        
                <section className="box">
                    <div className="up">
                        <i className=" logo fa-solid fa-couch" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h3>{t("pages.BeneficiaryHtmlAvailableDonations.text15")}</h3>
        
        
        
                            <div className="type">
                                <i className="fa-solid fa-shapes" style={{
                  color: "rgb(63, 73, 71)"
                }}></i>
                                <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text16")}</h5>
                            </div>
                            <div className="location">
                                <i className="fa-solid fa-location-dot" style={{
                  color: "rgb(63, 73, 71)"
                }}></i>
                              <h5>{t("pages.BeneficiaryHtmlAvailableDonations.text17")}</h5>
                            </div>
                        </div>
                    </div>
        
                    <a href="">{t("pages.BeneficiaryHtmlAvailableDonations.text18")}</a>
                </section>
        
            </main>
      </>
    </PageShell>;
}
export default BeneficiaryHtmlAvailableDonations;
