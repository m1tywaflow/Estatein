import React from "react";
import { ArrowUpRight } from "lucide-react";

const CircleButton = () => {
  return (
    <div style={{ position: "relative", width: "140px", height: "140px" }}>
      <svg
        viewBox="0 0 100 100"
        style={{
          width: "100%",
          height: "100%",
          animation: "spinSlow 20s linear infinite",
        }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text fontSize="7" fill="#fff" letterSpacing="2">
          <textPath href="#circlePath" startOffset="0%">
            Discover Your Dream Property ✨
          </textPath>
        </text>
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#1A1A1A",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowUpRight style={{ color: "white", width: 20, height: 20 }} />
      </div>
      <style>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CircleButton;
