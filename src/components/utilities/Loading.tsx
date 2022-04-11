import React, { useState } from "react";
// import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className="loading"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateY(-10%)",
        backgroundColor: "rgba(0, 0, 0, 0.109)",
      }}
    >
      <BeatLoader loading={loading} size={20} color="#d7bd78" />
    </div>
  );
};

export default Loading;
