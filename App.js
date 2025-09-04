import React from "react";
import Waves from "./components/Waves"; 
import SplitText from "./components/splittext";
import CardNav from "./components/CardNav";
import logo from "./logo.svg";
import "./App.css";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div className="App" style={{ position: "relative" }}>
      <Waves
        lineColor="#afaad7ff"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div style={{ position: "relative", zIndex: "1" }}>
        {/* New Card Navigation */}
        <CardNav
          logo={logo}
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />

        <main id="main">
          <div className="hero">
            <section className="hero-content">
              <div className="text-center py-5">
                {/* Welcoming SplitText Heading */}
                <SplitText
                  text="Hello, Visitor!"
                  className="split-text text-center"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <h1 className="display-2 mb-3">
                  <span className="text-outline text-white">
                    This is Rishik Pathak here
                  </span>
                  <br />
                  <span className="text-ai-2 text-white display-6">
                    Tech Enthusiast & Developer
                  </span>
                </h1>
                <p className="lead text-white text-outline">
                  <br />
                  and research.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
      <script>
        {`
          const nav_btn = document.querySelector('.navbar-toggler');
          const main = document.querySelector('main');
          if(nav_btn) {
            nav_btn.addEventListener('click', () => {
              main.classList.toggle('main');
            });
          }
        `}
      </script>
    </div>
  );
};

export default App;
