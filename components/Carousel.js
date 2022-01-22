import * as React from "react";
import Image from "next/image";
import { FaAngleRight,  FaAngleLeft} from "react-icons/fa";
import { Carousel } from 'react-bootstrap'

const images = ["/img/exterior.webp ", "/img/leavingroom-0.webp",  "/img/hair-drasers.webp"]

export const ImageSlider = () => {
  return (
    <>
   <div className=" flex flex-row justify-center w-full p-2 m-0">
    <div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
 <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/img/exterior.jpg"
            alt="First slide"
            width={1500}
            height={700}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/img/leavingroom-0.jpg"
            width={1500}
            height={700}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/img/hair-drasers.jpg"
            width={1500}
            height={700}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    </>
  );
};

export default ImageSlider;

