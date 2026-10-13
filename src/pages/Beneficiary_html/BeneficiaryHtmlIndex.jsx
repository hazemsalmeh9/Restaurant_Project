import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Beneficiary_css/home.css?raw';
function BeneficiaryHtmlIndex() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Home" bodyStyle="direction: rtl;" styles={[styles0, styles1]}>
      <>
            <main className="home">
        
                <section className="upper">
                    <h1>{t("pages.BeneficiaryHtmlIndex.text1")}</h1>
                    <h5>{t("pages.BeneficiaryHtmlIndex.text2")}</h5>
                </section>
        
                <section className="show-box mid">
                    <i className=" fork fa-solid fa-utensils" style={{
            color: "rgb(37, 104, 97)"
          }}></i>
                    <h5>{t("pages.BeneficiaryHtmlIndex.text3")}</h5>
                    <h5>{t("pages.BeneficiaryHtmlIndex.text4")}</h5>
                    <Link to="/beneficiary/meals">{t("pages.BeneficiaryHtmlIndex.text5")}</Link>
                </section>
        
                <section className="show-box lower">
                    <i className=" present fa-solid fa-gift" style={{
            color: "rgb(142, 78, 20)"
          }}></i>
                    <h5>{t("pages.BeneficiaryHtmlIndex.text6")}</h5>
                    <h5>{t("pages.BeneficiaryHtmlIndex.text7")}</h5>
                    <Link to="/beneficiary/donations">{t("pages.BeneficiaryHtmlIndex.text8")}</Link>
                </section>
        
            </main>
        
      </>
    </PageShell>;
}
export default BeneficiaryHtmlIndex;
