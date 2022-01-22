import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import i1 from "./assets/FEEDBACKS/1.png";
import i2 from "./assets/FEEDBACKS/2.png";
import i3 from "./assets/FEEDBACKS/3.png";
import i4 from "./assets/FEEDBACKS/4.png";
import i5 from "./assets/FEEDBACKS/5.png";
import i6 from "./assets/FEEDBACKS/6.png";
import i7 from "./assets/FEEDBACKS/7.png";
import i8 from "./assets/FEEDBACKS/8.png";
import i9 from "./assets/FEEDBACKS/9.png";
import i10 from "./assets/FEEDBACKS/10.png";
import i11 from "./assets/FEEDBACKS/11.png";
import i12 from "./assets/FEEDBACKS/12.png";
import i13 from "./assets/FEEDBACKS/13.png";
import i14 from "./assets/FEEDBACKS/14.png";
import i15 from "./assets/FEEDBACKS/15.png";
import i16 from "./assets/FEEDBACKS/16.png";
import i17 from "./assets/FEEDBACKS/17.png";
import i18 from "./assets/FEEDBACKS/18.png";
import i19 from "./assets/FEEDBACKS/19.png";
import i20 from "./assets/FEEDBACKS/20.png";
import i21 from "./assets/FEEDBACKS/21.png";

import Carousel, { Modal, ModalGateway } from "react-images";
//import {photos} from './testimonyphotos';

export default function Testimonial() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: i3,
      width: 4,
      height: 3,
    },
    {
      src: i1,
      width: 1,
      height: 1,
    },
    {
      src: i2,
      width: 3,
      height: 4,
    },
    {
      src: i4,
      width: 3,
      height: 4,
    },
    {
      src: i5,
      width: 3,
      height: 4,
    },
    {
      src: i6,
      width: 4,
      height: 3,
    },
    {
      src: i7,
      width: 3,
      height: 4,
    },
    {
      src: i8,
      width: 4,
      height: 3,
    },
    {
      src: i9,
      width: 4,
      height: 3,
    },
    {
      src: i10,
      width: 3,
      height: 4,
    },
    {
      src: i11,
      width: 4,
      height: 3,
    },
    {
      src: i12,
      width: 4,
      height: 4,
    },
    {
      src: i13,
      width: 4,
      height: 3,
    },
    {
      src: i14,
      width: 4,
      height: 3,
    },
    {
      src: i15,
      width: 4,
      height: 3,
    },
    {
      src: i16,
      width: 4,
      height: 3,
    },
    {
      src: i17,
      width: 4,
      height: 3,
    },
    {
      src: i18,
      width: 4,
      height: 3,
    },
    {
      src: i19,
      width: 1,
      height: 1,
    },
    {
      src: i20,
      width: 3,
      height: 4,
    },
    {
      src: i21,
      width: 3,
      height: 4,
    },
  ];

  return (
    <div id="reviews">
      <div class="jumbotron">
        <h1 className="display-4 text-success">Customer Feedback</h1>
        <p class="lead">Ratings & Reviews of Golden Seed Products.</p>
        <hr class="my-4" />
        <br />
      </div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
