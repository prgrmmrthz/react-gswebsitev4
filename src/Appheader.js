import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://i.ibb.co/CMtr7zF/WEBSITE-PNG-CHIA-2.png",
    key: 1,
  },
  {
    src:"https://i.ibb.co/Tv8dC4x/WEBSITE-PNG-COLLAGEN-2.png",
    key: 2,
  },
  {
    src: "https://i.ibb.co/7b3Bm5M/WEBSITE-PNG-TONGKAT-2.png",
    key: 3,
  },
];

export default function Appheader() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <header className="py-5" style={{backgroundColor: "#2d583a"}}>
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 text-white mb-2" style={{fontFamily: 'Alleyster'}}>
                Invest to your health now!
              </h1>
              <p className="lead fw-normal text-white-50 mb-4">
                Have A Golden Day!
              </p>
              <br />
              <br />
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a
                  className="btn btn-warning btn-lg px-4 me-sm-3"
                  href="#products"
                >
                  See Products
                </a>
                <a className="btn btn-outline-light btn-lg px-4" href="#reviews">
                  See Product Reviews
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-xl-block d-none text-center">
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              dark={false}
              slide={true}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </header>
  );
}
