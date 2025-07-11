import React, { useState } from "react";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface ColorData {
  color: string;
  img: string;
}

interface Images {
  [color: string]: ColorData[];
}

interface ProductData {
  id: string | number;
  name: string;
  price: string | number;
  intrest: string;
  images: Images;
}

interface ProductCardProps {
  data: ProductData;
  className?: string;
  onColorChange?: (color: string) => void;
}

const ProductPageCard: React.FC<ProductCardProps> = ({ data, className = "", onColorChange, }) => {
  const defaultColor = Object.keys(data.images)[0];
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  const [activeImg, setActiveImg] = useState<string>(
    data.images[defaultColor][0].img
  );


  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setActiveImg(data.images[color][0].img);
    onColorChange?.(color);
  };

  return (
    <section className='rounded bg-white p-1'>
      <div className="image">
        <NavLink to={`/products/${data.id}/${data.name}`}>
          <picture>
            <source srcSet={activeImg} type="image/webp" />
            <img src={activeImg} loading="lazy" alt={data.name} className="w-full h-auto" />
          </picture>
        </NavLink>
      </div>

      <div className="p-2">
        <div className="details flex ">
          <h1 className=" text-md font-semibold pb-1 ">{data.name}</h1>
        </div>

        <p className="price font-medium">{data.price}</p>
        <div className="radio-button_group flex gap-2 pt-2">
          {Object.entries(data.images).map(([colorKey, [colorData]]) => (
            <label key={colorKey} style={{ cursor: "pointer", position: "relative" }}>
              <input type="radio" name={`color-${data.id}`} value={colorKey}
                role="radio" aria-label={colorKey} checked={selectedColor === colorKey} onChange={() => handleColorChange(colorKey)} style={{ display: "none" }} />
              <span style={{
                display: "inline-block", width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "transparent",
                border: `4px solid ${colorData.color}`, position: "relative", boxSizing: "border-box",
              }} >
                {selectedColor === colorKey && (
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "14px",
                      height: "14px",
                      backgroundColor: colorData.color,
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
              </span>
            </label>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductPageCard;
