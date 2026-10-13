import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Beneficiary_css/my_requests.css?raw';
function BeneficiaryHtmlMyRequests() {
  const {
    t
  } = useTranslation();
  return <PageShell title="My" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <h1>{t("pages.BeneficiaryHtmlMyRequests.text1")}</h1>
        
            <div className="tabs">
                <button>{t("pages.BeneficiaryHtmlMyRequests.text2")}</button>
                <button>{t("pages.BeneficiaryHtmlMyRequests.text3")}</button>
            </div>
            <main className="my-requests">
        
        
                <section className="box">
                    <div className="up">
                        <i className=" logo fa-solid fa-utensils" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h5>{t("pages.BeneficiaryHtmlMyRequests.text4")}</h5>
                            <h5>
                                <i className="fa-solid fa-location-dot" style={{
                  color: "rgb(37, 104, 97)"
                }}></i>
                                <span>{t("pages.BeneficiaryHtmlMyRequests.text5")}</span>
                            </h5>
                        </div>
                        <h5 className="ready">
                            <i className=" circle fa-solid fa-circle" style={{
                color: "rgb(111, 175, 166)"
              }}></i>
                            <span>{t("pages.BeneficiaryHtmlMyRequests.text6")}</span>
                        </h5>
                    </div>
        
                    <div className="lower">
                        <h5>{t("pages.BeneficiaryHtmlMyRequests.text7")}</h5>
                        <h5 className="det"> 
                            <Link to="/beneficiary/requests/details">{t("pages.BeneficiaryHtmlMyRequests.text8")}</Link> 
                            <i className=" arrow fa-solid fa-angle-left" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                        </h5>
                    </div>
                </section>
        
                <section className="box">
                    <div className="up">
                        <i className=" logo fa-solid fa-pizza-slice" style={{
              color: "rgb(142, 78, 20)"
            }}></i>
                        <div className="texts">
                            <h5>{t("pages.BeneficiaryHtmlMyRequests.text9")}</h5>
                            <h5>
                                <i className="fa-solid fa-location-dot" style={{
                  color: "rgb(37, 104, 97)"
                }}></i>
                                <span>{t("pages.BeneficiaryHtmlMyRequests.text10")}</span>
                            </h5>
                        </div>
                        <h5 className="ready-2">
                            <i className=" circle fa-solid fa-circle" style={{
                color: "rgb(255, 171, 105)"
              }}></i>
                            <span>{t("pages.BeneficiaryHtmlMyRequests.text11")}</span>
                        </h5>
                    </div>
        
                    <div className="lower">
                        <h5>{t("pages.BeneficiaryHtmlMyRequests.text12")}</h5>
                        <h5 className="det"> 
                            <Link to="/beneficiary/requests/details">{t("pages.BeneficiaryHtmlMyRequests.text13")}</Link>
                            <i className=" arrow fa-solid fa-angle-left" style={{
                color: "rgb(37, 104, 97)"
              }}></i>
                        </h5>
                    </div>
                </section>
        
            </main>
      </>
    </PageShell>;
}
export default BeneficiaryHtmlMyRequests;
