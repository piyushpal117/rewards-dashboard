import "./assets/styles.css";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import "./App.css";
import RankCard from "./components/RankCard";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import XpCard from "./components/XpCard";
import Keycard from "./components/Keycard";

function App() {
  return (
    <Router>
      <div className="mainwraper">
        <div className="container">
          <Sidebar />
        </div>
        <div className="Main-content">
          <Banner />
          <div className="cardholder">
            <XpCard />
            <div className="vertical-line"></div>

            {/* <Routes>
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes> */}
            <div className="Cardlist">
              <RankCard rank="Unranked" />
              <RankCard rank="Item 1" />
              <RankCard rank="Item 2" />
              <RankCard />
            </div>
          </div>
          <div className="keycardholder">
            <Keycard />
            <Keycard />
            <Keycard />
            <Keycard />
            <Keycard />
            <Keycard />
          </div>
          <div className="timerbtn">
            <Home />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
