import React, { useState } from "react";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

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

const Product_Card: React.FC<ProductCardProps> = ({ data, className = "", onColorChange, }) => {
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
    <section className={`card ${className}`}>
      <div className="image">
        <NavLink to={`/products/${data.id}`}>
          <picture>
            <source srcSet={activeImg} type="image/webp" />
            <img
              src={activeImg}
              loading="lazy"
              alt={data.name}
              className="w-full h-auto"
            />
          </picture>
        </NavLink>
        <div className="wishlist">
          <FaRegHeart size={28} />
        </div>
        <div className="customize">
          <FaRegStar size={12} /> Customize
        </div>
        <div className="counter_div">
          <p>
            <IoIosArrowBack />
          </p>
          <div className="count">1 | 8</div>
          <p>
            <IoIosArrowForward />
          </p>
        </div>
      </div>

      {/* Color Swatches */}
      <section className="details flex justify-between">
        <h1 className="title">{data.name}</h1>
        <div className="radio-button_group flex gap-2">
          {Object.entries(data.images).map(([colorKey, [colorData]]) => (
            <label key={colorKey} style={{ cursor: "pointer", position: "relative" }}>
              <input
                type="radio"
                name={`color-${data.id}`}
                value={colorKey}
                role="radio"
                aria-label={colorKey}
                checked={selectedColor === colorKey}
                onChange={() => handleColorChange(colorKey)}
                style={{ display: "none" }}
              />
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "transparent",
                  border: `4px solid ${colorData.color}`,
                  position: "relative",
                  boxSizing: "border-box",
                }}
              >
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
      </section>

      <p className="price">{data.price}</p>

      <div className="hover_details mt-7">
        <div className="btns flex items-center justify-between">
          <button className="more_info cursor-pointer">More info</button>
          <button className="add_diamond cursor-pointer">
            Add Diamond <IoIosArrowForward size={18} />
          </button>
        </div>
        <div className="desc">
          {data.intrest}
          <Link to="/" className="learn-more-link">Learn more</Link>
        </div>
      </div>
    </section>
  );
};

export default Product_Card;
