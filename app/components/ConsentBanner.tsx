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

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === null) {
      setVisible(true);
    }
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
        bottom: "20px",
        left: "20px",
        right: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        padding: "24px",
        zIndex: 1000,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transform: isAnimating ? "translateY(100px)" : "translateY(0)",
        opacity: isAnimating ? 0 : 1,
        transition: "all 0.3s ease-in-out",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
        <div style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "12px",
          padding: "8px",
          flexShrink: 0,
          marginTop: "2px"
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
          </svg>
        </div>
        
        <div style={{ flex: 1 }}>
          <h3 style={{ 
            margin: "0 0 8px 0", 
            fontSize: "16px", 
            fontWeight: "600", 
            color: "#1f2937",
            lineHeight: "1.4"
          }}>
            We value your privacy
          </h3>
          <p style={{ 
            margin: "0 0 20px 0", 
            fontSize: "14px", 
            color: "#6b7280", 
            lineHeight: "1.5"
          }}>
            We use cookies to improve your experience and analyze site usage. Your data helps us make the site better for everyone.
          </p>
          
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              style={{
                padding: "10px 20px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              onClick={handleAccept}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 8px -1px rgba(0, 0, 0, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
              }}
            >
              Accept All
            </button>
            <button
              style={{
                padding: "10px 20px",
                background: "transparent",
                color: "#6b7280",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.2s ease",
              }}
              onClick={handleReject}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f9fafb";
                e.currentTarget.style.borderColor = "#9ca3af";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "#d1d5db";
              }}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}