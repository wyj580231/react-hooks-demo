import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import DefaultLoading from "../layouts/componentLoading";

const Loading = <DefaultLoading />;
const HomePage = lazy(() => import("../pages/home"));
const Home = () => (
  <Suspense fallback={Loading}>
    <HomePage />
  </Suspense>
);
const XSSTestPage = lazy(() => import("../pages/test/xss"));
const XSSTest = () => (
  <Suspense fallback={Loading}>
    <XSSTestPage />
  </Suspense>
);
const EventTestPage = lazy(() => import("../pages/test/event"));
const EventTest = () => (
  <Suspense fallback={Loading}>
    <EventTestPage />
  </Suspense>
);
const ContextTestPage = lazy(() => import("../pages/test/context"));
const ContextTest = () => (
  <Suspense fallback={Loading}>
    <ContextTestPage />
  </Suspense>
);
const LazyImageDemoPage = lazy(() => import("../pages/demo/lazyImage"));
const LazyImageDemo = () => (
  <Suspense fallback={Loading}>
    <LazyImageDemoPage />
  </Suspense>
);

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test/xss" component={XSSTest} />
      <Route exact path="/test/event" component={EventTest} />
      <Route exact path="/test/context" component={ContextTest} />
      <Route exact path="/demo/lazyImage" component={LazyImageDemo} />
    </Switch>
  );
};
export default AppRouter;
