import React, { useState } from "react";
import NewCard from "./NewCard";

const dummyProducts = [
  {
    id: 1,
    title: "Diamond Ring",
    description: "This elegant diamond ring is crafted with 18k gold...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Gold Band",
    description: "Simple yet timeless gold band for all occasions...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 1,
    title: "Diamond Ring",
    description: "This elegant diamond ring is crafted with 18k gold...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Gold Band",
    description: "Simple yet timeless gold band for all occasions...",
    image: "https://via.placeholder.com/300x200",
  },
    {
    id: 1,
    title: "Diamond Ring",
    description: "This elegant diamond ring is crafted with 18k gold...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Gold Band",
    description: "Simple yet timeless gold band for all occasions...",
    image: "https://via.placeholder.com/300x200",
  },
    {
    id: 1,
    title: "Diamond Ring",
    description: "This elegant diamond ring is crafted with 18k gold...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Gold Band",
    description: "Simple yet timeless gold band for all occasions...",
    image: "https://via.placeholder.com/300x200",
  },
];

const NewProducts: React.FC = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <section className="p-4">
      {/* Layout Toggle Buttons */}
      <div className="hidden md:flex gap-3 mb-4">
        <button
          onClick={() => setIsGrid(true)}
          className={`px-4 py-2 border ${isGrid ? "bg-black text-white" : "bg-white text-black"}`}
        >
          Grid
        </button>
        <button
          onClick={() => setIsGrid(false)}
          className={`px-4 py-2 border ${!isGrid ? "bg-black text-white" : "bg-white text-black"}`}
        >
          Column
        </button>
      </div>

      {/* Cards */}
      <div className={isGrid ? "grid md:grid-cols-3 gap-4" : "flex flex-col gap-4"}>
        {dummyProducts.map((product) => (
          <NewCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
