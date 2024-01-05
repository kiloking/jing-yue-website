import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Release/Header";
import Section01 from "./Release/Section01";
import Section02 from "./Release/Section02";
import Section03 from "./Release/Section03";
import Section04 from "./Release/Section04";
import Section05 from "./Release/Section05";
import Section06 from "./Release/Section06";
import Section07 from "./Release/Section07";
import Section08 from "./Release/Section08";
import Section09 from "./Release/Section09";
import Footer from "./Release/Footer";

function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App">
      <Header  />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
      <Footer />
    </div>
  );
}

export default App;
