import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/Global.css?raw';
import styles1 from '../../../Beneficiary_css/available_meals.css?raw';
function BeneficiaryHtmlAvailableMeals() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Restaurants Project" bodyStyle="direction: rtl; background-color: #eee;" styles={[styles0, styles1]}>
      <>
        <section className="upper">
                <h1>{t("pages.BeneficiaryHtmlAvailableMeals.text1")}</h1>
                <h5>{t("pages.BeneficiaryHtmlAvailableMeals.text2")}</h5>
            </section>
            <main className="meals">
        
        
                <section className="box">
                    <div className="up">
                        <i className=" logo fa-solid fa-bowl-food" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h3>{t("pages.BeneficiaryHtmlAvailableMeals.text3")}</h3>
                            <h5><span><i className="fa-solid fa-box-archive" style={{
                    color: "rgb(37, 104, 97)"
                  }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text4")}</h5>
                        </div>
                    </div>
                    <div className="mid">
                        <h5><span><i className="fa-regular fa-clock" style={{
                  color: "rgb(111, 121, 119)"
                }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text5")}</h5>
                        <h5><span><i className="fa-solid fa-location-dot" style={{
                  color: "rgb(111, 121, 119)"
                }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text6")}</h5>
                    </div>
                    <Link to="/beneficiary/meals/details">{t("pages.BeneficiaryHtmlAvailableMeals.text7")}</Link>
                </section>
        
                <section className="box">
                    <div className="up">
                        <i className="brown logo fa-solid fa-bread-slice" style={{
              color: "rgb(142, 78, 20)"
            }}></i>
                        <div className="texts">
                            <h3>{t("pages.BeneficiaryHtmlAvailableMeals.text8")}</h3>
                            <h5><span><i className="fa-solid fa-box-archive" style={{
                    color: "rgb(37, 104, 97)"
                  }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text9")}</h5>
                        </div>
                    </div>
                    <div className="mid">
                        <h5><span><i className="fa-regular fa-clock" style={{
                  color: "rgb(111, 121, 119)"
                }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text10")}</h5>
                        <h5><span><i className="fa-solid fa-location-dot" style={{
                  color: "rgb(111, 121, 119)"
                }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text11")}</h5>
                    </div>
                    <Link to="/beneficiary/meals/details">{t("pages.BeneficiaryHtmlAvailableMeals.text12")}</Link>
                </section>
        
                <section className="box">
                    <div className="up">
                        <i className=" logo fa-solid fa-utensils" style={{
              color: "rgb(37, 104, 97)"
            }}></i>
                        <div className="texts">
                            <h3>{t("pages.BeneficiaryHtmlAvailableMeals.text13")}</h3>
                            <h5><span><i className="fa-solid fa-box-archive" style={{
                    color: "rgb(37, 104, 97)"
                  }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text14")}</h5>
                        </div>
                    </div>
                    <div className="mid">
                        <h5><span><i className="fa-regular fa-clock" style={{
                  color: "rgb(111, 121, 119)"
                }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text15")}</h5>
                        <h5><span><i className="fa-solid fa-location-dot" style={{
                  color: "rgb(111, 121, 119)"
                }}></i></span>{t("pages.BeneficiaryHtmlAvailableMeals.text16")}</h5>
                    </div>
                    <Link to="/beneficiary/meals/details">{t("pages.BeneficiaryHtmlAvailableMeals.text17")}</Link>
                </section>
        
            </main>
      </>
    </PageShell>;
}
export default BeneficiaryHtmlAvailableMeals;
