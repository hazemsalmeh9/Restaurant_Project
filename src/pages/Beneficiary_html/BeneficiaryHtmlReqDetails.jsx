import { useTranslation } from "react-i18next";
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Beneficiary_css/req_details.css?raw';
import image0 from '../../../imgs/QRcode.png';
function BeneficiaryHtmlReqDetails() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Document" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
        <main className="req-details">
        
                <h1 className="header">
                    <i className=" logo fa-solid fa-circle-check" style={{
            color: "rgb(111, 175, 166)"
          }}></i>
                    <span>{t("pages.BeneficiaryHtmlReqDetails.text1")}</span>
                </h1>
        
                <section className="upper-box">
                    <h5 className="head">{t("pages.BeneficiaryHtmlReqDetails.text2")}</h5>
                    <div className="text">
                        <h5>{t("pages.BeneficiaryHtmlReqDetails.text3")}</h5>
                        <h3>{t("pages.BeneficiaryHtmlReqDetails.text4")}</h3>
                    </div>
                    <div className="text">
                        <h5>{t("pages.BeneficiaryHtmlReqDetails.text5")}</h5>
                        <h3>{t("pages.BeneficiaryHtmlReqDetails.text6")}</h3>
                    </div>
                    <div className="text text-3">
                        <h5>{t("pages.BeneficiaryHtmlReqDetails.text7")}</h5>
                        <h3>{t("pages.BeneficiaryHtmlReqDetails.text8")}</h3>
                    </div>
        
                    <a href="">{t("pages.BeneficiaryHtmlReqDetails.text9")}</a>
                </section>
        
                <section className="lower-box">
                    <h3>{t("pages.BeneficiaryHtmlReqDetails.text10")}</h3>
                    <h5 className="text">{t("pages.BeneficiaryHtmlReqDetails.text11")}</h5>
                    <img style={{
            width: "160px",
            height: "160px"
          }} src={image0} alt="" />
                    <h5 className="code">A7K29</h5>
                </section>
        
            </main>
      </>
    </PageShell>;
}
export default BeneficiaryHtmlReqDetails;
