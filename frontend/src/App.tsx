import { Suspense } from 'react';
import { RecoilRoot } from "recoil";
import { Route, Routes } from 'react-router-dom';
import routes from 'router/routes';
import RedirectToErrorPage from 'pages/RedirectToErrorPage';
import Spinner from "components/common/Spinner";

const App = () =>{
  return (
    <RecoilRoot>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map((route) => {
            const { component: Component, path, name } = route;
            return <Route key={name} path={path} element={<Component />} />;
          })}
          <Route path="*" element={<RedirectToErrorPage />} />
        </Routes>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
