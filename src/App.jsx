import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import styles from "./styles";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}  `}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />

          {/* <Routes>
            <Route exact path="/" element={<Hero />}></Route>
            <Route exact path="/clients" element={<Clients />}></Route>
            <Route exact path="/product" element={<Billing />}></Route>
            <Route exact path="/features" element={<Business />}></Route>
          </Routes> */}

          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
