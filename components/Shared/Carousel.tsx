import React from "react";

interface Card {
  backgroundImage: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

const cards: Card[] = [
  {
    backgroundImage:
      'url("https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp")',
    title: "App Development",
    description:
      "Design direction for business. Get your business on the next level. We help to create great experiences.",
    price: "$300",
    image: 'url("assets/images/pat-2.png")',
  },
  {
    backgroundImage:
      'url("https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp")',
    title: "App Development",
    description:
      "Design direction for business. Get your business on the next level. We help to create great experiences.",
    price: "$300",
    image: 'url("assets/images/pat-2.png")',
  },
  {
    backgroundImage:
      'url("https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp")',
    title: "App Development",
    description:
      "Design direction for business. Get your business on the next level. We help to create great experiences.",
    price: "$300",
    image: 'url("assets/images/pat-2.png")',
  },
  {
    backgroundImage:
      'url("https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp")',
    title: "App Development",
    description:
      "Design direction for business. Get your business on the next level. We help to create great experiences.",
    price: "$300",
    image: 'url("assets/images/pat-2.png")',
  },
  // Add more card objects here
];

const Carousel: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <div key={index} className="w-full lg:w-1/3 px-4">
          <div
            className="services-item-bg"
            style={{ backgroundImage: card.backgroundImage }}
          >
            <div className="services-item">
              <div className="icon"></div>
              <h5 className="lui-title">
                <span>{card.title}</span>
              </h5>
              <div className="lui-text">
                <div>{card.description}</div>
              </div>
              <a href="#pricing-section" className="lnk">
                {card.price}
              </a>
              <div
                className="image"
                style={{ backgroundImage: card.image }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
