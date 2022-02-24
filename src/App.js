import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Crew from "./components/pages/Crew/Crew";
import Destination from "./components/pages/Destination/Destination";
import Home from "./components/pages/Home/Home";
import Technology from "./components/pages/Technology/Technology";
import { useMediaQuery } from 'react-responsive'
import "./stylesheets/main.scss";
function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1123 })
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout tablet={isTablet} desktop={isDesktop} />}>
          <Route index element={<Home desktop={isDesktop} />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
