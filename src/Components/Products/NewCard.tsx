import React from "react";

interface CardProps {
  product: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const NewCard: React.FC<CardProps> = ({ product }) => {
  return (
   <div>{product.description}</div>
  );
};

export default NewCard;
