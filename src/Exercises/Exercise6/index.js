import React, { Fragment, useState } from "react";
import "h8k-components";

import { image1, image2, image3, image4 } from "./assets/images";
import { Thumbs, Viewer } from "./components";
import { useEffect } from "react";

const title = "Catalog Viewer";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(false);
  const [slideDuration] = useState(3000);

  function handleNextImage() {
    setActiveIndex(activeIndex + 1);

    if (activeIndex === catalogs.length - 1) {
      setActiveIndex(0);
    }
  }

  const handlePreviousImage = () => {
    setActiveIndex(activeIndex - 1);
    if (activeIndex === 0) {
      setActiveIndex(catalogs.length - 1);
    }
  };

  useEffect(() => {
    if (slideTimer) {
      const interval = setInterval(() => handleNextImage(), slideDuration);

      return () => clearInterval(interval);
    }

    setSlideTimer(false);
  }, [slideTimer, activeIndex]);

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center mt-75">
        <div className="layout-row justify-content-center">
          <div className="card pt-25">
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className="layout-row justify-content-center align-items-center mt-20">
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={() => handlePreviousImage()}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                handleClick={(idx) => {
                  setActiveIndex(idx);
                }}
                currentIndex={activeIndex}
              />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                onClick={() => handleNextImage()}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className="layout-row justify-content-center mt-25">
          <input
            type="checkbox"
            data-testid="toggle-slide-show-button"
            onClick={(event) => {
              setSlideTimer(event.target.checked);
            }}
          />
          <label className="ml-6">Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
