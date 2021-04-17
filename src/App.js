import { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AppBar from './Components/Navigation/AppBar';
import Footer from './Components/Footer';
import Spinner from './Components/Loader';
import PublicRoute from './Components/PublicRoute';
import './App.css';
const HomePage = lazy(() =>
  import('./Components/Pages/HomePage' /*webpackChunkName: "home-page"*/),
);
const CatalogPage = lazy(() =>
  import('./Components/Pages/CatalogPage' /*webpackChunkName: "catalog-page"*/),
);
const NewsPage = lazy(() =>
  import('./Components/Pages/NewsPage' /*webpackChunkName: "news-page"*/),
);
const DeliveryPage = lazy(() =>
  import(
    './Components/Pages/DeliveryPage' /*webpackChunkName: "delivery-page"*/
  ),
);

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>
          <PublicRoute exact path="/catalog">
            <CatalogPage />
          </PublicRoute>
          <PublicRoute exact path="/news">
            <NewsPage />
          </PublicRoute>
          <PublicRoute exact path="/delivery">
            <DeliveryPage />
          </PublicRoute>

          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
