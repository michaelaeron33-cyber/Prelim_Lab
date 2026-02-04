import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "4rem 8%",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      alignItems: "center",
      gap: "4rem",
      background: "#f8fafc",
      fontFamily: "Inter, system-ui, sans-serif",
    },

    left: {
      maxWidth: "620px",
    },

    badge: {
      display: "inline-block",
      marginBottom: "1rem",
      fontSize: "0.85rem",
      padding: "0.35rem 0.9rem",
      borderRadius: "999px",
      background: "#e0e7ff",
      color: "#4338ca",
      fontWeight: "600",
    },

    heading: {
      fontSize: "3.2rem",
      fontWeight: "800",
      lineHeight: "1.15",
      color: "#0f172a",
    },

    highlight: {
      color: "#6366f1",
    },

    text: {
      marginTop: "1.2rem",
      fontSize: "1.05rem",
      lineHeight: "1.7",
      color: "#475569",
    },

    actions: {
      marginTop: "2.5rem",
      display: "flex",
      gap: "1.2rem",
    },

    primaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem",
      padding: "0.9rem 2.2rem",
      borderRadius: "999px",
      background: "#6366f1",
      color: "#fff",
      fontWeight: "600",
      textDecoration: "none",
      boxShadow: "0 15px 30px rgba(99,102,241,0.35)",
    },

    secondaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      padding: "0.9rem 2.2rem",
      borderRadius: "999px",
      border: "1.5px solid #c7d2fe",
      color: "#4338ca",
      fontWeight: "600",
      textDecoration: "none",
      background: "#fff",
    },

    right: {
      display: "flex",
      justifyContent: "flex-end",
    },

    card: {
      width: "320px",
      height: "420px",
      borderRadius: "22px",
      background: "rgba(255,255,255,0.65)",
      backdropFilter: "blur(16px)",
      boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
      transform: "rotate(-3deg)",
      padding: "1rem",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "16px",
    },
  };

  return (
    <section style={styles.page}>
      {/* LEFT CONTENT */}
      <div style={styles.left}>
        <span style={styles.badge}>👋 Welcome to the Student Portfolios</span>

        <h1 style={styles.heading}>
          Explore <span style={styles.highlight}>creative</span> <br />
          student projects
        </h1>

        <p style={styles.text}>
          Discover the work of students across different fields and skill sets. 
          This portfolio collection showcases clean, responsive, and innovative 
          projects built using modern web technologies and design principles.
        </p>

        <div style={styles.actions}>
          <Link to="/students" style={styles.primaryBtn}>
            View Portfolios <FaArrowRight />
          </Link>

          <Link to="/about" style={styles.secondaryBtn}>
            Learn More
          </Link>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div style={styles.right}>
        <div style={styles.card}>
          <img
            src="https://images.pexels.com/photos/7887803/pexels-photo-7887803.jpeg"
            alt="Portfolio Preview"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
