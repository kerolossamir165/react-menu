import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

let cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "Newyork", image: newyork },
  { name: "Sanfrancisco", image: sanfrancisco },
  { name: "Beijing", image: beijing },
];

const Hamburger = ({ state }) => {
  let menu = useRef(null);
  let black = useRef(null);
  let red = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  // let info = useRef(null);
  let imageContainer = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      revelSlideClose(red, black);
      gsap.to(menu, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.initial === null && state.clicked === true)
    ) {
      // open Menu
      gsap.to(menu, { duration: 0, css: { display: "block" } });
      gsap.to([red, black], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      revelSlideOpen(black, red);
      revelText(line1, line2, line3);
      // revelInfo(info);
    }
  }, [state]);

  let revelSlideOpen = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };
  let revelSlideClose = (node1, node2) => {
    gsap.to([node1, node2], {
      duration: 0.8,
      height: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };
  let revelText = (line1, line2, line3) => {
    gsap.from([line1, line2, line3], {
      delay: 0.2,
      duration: 0.8,
      y: 150,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  };

  let revelInfo = (node1) => {
    gsap.from(node1, {
      delay: 0.6,
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  let handelHover = (cityImag, container) => {
    gsap.to(container, {
      duration: 0,
      background: `url(${cityImag}) center center`,
    });
    gsap.to(container, {
      duration: 0.2,
      opacity: 1,
      ease: "power3.inOut",
    });
  };

  let handelExit = (container) => {
    gsap.to(container, { duration: 0, background: `` });
    gsap.to(container, { duration: 0.5, opacity: 0 });
  };

  let handelHoverLink = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      y: 3,
      skewX: 2,
      ease: "power3.inOut",
    });
  };
  let handelExitLink = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="hamburger-menu" ref={(el) => (menu = el)}>
      <div className="black-reveal" ref={(el) => (black = el)}></div>
      <div className="red-reveal" ref={(el) => (red = el)}>
        <div className="city-bcg" ref={(el) => (imageContainer = el)}></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li className="line">
                    <Link
                      ref={(el) => (line1 = el)}
                      to="/opportunites"
                      onMouseEnter={handelHoverLink}
                      onMouseLeave={handelExitLink}
                    >
                      Opportunites
                    </Link>
                  </li>
                  <li className="line">
                    <Link
                      ref={(el) => (line2 = el)}
                      to="/solutions"
                      onMouseEnter={handelHoverLink}
                      onMouseLeave={handelExitLink}
                    >
                      Solutions
                    </Link>
                  </li>
                  <li className="line">
                    <Link
                      ref={(el) => (line3 = el)}
                      to="/contact-us"
                      onMouseEnter={handelHoverLink}
                      onMouseLeave={handelExitLink}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* <div className="info" ref={(el) => (info = el)}>
                <h3>Our Promise</h3>
                <p>
                  {" "}
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.{" "}
                </p>{" "}
              </div> */}
              <div className="locations">
                Locations:
                {cities.map((city) => (
                  <span
                    key={city.name}
                    onMouseOver={() => handelHover(city.image, imageContainer)}
                    onMouseOut={() => handelExit(imageContainer)}
                  >
                    {" "}
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
