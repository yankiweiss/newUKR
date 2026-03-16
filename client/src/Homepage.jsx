import logo from "./assets/Full-Logo-01.png";

import { VscSearch } from "react-icons/vsc";

function Homepage() {
  return (
    <>
      <div className="home-page">
        <section>
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo"></img>
          </div>
        </section>

        <h1 className="sub-title">kosher bungalows that fit your needs</h1>

        <div className="select-container">
          <div className="select">
            <span className="select-text">AREA</span>
            <select>
              <option>ok</option>
              <option>ok</option>
              <option>ok</option>
            </select>
          </div>

          <div className="select">
            <span className="select-text">FROM</span>
            <select>
              <option>ok</option>
              <option>ok</option>
              <option>ok</option>
            </select>
          </div>

          <div className="select">
            <span className="select-text">UNTIL</span>
            <select>
              <option>ok</option>
              <option>ok</option>
              <option>ok</option>
            </select>
          </div>

          <div className="select">
            <span className="select-text">BEDS</span>
            <select>
              <option>ok</option>
              <option>ok</option>
              <option>ok</option>
            </select>
          </div>

          <div className="select">
            <span className="select-text">BATHS</span>
            <select>
              <option>ok</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <VscSearch />

      </div>

      <div className="home-page"></div>
    </>
  );
}

export default Homepage;
