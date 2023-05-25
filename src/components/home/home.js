import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

function Home() {
  const [countries, setCountries] = useState([]);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleMenuToggle = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <div className="home">
      <nav>
        <div className="nav-container">
          <div className="logo-section">
            <h3>Countries</h3>
          </div>
          <div className="menu-section">
            <div
              className={`menu-toggler ${isMenuActive ? "is-active" : ""}`}
              onClick={handleMenuToggle}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
            <ul className={`menu ${isMenuActive ? "is-active" : ""}`}>
              <li className="active">All</li>
              <li>Asia</li>
              <li>Europe</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main">
        <div className="container">
          <div className="row">
            {countries.map((country) => (
              <div className="col-md-6 mt-3" key={country.name}>
                <div className="box">
                  <div className="row">
                    <div className="col-4 flag">
                      {country.flag ? (
                        <img src={country.flag} alt="flag" />
                      ) : null}
                    </div>
                    <div className="col-8">
                      <h3 className="countryName">{country.name}</h3>
                      <h4 className="countryRegion">{country.region}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
