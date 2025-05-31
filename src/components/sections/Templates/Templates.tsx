import { useMemo } from 'react';
import Button from "../../ui/Button/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Templates.css";

import Image1 from "../../../assets/carousel/carousel_img1.png";
import Image2 from "../../../assets/carousel/carousel_img2.png";
import Image3 from "../../../assets/carousel/carousel_img3.png";
import Image4 from "../../../assets/carousel/carousel_img4.png";
import Image5 from "../../../assets/carousel/carousel_img5.png";
import Image6 from "../../../assets/carousel/carousel_img6.png";
import { CarouselCard } from "../../ui/CarouselCard/CarouselCard";

const carouselItems = [
  { id: 1, image: Image1, title: "Creative <br/> brief" },
  { id: 2, image: Image2, title: "Product <br/> planning" },
  { id: 3, image: Image3, title: "Meeting <br/> notes" },
  { id: 4, image: Image4, title: "Project <br/> roadmap" },
  { id: 5, image: Image5, title: "User <br/> research" },
  { id: 6, image: Image6, title: "Team <br/> updates" }
];


export const Templates = () => {
  const responsive = useMemo(() => ({
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  }), []);

  return (
    <section id="about" className="templates">
      <p className="templates__title">Templates for every use case.</p>
      <p className="templates__subtitle">
        From product roadmaps to meeting notes, start with a template and make it your own.
      </p>
      <div className="templates__content">
        <Button variant="secondary">Browse templates</Button>


        <Carousel className="templates__carousel" responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          {carouselItems.map((item, index) => (
            <CarouselCard key={index} title={`${item.title}`} image={item.image} />
          ))}
        </Carousel>

      </div>

    </section>
  )
}
