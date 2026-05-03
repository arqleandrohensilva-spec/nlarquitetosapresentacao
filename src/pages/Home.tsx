const LOGO_BRANCA = "/logo-branca.png";

const Home = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#1A1816",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <img src={LOGO_BRANCA} alt="NL Arquitetos" style={{ height: "48px", width: "auto", opacity: 0.9 }} />
      <p
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(139, 115, 85, 0.8)",
        }}
      >
        Em breve
      </p>
    </main>
  );
};

export default Home;
