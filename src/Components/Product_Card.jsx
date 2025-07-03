import React, { useState } from 'react';
import { FaRegHeart, FaRegStar } from 'react-icons/fa';
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";

const Product_Card = ({ data }) => {
    const initialColor = "gold";
    const [selectedColor, setSelectedColor] = useState(initialColor);
    const [activeImg, setActiveImg] = useState(data.images[initialColor][0].img);
    const handleColorChange = (color) => {
        setSelectedColor(color);
        setActiveImg(data.images[color][0].img);
    };

    return (
        <div className='card'>
            {/* Product Image */}
            <div className="image">
                <img src={activeImg} alt={data.name}  />
                <div className="wishlist">
                    <FaRegHeart size={28} />
                </div>
                <div className="customize">
                    <FaRegStar size={12} /> Customize
                </div>
                <div className="counter_div">
                    <p><IoIosArrowBack/></p>
                    <div className="count">1 | 8</div>
                    <p><IoIosArrowForward/></p>
                </div>
            </div>

            {/* Color Swatches */}
            <div className="details flex justify-between">
                <div className="title">{data.name}</div>
                <div className='radio-button_group flex gap-2'>
                    {Object.entries(data.images).map(([colorKey, [colorData]]) => (
                        <label key={colorKey} style={{ cursor: 'pointer', position: 'relative' }}>
                            <input
                                type="radio"
                                name={`color-${data.id}`}
                                value={colorKey}
                                checked={selectedColor === colorKey}
                                onChange={() => handleColorChange(colorKey)}
                                style={{ display: 'none' }}
                            />
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: 'transparent',
                                    border: `4px solid ${colorData.color}`,
                                    position: 'relative',
                                    boxSizing: 'border-box',
                                }}
                            >
                                {selectedColor === colorKey && (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            width: '14px',
                                            height: '14px',
                                            backgroundColor: colorData.color,
                                            borderRadius: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    ></span>
                                )}
                            </span>
                        </label>
                    ))}

                </div>
            </div>
            <div className='price'>{data.price}</div>
            <div className="hover_details mt-7">
                <div className="btns flex items-center justify-between">
                    <button className='more_info'>More info</button>
                    <button className='add_diamond'>Add Diamond <IoIosArrowForward size={18}/></button>
                </div>
                <div className="desc">{data.intrest}<a>Learn more</a></div>
            </div>
        </div>
    );
};

export default Product_Card;
