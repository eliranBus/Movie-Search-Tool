import React from 'react';
import '../styles/logo.css';

function Logo(){

    return (
        <h1>
          <span className="bold">
            M
            <span className="magnifying">
              <img
                src={require("../assets/images/magnifying-glass.png")}
                alt="magnifying-glass"
              />
              <span className="space"></span>
            </span>
            VIE
          </span>
          SEARCH
        </h1>
    )
}

export default Logo;