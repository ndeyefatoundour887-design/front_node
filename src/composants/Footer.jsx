import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#f3f4f6",
        padding: "40px 50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "#6366f1",
                color: "#fff",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              S
            </div>

            <h2>
              Stack<span style={{ color: "#6366f1" }}> Overflow</span>
            </h2>
          </div>

          <p style={{ color: "#64748b", lineHeight: "1.8" }}>
            La plateforme de questions & réponses
            <br />
            pour les développeurs francophones.
          </p>

          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <FaGithub size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3>NAVIGATION</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <Link to="/">Accueil</Link>
            <Link to="/profil">Mon profil</Link>
            <Link to="/question">Poser une question</Link>
          </div>
        </div>

        {/* Compte */}
        <div>
          <h3>COMPTE</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <Link to="/connexion">Se connecter</Link>
            <Link to="/inscription">S'inscrire</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3>CONTACT</h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <FaEnvelope color="#6366f1" />
            <span>contact@stackoverflow.sn</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaMapMarkerAlt color="#6366f1" />
            <span>Thies, Sénégal</span>
          </div>
        </div>
      </div>

      <hr style={{ marginTop: "40px", border: "1px solid #ddd" }} />
    </footer>
  );
}

export default Footer;