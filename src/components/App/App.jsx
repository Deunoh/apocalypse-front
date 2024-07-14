import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Map from '../Map/Map';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.scss';
import HomeTitle from '../HomeTitle/HomeTitle';
import HomeCategories from '../HomeCategories/HomeCategories';
import { fetchPinpoints, fetchTypes } from '../../actions/mapAction';
import SurvivalGuide from '../SurvivalGuide/SurvivalGuide';
import {
  changeCategorySelect,
  fetchCategories,
} from '../../actions/guideAction';
import Signin from '../Signin/Signin';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import FormAddArticle from '../SurvivalGuide/FormAddArticle/FormAddArticle';
import Dashboard from '../Dashboard/Dashboard';
import DashboardArticles from '../Dashboard/DashboardArticles/DashboardArticles';
import DashboardUsers from '../Dashboard/DashboardUsers/DashboardUsers';
import HomeTitleMobile from '../HomeTitle/HomeTitleMobile';
import Contact from '../Contact/Contact';
import SearchNotices from '../SearchNotices/SearchNotices';
import AddNewNoticeForm from '../SearchNotices/SearchForm/AddNewNoticeForm';
import FormDashboardUser from '../Dashboard/DashboardUsers/FormDashboardUser/FormDashboardUser';
import ToastNotification from '../Error/ToastNotification/ToastNotification';
import DashboardPinpoints from '../Dashboard/DashboardPinpoints/DashboardPinpoints';
import NotFound from '../Error/NotFound/NotFound';
import DashboardSearchedNotices from '../Dashboard/DashboardSearchNotices/DashboardSearchNotices';
import Rgpd from '../Rgpd/Rgpd';

function App() {
  const [loading, setLoading] = useState(true);
  // role of user for display or not dashboard
  const isAdmin =
    useSelector((state) => state.authentication.role) === 'ROLE_ADMIN';
  // the pinpoint has been add in the database?
  const isNotificationToast = useSelector(
    (state) => state.map.isToastSuccessAddMessage
  );
  // Was there an error when add a pinpoint?
  const isErrorToast = useSelector((state) => state.map.isToastErrorAddMessage);
  // is the user is connected ? for display error messages
  const isUserConnected = useSelector(
    (state) => state.authentication.isConnected
  );

  const dispatch = useDispatch();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const [isNavbarMobileVisible, setIsNavbarMobileVisible] = useState(
    window.innerWidth <= 992
  );
  // popup of welcome message
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  useEffect(() => {
    setIsPopUpVisible(true);
  }, []);

  // Add database pinpoints in redux state
  useEffect(() => {
    const action = fetchPinpoints();
    dispatch(action);
  }, [dispatch]);

  // Call api for get all categories
  useEffect(() => {
    const action = fetchCategories();
    dispatch(action);
  }, [dispatch]);

  // Call api for get types of pinpoints
  useEffect(() => {
    const action = fetchTypes();
    dispatch(action);
  }, [dispatch]);

  // Reset value of select category (survival guide)
  useEffect(() => {
    dispatch(changeCategorySelect('Catégorie'));
  });

  useEffect(() => {
    function handleResize() {
      const isNowDesktop = window.innerWidth > 992;
      setIsDesktop(isNowDesktop);
      setIsNavbarMobileVisible(!isNowDesktop);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      {/* The component <NavbarMobile/> appears only when using a small screen device */}
      {isNavbarMobileVisible && <NavbarMobile />}

      {/* {isPopUpVisible && isNavbarMobileVisible && (
        <HomeTitleMobile setIsPopUpVisible={setIsPopUpVisible} />
      )} */}

      <Routes>
        {/* The footer disappears when using a small screen device */}
        <Route
          path="/"
          element={
            <>
              {isPopUpVisible && isNavbarMobileVisible && (
                <HomeTitleMobile setIsPopUpVisible={setIsPopUpVisible} />
              )}
              <Map isDesktop={isDesktop} />{' '}
              {!isNavbarMobileVisible && <HomeTitle />} <HomeCategories />
            </>
          }
        />
        <Route
          path="/guide-de-survie"
          element={<SurvivalGuide isDesktop={isDesktop} />}
        />
        <Route
          path="/guide-de-survie/article/:slug"
          element={<ArticleDetail setLoading={setLoading} loading={loading} />}
        />
        <Route path="/guide-de-survie/add" element={<FormAddArticle />} />
        <Route
          path="/avis-de-recherche"
          element={
            <SearchNotices
              isDesktop={isDesktop}
              setLoading={setLoading}
              loading={loading}
            />
          }
        />
        <Route
          path="/avis-de-recherche/nouveau"
          element={<AddNewNoticeForm />}
        />
        <Route path="/creation-de-compte" element={<Signin />} />
        <Route
          path="/contact"
          element={<Contact setLoading={setLoading} loading={loading} />}
        />
        <Route path="/mentions-legales" element={<Rgpd />} />
        {/* DASHBOARD ROUTES */}
        {isAdmin && <Route path="/dashboard" element={<Dashboard />} />}
        {isAdmin && (
          <Route
            path="/dashboard/articles"
            element={
              <>
                <Dashboard />{' '}
                <DashboardArticles loading={loading} setLoading={setLoading} />
              </>
            }
          />
        )}
        {isAdmin && (
          <Route
            path="/dashboard/articles/:slug"
            element={
              <ArticleDetail loading={loading} setLoading={setLoading} />
            }
          />
        )}
        {isAdmin && (
          <Route
            path="/dashboard/pinpoints"
            element={
              <>
                <Dashboard /> <DashboardPinpoints />
              </>
            }
          />
        )}
        {isAdmin && (
          <Route
            path="/dashboard/searchnotices"
            element={
              <>
                <Dashboard /> <DashboardSearchedNotices />
              </>
            }
          />
        )}
        {isAdmin && (
          <Route
            path="/dashboard/users"
            element={
              <>
                <Dashboard /> <DashboardUsers isDesktop={isDesktop} />
              </>
            }
          />
        )}
        {isAdmin && (
          <Route
            path="/dashboard/users/edit/:id"
            element={<FormDashboardUser />}
          />
        )}
        {/* END DASHBOARD ROUTES */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNavbarMobileVisible && <Footer />}
      {/* DISPLAY ERROR NOTIFICATIONS */}
      {isNotificationToast && (
        <ToastNotification message="Marqueur ajouté !" success />
      )}
      {isErrorToast && (
        <ToastNotification
          message={
            isUserConnected
              ? "Une erreur s'est produite"
              : 'Veuillez vous connecter'
          }
          success={false}
        />
      )}
    </div>
  );
}

export default App;
