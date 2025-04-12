"use client";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import CADViewer from "./CADViewer";

export default function CADModal({ modelUrl }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Wait for the DOM to be ready and then set the app element for accessibility
    const appElement = document.getElementById("__next") || document.body;
    ReactModal.setAppElement(appElement);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        View CAD Project
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="CAD Model Viewer"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            padding: 0,
            border: "none",
            background: "transparent",
          },
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              padding: "8px 12px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            Close
          </button>
          <CADViewer modelUrl={modelUrl} />
        </div>
      </ReactModal>
    </div>
  );
}
