import React, { useEffect, useState } from "react";
import "../../../src/Loader.css";

const Loader: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="loader-container">
      {showLoader && (
        <div className="introModal">
          <div className="loader">
            {}
            <img
              src="/img/LogoBCS.svg"
              alt="Logo Banco Caja Social"
              title="Logo Banco Caja Social"
              className="h-10 mx-auto"
            />
            <img
              src="/img/BuenVecino.gif"
              alt="Buen Vecino"
              title="Buen Vecino"
            />
            <img src="/img/LoaderTitle.svg" />
          </div>
        </div>
      )}
      {}
      {!showLoader}
    </div>
  );
};

export default Loader;
