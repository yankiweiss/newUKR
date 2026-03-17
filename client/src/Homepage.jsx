import logo from "./assets/Full-Logo-01.png";
import { useEffect, useRef } from "react";

import { VscSearch } from "react-icons/vsc";

//challenge: how to have the subtitle heading been one letter at a time;

function Homepage() {
  const subtitleInnerText = useRef("");

  useEffect(() => {
    let timeOutID;
    let subtitleText = subtitleInnerText.current;

    const subtitle = "kosher bungalows that fit your needs.";

    function typeItOut(i = 0) {
        if(i === 0) {
            subtitleText.textContent = '';
        }
      subtitleText.textContent += subtitle[i];

      if (i < subtitle.length - 1) {
        timeOutID = setTimeout(
          () => typeItOut(i + 1),
          200,
        );
      }
    }

    typeItOut();

    return () => clearTimeout(timeOutID);
  }, []);

  return (
    <>
      <div className="home-page">
        <section>
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo"></img>
          </div>
        </section>

        <h1 className="sub-title" ref={subtitleInnerText}></h1>

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

        <div className="search-icon">
          <VscSearch />
        </div>
      </div>

      <div className="home-page"></div>
    </>
  );
}

export default Homepage;
