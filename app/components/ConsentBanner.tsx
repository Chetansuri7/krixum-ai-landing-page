declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useEffect, useState } from "react";

const CONSENT_KEY = "analyticsConsent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === null) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleAccept = () => {
    setIsAnimating(true);
    localStorage.setItem(CONSENT_KEY, "accepted");

    if (typeof window.gtag === "function") {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }

    setTimeout(() => setVisible(false), 300);
  };

  const handleReject = () => {
    setIsAnimating(true);
    localStorage.setItem(CONSENT_KEY, "rejected");
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: isNarrow ? 0 : 20,
        left: isNarrow ? 0 : 20,
        right: isNarrow ? 0 : 20,
        maxWidth: isNarrow ? "100%" : 900,
        margin: isNarrow ? "0" : "0 auto",
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "saturate(120%) blur(6px)",
        border: "1px solid rgba(0, 0, 0, 0.06)",
        borderRadius: isNarrow ? "0" : 12,
        padding: isNarrow ? "10px 14px" : "14px 20px",
        zIndex: 1000,
        boxShadow: isNarrow
          ? "0 -2px 10px rgba(15,23,42,0.06)"
          : "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)",
        transform: isAnimating ? "translateY(120px)" : "translateY(0)",
        opacity: isAnimating ? 0 : 1,
        transition: "transform 0.32s cubic-bezier(.2,.9,.2,1), opacity 0.25s",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <h3 style={{
              margin: "0 0 6px 0",
              fontSize: isNarrow ? "14px" : "15px",
              fontWeight: 600,
              color: "#0f172a",
              lineHeight: "1.3"
            }}>
              We value your privacy
            </h3>
            <p style={{
              margin: isNarrow ? "0 0 8px 0" : "0 0 14px 0",
              fontSize: isNarrow ? "13px" : "14px",
              color: "#475569",
              lineHeight: "1.4"
            }}>
              We use cookies to improve your experience and analyze site usage. Your data helps us make the site better for everyone.
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginLeft: "auto" }}>
            <button
              style={{
                padding: isNarrow ? "8px 14px" : "8px 16px",
                background: "linear-gradient(135deg, #FC8019 0%, #FDBA74 100%)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                transition: "transform 0.18s, box-shadow 0.18s",
                boxShadow: "0 4px 10px rgba(252,128,25,0.2)",
              }}
              onClick={handleAccept}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(252,128,25,0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(252,128,25,0.2)";
              }}
            >
              Accept All
            </button>
            <button
              style={{
                padding: isNarrow ? "8px 12px" : "8px 12px",
                background: "transparent",
                color: "#475569",
                border: "1px solid rgba(148,163,184,0.45)",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                transition: "background 0.12s, border-color 0.12s",
              }}
              onClick={handleReject}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f8fafc";
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.8)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.45)";
              }}
            >
              Decline
            </button>
            <a href="/privacy" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "underline", marginLeft: isNarrow ? 0 : 6 }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
