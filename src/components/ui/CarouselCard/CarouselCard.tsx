import React from "react";
import "./CarouselCard.css";

interface CarouselCardProps {
  title: string;
  image?: string;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  image,
}) => (
  <div className="carousel-card">
    <p
      className="carousel-card__title"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {image && <img className="carousel-card__img" src={image} alt={title.replace(/<[^>]+>/g, "")} />}
  </div>
);
