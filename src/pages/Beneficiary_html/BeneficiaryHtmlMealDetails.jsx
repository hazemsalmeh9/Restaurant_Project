import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Beneficiary_css/meal_details.css?raw';
function BeneficiaryHtmlMealDetails() {
  const {
    t
  } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return <PageShell title="Restaurants Project" bodyStyle="direction: rtl; background-color: #eee;" styles={[styles0, styles1]}>
      <>
        <main className="meal-det">
        
                <section className="box">
                    <i className=" logo fa-solid fa-utensils" style={{
            color: "rgb(37, 104, 97)"
          }}></i>
                    <div className="texts">
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text1")}</h5>
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text2")}</h5>
                    </div>
                </section>
        
                <section className="box light">
                    <i className=" logo fa-solid fa-box-archive" style={{
            color: "rgb(37, 104, 97)"
          }}></i>
                    <div className="texts">
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text3")}</h5>
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text4")}</h5>
                    </div>
                </section>
                
                <section className="box light">
                    <i className=" logo fa-regular fa-clock" style={{
            color: "rgb(37, 104, 97)"
          }}></i>
                    <div className="texts">
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text5")}</h5>
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text6")}</h5>
                    </div>
                </section>
        
                <section className="box light">
                    <i className=" logo fa-regular fa-clock" style={{
            color: "rgb(37, 104, 97)"
          }}></i>
                    <div className="texts">
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text7")}</h5>
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text8")}</h5>
                        <a className="show" href="https://www.google.com/maps"> <span><i className=" map fa-regular fa-map" style={{
                  color: "rgb(37, 104, 97)"
                }}></i></span>{t("pages.BeneficiaryHtmlMealDetails.text9")}</a>
                    </div>
                </section>
        
        
                <button id="openBtn" onClick={() => setIsOpen(true)}>{t("pages.BeneficiaryHtmlMealDetails.text10")}</button>
                <div id="myModal" className="pop-up" style={isOpen ? {
          display: 'block'
        } : undefined}>
                    <div className="modal-content">
                        <i className=" logo fa-solid fa-circle-check" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text11")}</h5>
                        <h5>{t("pages.BeneficiaryHtmlMealDetails.text12")}</h5>
                        <Link to="/beneficiary">{t("pages.BeneficiaryHtmlMealDetails.text13")}</Link>
                    </div>
                </div>
        
            </main>
      </>
    </PageShell>;
}
export default BeneficiaryHtmlMealDetails;
