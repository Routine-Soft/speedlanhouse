"use client";

import { useState } from "react";

/**
 * Elegant popup for Income Tax marketing campaign.
 * Appears every time the user enters the website.
 */
export default function TaxPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          style={closeButton}
          aria-label="Close popup"
        >
          ×
        </button>

        <h2 style={titleStyle}>Imposto de Renda 2026</h2>

        <ul style={listStyle}>
          <li>O prazo começa em 16 de março.</li>
          <li>Evite erros e dores de cabeça com sua declaração.</li>
          <li>Declare seu Imposto de Renda com segurança.</li>
          <li>Garanta que sua declaração esteja correta.</li>
          <li>Organize seus documentos com antecedência.</li>
          <li>Não deixe para a última hora.</li>
          <li>Conte com especialistas para declarar.</li>
          <li>Mais tranquilidade na hora de declarar.</li>
          <li>Evite cair na malha fina.</li>
          <li>Declaração rápida, segura e sem complicações.</li>
          <li>Prepare-se para o IR 2026 com antecedência.</li>
        </ul>

      </div>
    </div>
  );
}

/* Overlay background */
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.35)",
  zIndex: 9999,
};

/* Popup container */
const popupStyle: React.CSSProperties = {
  width: "420px",
  maxWidth: "90%",
  backgroundColor: "#ffffff",
  borderRadius: "14px",
  padding: "28px",
  boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
  position: "relative",
  fontFamily: "system-ui, sans-serif",
};

/* Close button */
const closeButton: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "12px",
  border: "none",
  background: "transparent",
  fontSize: "20px",
  cursor: "pointer",
  color: "#000000",
};

/* Title */
const titleStyle: React.CSSProperties = {
  marginBottom: "16px",
  fontSize: "22px",
  fontWeight: 600,
  color: "#000000",
};

/* Marketing list */
const listStyle: React.CSSProperties = {
  paddingLeft: "18px",
  lineHeight: "1.6",
  color: "#000000",
};