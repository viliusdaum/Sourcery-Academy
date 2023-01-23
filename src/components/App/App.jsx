import React from 'react';
import Layout from '../Layout/Layout';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import HomePage from '~/pages/Home/HomePage';
import { Route, Routes } from 'react-router-dom';
import { PAGE_ROUTES, SUB_PAGE_ROUTES } from '~/routes';
import AcademyForDevelopers from '~/pages/academies/AcademyForDevelopers/AcademyForDevelopers';
import AcademyForTesters from '~/pages/academies/AcademyForTesters/AcademyForTesters';
import AcademyForFrontend from '~/pages/academies/AcademyForFrontend/AcademyForFrontend';
import ApplicationPage from '~/pages/ApplicationPage/ApplicationPage';
import PageNotFound from '~/components/PageNotFound/PageNotFound';
import Questions from '~/components/Questions/Questions';

const App = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Routes>
        <Route path={PAGE_ROUTES.HOME} element={<HomePage />} />
        <Route
          path={SUB_PAGE_ROUTES.DEVELOPER}
          element={<AcademyForDevelopers />}
        />
        <Route path={SUB_PAGE_ROUTES.TESTER} element={<AcademyForTesters />} />
        <Route
          path={SUB_PAGE_ROUTES.FRONT_END}
          element={<AcademyForFrontend />}
        />
        <Route
          path={SUB_PAGE_ROUTES.APPLICATION}
          element={<ApplicationPage />}
        />
        <Route path={PAGE_ROUTES.QUESTIONS} element={<Questions />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
