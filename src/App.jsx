import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const roles = [
    "IT Student",
    "Java Learner",
    "SQL Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));

          if (displayText.length + 1 === currentRole.length) {
            setDeleting(true);
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));

          if (displayText.length === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 60 : 100
    );

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);


  // Show back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);

      const sections = document.querySelectorAll(".reveal");

      sections.forEach((section) => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
          section.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <div className={darkMode ? "portfolio dark" : "portfolio"}>

      {/* Navbar */}
      <nav className="navbar">

        <h2 className="logo">Shruti<span>.</span></h2>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

        </div>

        <div className="nav-actions">


          {/* Mobile Menu */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>


      {/* Home */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="profile-wrapper">

            <div className="profile-glow"></div>

            <img
              src="/profile.jpg.jpeg"
              alt="Shruti Ghuge"
              className="profile-photo"
            />

          </div>

          <p className="intro">Hello, I'm</p>

          <h1>Shruti Ghuge</h1>

          <h2 className="typing">
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            I am an Information Technology student interested in
            Web Development, Java, SQL and learning new technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="/Shruti-Ghuge-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              📄 View Resume
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              ✉ Contact Me
            </a>

          </div>

          <div className="scroll-text">
            ↓ Scroll to explore
          </div>

        </div>

      </section>


      {/* About */}
      <section id="about" className="section reveal">

        <p className="section-label">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <div className="about-container">

          <div className="about-card">

            <div className="about-icon">👩‍💻</div>

            <h3>Who I Am</h3>

            <p>
              I am a third-year B.Tech Information Technology student
              at Indira College of Engineering and Management, Pune.
              I am currently developing my skills in web development,
              programming and databases.
            </p>

          </div>


          <div className="about-card">

            <div className="about-icon">🚀</div>

            <h3>What I Do</h3>

            <p>
              I enjoy creating websites, learning programming concepts
              and exploring new technologies. I am continuously working
              on improving my technical and problem-solving skills.
            </p>

          </div>

        </div>

      </section>


      {/* Skills */}
      <section id="skills" className="section reveal">

        <p className="section-label">MY TECHNICAL TOOLKIT</p>

        <h2>My Skills</h2>

        <div className="skills-container">

          <div className="skill">
            <span>☕</span>
            Java
          </div>

          <div className="skill">
            <span>⚙️</span>
            C++
          </div>

          <div className="skill">
            <span>🐍</span>
            Python
          </div>

          <div className="skill">
            <span>🌐</span>
            HTML5
          </div>

          <div className="skill">
            <span>🎨</span>
            CSS3
          </div>

          <div className="skill">
            <span>⚡</span>
            JavaScript
          </div>

          <div className="skill">
            <span>⚛️</span>
            React
          </div>

          <div className="skill">
            <span>🗄️</span>
            MySQL
          </div>

          <div className="skill">
            <span>🔍</span>
            SQL
          </div>

          <div className="skill">
            <span>🐘</span>
            PostgreSQL
          </div>

          <div className="skill">
            <span>🔀</span>
            Git
          </div>

          <div className="skill">
            <span>🐙</span>
            GitHub
          </div>

        </div>

      </section>


      {/* Education */}
      <section id="education" className="section reveal">

        <p className="section-label">MY ACADEMIC JOURNEY</p>

        <h2>Education</h2>

        <div className="timeline">

          <div className="timeline-dot"></div>

          <div className="education-card">

            <span className="education-year">2024 — 2028</span>

            <h3>B.Tech – Information Technology</h3>

            <h4>
              Indira College of Engineering and Management
            </h4>

            <p>Pune, Maharashtra</p>

            <div className="cgpa">
              <span>Current CGPA</span>
              <strong>8.24</strong>
            </div>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section reveal contact">

        <p className="section-label">LET'S CONNECT</p>

        <h2>Contact Me</h2>

        <p className="contact-text">
          I'm open to internship opportunities, learning experiences
          and professional connections.
        </p>

        <div className="contact-links">

          <a
            href="mailto:shrutighuge1717@gmail.com"
            className="contact-card"
          >
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <small>Send me an email</small>
            </div>
          </a>


          <a
            href="https://www.linkedin.com/in/shruti-ghuge-7a3a6637b"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>💼</span>
            <div>
              <strong>LinkedIn</strong>
              <small>Connect with me</small>
            </div>
          </a>


          <a
            href="/Shruti-Ghuge-Resume.pdf.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>📄</span>
            <div>
              <strong>Resume</strong>
              <small>View my resume</small>
            </div>
          </a>

        </div>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Shruti Ghuge
        </p>

        <p>
          Built with React ⚛️
        </p>

      </footer>


      {/* Back To Top */}
      {showTop && (
        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>
      )}

    </div>
  );
}

export default App;