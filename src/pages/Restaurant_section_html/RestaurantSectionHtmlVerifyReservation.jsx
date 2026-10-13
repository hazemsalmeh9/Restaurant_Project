import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import styles0 from '../../../Beneficiary_css/global.css?raw';
import styles1 from '../../../Restaurant_section_css/verify_reservation.css?raw';
import image0 from '../../../imgs/QRcode.png';
function RestaurantSectionHtmlVerifyReservation() {
  const {
    t
  } = useTranslation();
  return <PageShell title="Verify Reservation" bodyStyle="" styles={[styles0, styles1]}>
      <>
        <main className="main_content">
                <div className="verify_reservation_page">
                    <i className="fa-solid fa-circle-check" style={{
            color: "rgba(0, 66, 60, 1)"
          }}></i>
                    <h1>{t("pages.RestaurantSectionHtmlVerifyReservation.text1")}</h1>
                    <p>{t("pages.RestaurantSectionHtmlVerifyReservation.text2")}</p>
        
                    <div className="qrcode_card">
                        <h2>{t("pages.RestaurantSectionHtmlVerifyReservation.text3")}</h2>
                        <img src={image0} alt="" className="qrcode" />
                    </div>
                    <div className="or_section">
                        <div className="line"></div>
                        <span>{t("pages.RestaurantSectionHtmlVerifyReservation.text4")}</span>
                        <div className="line"></div>
                    </div>
                    <div className="pickup_code">
                        <h2>{t("pages.RestaurantSectionHtmlVerifyReservation.text5")}</h2>
                        <input type="text" className="input_code" placeholder={t("pages.RestaurantSectionHtmlVerifyReservation.text6")} />
                        <Link className="chek_code" to="/restaurant/reservations/confirmed">{t("pages.RestaurantSectionHtmlVerifyReservation.text7")}</Link>
                    </div>
                    <Link className="go_home" to="/restaurant/reservations">{t("pages.RestaurantSectionHtmlVerifyReservation.text8")}</Link>
        
        
        
        
                </div>
            </main>
      </>
    </PageShell>;
}
export default RestaurantSectionHtmlVerifyReservation;
