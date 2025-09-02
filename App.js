import React from "react";
import Waves from "./components/Waves"; 
import './App.css';
import SplitText from "./components/splittext";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

function App() {
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
        <header>
          <div className="container">
            <nav
              className="navbar navbar-expand-md"
              aria-label="Fourth navbar example"
              data-bs-theme="dark"
            >
              <div className="container-fluid">
                <a
                  href="/"
                  className="navbar-brand d-inline-flex link-body-emphasis text-decoration-none"
                >
                  <img src="img/android-icon-dark.png" alt="" height="30" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#nav"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link active"
                        aria-current="page"
                        hx-get="/index-htmx.html"
                        hx-target="#main"
                        id="btn-home"
                      >
                        Home
                      </button>
                    </li>
                    <li className="nav-item dropdown">
                      <button
                        type="button"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Others
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/rishik-pathak-003b0b348/"
                          >
                            LinkedIn
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="col-md-3 text-end">
                    <a
                      href="src/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-primary me-2"
                      >
                        Resume
                      </button>
                    </a>
                    <a
                      href="https://github.com/Rishik3104"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        GitHub
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <main id="main">
          <div className="hero">
            <section className="hero-content">
              <div className="text-center py-5">
                {/* Display SplitText as the welcoming heading */}
                <SplitText
                  text="Hello, Everyone!"
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
                  <span className="text-outline text-white">Rishik Pathak</span>
                  <br />
                  <span className="text-ai-2 text-white display-6">
                    Tech Enthusiast & Developer
                  </span>
                </h1>
                <p className="lead text-white text-outline">
                  <br />
                  and research.
                </p>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    hx-get="C:\Users\Testing\Documents\portfolio\public\contact.html"
                    hx-target="#main"
                    hx-indicator="#loader"
                  >
                    Contact
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    hx-get="/projects.html"
                    hx-target="#main"
                    hx-indicator="#loader"
                  >
                    Projects <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                </div>
                <span className="htmx-indicator" id="loader">
                  <img
                    src="img/loading3.gif"
                    alt="loading..."
                    height="50px"
                  />
                </span>
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
}

export default App;
