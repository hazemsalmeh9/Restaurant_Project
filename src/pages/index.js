import BeneficiaryHtmlAvailableDonations from './Beneficiary_html/BeneficiaryHtmlAvailableDonations.jsx'
import BeneficiaryHtmlAvailableMeals from './Beneficiary_html/BeneficiaryHtmlAvailableMeals.jsx'
import BeneficiaryHtmlIndex from './Beneficiary_html/BeneficiaryHtmlIndex.jsx'
import BeneficiaryHtmlMealDetails from './Beneficiary_html/BeneficiaryHtmlMealDetails.jsx'
import BeneficiaryHtmlMyRequests from './Beneficiary_html/BeneficiaryHtmlMyRequests.jsx'
import BeneficiaryHtmlReqDetails from './Beneficiary_html/BeneficiaryHtmlReqDetails.jsx'
import IndividualsDonationsHtmlAddDonation from './Individuals_Donations_html/IndividualsDonationsHtmlAddDonation.jsx'
import IndividualsDonationsHtmlConfirmCollection from './Individuals_Donations_html/IndividualsDonationsHtmlConfirmCollection.jsx'
import IndividualsDonationsHtmlDonationCompleted from './Individuals_Donations_html/IndividualsDonationsHtmlDonationCompleted.jsx'
import IndividualsDonationsHtmlDonationInformation from './Individuals_Donations_html/IndividualsDonationsHtmlDonationInformation.jsx'
import IndividualsDonationsHtmlDonationRequested from './Individuals_Donations_html/IndividualsDonationsHtmlDonationRequested.jsx'
import IndividualsDonationsHtmlMyDonations from './Individuals_Donations_html/IndividualsDonationsHtmlMyDonations.jsx'
import IndividualsDonationsHtmlReviewPublish from './Individuals_Donations_html/IndividualsDonationsHtmlReviewPublish.jsx'
import RestaurantSectionHtmlRestaurantSectionHome from './Restaurant_section_html/RestaurantSectionHtmlRestaurantSectionHome.jsx'
import RestaurantSectionHtmlAddSurplusMeal from './Restaurant_section_html/RestaurantSectionHtmlAddSurplusMeal.jsx'
import RestaurantSectionHtmlMealCollected from './Restaurant_section_html/RestaurantSectionHtmlMealCollected.jsx'
import RestaurantSectionHtmlResReviewPublish from './Restaurant_section_html/RestaurantSectionHtmlResReviewPublish.jsx'
import RestaurantSectionHtmlReservations from './Restaurant_section_html/RestaurantSectionHtmlReservations.jsx'
import RestaurantSectionHtmlVerifiedConfirm from './Restaurant_section_html/RestaurantSectionHtmlVerifiedConfirm.jsx'
import RestaurantSectionHtmlVerifyReservation from './Restaurant_section_html/RestaurantSectionHtmlVerifyReservation.jsx'
import VolunteerHtmlAvailableOpport from './Volunteer_html/VolunteerHtmlAvailableOpport.jsx'
import VolunteerHtmlConfirm from './Volunteer_html/VolunteerHtmlConfirm.jsx'
import VolunteerHtmlDeliveryTask from './Volunteer_html/VolunteerHtmlDeliveryTask.jsx'
import VolunteerHtmlJoinAsAVolunteer from './Volunteer_html/VolunteerHtmlJoinAsAVolunteer.jsx'
import VolunteerHtmlOpportDetails from './Volunteer_html/VolunteerHtmlOpportDetails.jsx'
import VolunteerHtmlPickup from './Volunteer_html/VolunteerHtmlPickup.jsx'
import VolunteerHtmlProfileSetup from './Volunteer_html/VolunteerHtmlProfileSetup.jsx'
import VolunteerHtmlVolunteerInfo from './Volunteer_html/VolunteerHtmlVolunteerInfo.jsx'
import LoginPage from './auth/LoginPage.jsx'
import RegisterPage from './auth/RegisterPage.jsx'

export const pageRoutes = [
  { path: '/login', Component: LoginPage },
  { path: '/register', Component: RegisterPage },

  { path: '/beneficiary', Component: BeneficiaryHtmlIndex },
  { path: '/beneficiary/meals', Component: BeneficiaryHtmlAvailableMeals },
  { path: '/beneficiary/meals/details', Component: BeneficiaryHtmlMealDetails },
  { path: '/beneficiary/donations', Component: BeneficiaryHtmlAvailableDonations },
  { path: '/beneficiary/requests', Component: BeneficiaryHtmlMyRequests },
  { path: '/beneficiary/requests/details', Component: BeneficiaryHtmlReqDetails },

  { path: '/donations', Component: IndividualsDonationsHtmlDonationInformation },
  { path: '/donations/new', Component: IndividualsDonationsHtmlAddDonation },
  { path: '/donations/requested', Component: IndividualsDonationsHtmlDonationRequested },
  { path: '/donations/review', Component: IndividualsDonationsHtmlReviewPublish },
  { path: '/donations/mine', Component: IndividualsDonationsHtmlMyDonations },
  { path: '/donations/collection', Component: IndividualsDonationsHtmlConfirmCollection },
  { path: '/donations/completed', Component: IndividualsDonationsHtmlDonationCompleted },

  { path: '/restaurant', Component: RestaurantSectionHtmlRestaurantSectionHome },
  { path: '/restaurant/meals/new', Component: RestaurantSectionHtmlAddSurplusMeal },
  { path: '/restaurant/meals/review', Component: RestaurantSectionHtmlResReviewPublish },
  { path: '/restaurant/meals/collected', Component: RestaurantSectionHtmlMealCollected },
  { path: '/restaurant/reservations', Component: RestaurantSectionHtmlReservations },
  { path: '/restaurant/reservations/verify', Component: RestaurantSectionHtmlVerifyReservation },
  { path: '/restaurant/reservations/confirmed', Component: RestaurantSectionHtmlVerifiedConfirm },

  { path: '/volunteer', Component: VolunteerHtmlVolunteerInfo },
  { path: '/volunteer/join', Component: VolunteerHtmlJoinAsAVolunteer },
  { path: '/volunteer/profile', Component: VolunteerHtmlProfileSetup },
  { path: '/volunteer/opportunities', Component: VolunteerHtmlAvailableOpport },
  { path: '/volunteer/opportunities/details', Component: VolunteerHtmlOpportDetails },
  { path: '/volunteer/pickup', Component: VolunteerHtmlPickup },
  { path: '/volunteer/delivery', Component: VolunteerHtmlDeliveryTask },
  { path: '/volunteer/confirm', Component: VolunteerHtmlConfirm },
]
