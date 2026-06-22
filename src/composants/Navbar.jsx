export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 24px",
      borderBottom: "1px solid #e5e7eb",
      backgroundColor: "#ffffff",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: "#6C63FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "500",
          fontSize: "15px",
        }}>
          S
        </div>
        <span style={{ fontSize: "16px", fontWeight: "500", color: "#111827" }}>
          Stack<span style={{ color: "#6C63FF" }}> Overflow</span>
        </span>
      </div>

      {/* Nav Links */}
      <div  style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <a href="/" style={{ fontSize: "15px", color: "#6C63FF", textDecoration: "none" }}>Accueil</a>
            <a href="/profil" style={{ fontSize: "15px", color: "#111827", textDecoration: "none" }}>Mon profil</a>
          
          </div>

      {/* Auth Buttons */}
       <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <a href="/connexion" style={{
          padding: "8px 20px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          color: "#111827",
          fontSize: "14px",
          textDecoration: "none",
          display: "inline-block",
        }}>
          Connexion
        </a>
        <a href="/inscription" style={{
          padding: "8px 20px",
          borderRadius: "8px",
          background: "#6C63FF",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "500",
          textDecoration: "none",
          display: "inline-block",
        }}>
          inscription
        </a>
      </div>
    </nav>
  );
}