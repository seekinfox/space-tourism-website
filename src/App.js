import * as React from "react"
import { HashRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import "./stylesheets/main.scss";
import Loading from "./components/features/Loading/Loading";

const Layout = React.lazy(()=>import("./components/Layout/Layout"));
const Crew = React.lazy(()=> import("./components/pages/Crew/Crew"));
const Destination = React.lazy(()=> import("./components/pages/Destination/Destination"));
const Home = React.lazy(()=> import("./components/pages/Home/Home"));
const Technology = React.lazy(() => import("./components/pages/Technology/Technology"))


function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1123 })
  return (
    <>
    <HashRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout tablet={isTablet} desktop={isDesktop} />}>
            <Route index element={<Home desktop={isDesktop} />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </React.Suspense>      
    </HashRouter>
    </>
  );
}

export default App;
