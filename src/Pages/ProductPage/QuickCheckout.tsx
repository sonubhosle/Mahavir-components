import React, { useState, useRef, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { checkout } from "../../Components/Data";
import { Link } from "react-router-dom";

const QuickCheckout: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<number>(checkout[0]?.id || 1);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    const activeItem = checkout.find((item) => item.id === activeTab);

    useEffect(() => {
        if (contentRef.current) {
            const el = contentRef.current;
            requestAnimationFrame(() => {
                setMaxHeight(isOpen ? `${el.scrollHeight}px` : "0px");
            });
        }
    }, [isOpen, activeTab]);

    return (
        <section className="w-full mt-8">
            {/* Outer Container Box */}
            <div className="border border-gray-200 rounded-lg p-4 w-full">
                {/* Header */}
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div className="flex items-center gap-2 font-semibold text-black">
                        <h1 className="font-bold text-2xl">⚡ Quick Checkout</h1>
                    </div>
                    <p>{isOpen ? <IoIosClose size={30} /> : <IoChevronDownSharp size={25} />}</p>
                </div>

                <div className="mt-2 text-sm text-gray-600">
                    <p>
                        Choose your center stone’s origin & size and let our experts handpick the perfect diamond for you
                    </p>
                    <Link to={'/'} className="text-sm font-semibold text-black underline mt-2 inline-block">
                        Let's Do It
                    </Link>
                </div>

                {/* Smooth Expandable Body */}
                <section
                    ref={contentRef}
                    className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                    style={{ maxHeight }}
                >
                    <div className="space-y-4 mt-4 max-w-2xl mx-auto">
                        {/* Top Buttons */}
                        <div className="flex gap-4">
                            {checkout.map((item) => (
                                <button
                                    role="button"
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex gap-2 items-center cursor-pointer whitespace-nowrap rounded-md pl-3 pr-4 py-2 flex-1 justify-center border-2 transition-all ${
                                        activeTab === item.id
                                            ? "bg-white text-gray-900 border-dark"
                                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                                >
                                    <img src={item.svg} alt={item.label} className="w-6 h-6" />
                                    <p className="text-sm font-medium">{item.label}</p>
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Tab Content */}
                        <section className="pt-1">
                            {activeItem?.content?.[0]?.value && (
                                <>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {activeItem.content[0].value.map((num, index) => (
                                            <span
                                                key={index}
                                                className="w-11 h-11 border flex items-center justify-center border-gray-100 rounded-md text-sm font-medium"
                                            >
                                                {num}
                                            </span>
                                        ))}

                                        {activeItem.content[0].buttonText && (
                                            <button className="border cursor-pointer flex items-center h-11 px-3 justify-center border-gray-100 rounded-md text-sm font-medium">
                                                {activeItem.content[0].buttonText}
                                            </button>
                                        )}
                                    </div>

                                    {(activeItem.carat || activeItem.color || activeItem.clarity) && (
                                        <>
                                            <div className="flex items-center gap-4 mt-3">
                                                <div className="flex-grow border-t border-gray-300"></div>
                                                <div className="text-sm text-gray-600 uppercase whitespace-nowrap">
                                                    center stone quality
                                                </div>
                                                <div className="flex-grow border-t border-gray-300"></div>
                                            </div>

                                            <div className="flex justify-evenly flex-wrap items-center gap-6 text-md text-gray-700 mt-4">
                                                {activeItem.carat && (
                                                    <p>
                                                        Carat: <strong>{activeItem.carat}</strong>
                                                    </p>
                                                )}
                                                {activeItem.color && (
                                                    <p>
                                                        Color: <strong>{activeItem.color}</strong>
                                                    </p>
                                                )}
                                                {activeItem.clarity && (
                                                    <p>
                                                        Clarity: <strong>{activeItem.clarity}</strong>
                                                    </p>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}

                            {/* Bottom Link */}
                            {activeItem?.link && (
                                <div className="w-full text-center mt-4">
                                    <Link to="/" className="underline text-sm text-gray-600 inline-block">
                                        {activeItem.link}
                                    </Link>
                                </div>
                            )}
                        </section>
                    </div>
                </section>
            </div>

            {/* 👇 Bottom Box shown only when expanded */}
            {isOpen && (
                <section className="w-full mt-6">
                    <div className="flex items-center justify-between space-x-4">
                        <select className="w-full sm:w-60 md:w-72 lg:w-80 appearance-none border border-gray-200 rounded-md px-4 py-2 bg-white text-gray-700 shadow-sm focus:outline-none cursor-pointer">
                            <option disabled selected>
                                Select Ring Size
                            </option>
                            <option>3</option>
                            <option>3.25</option>
                            <option>3.5</option>
                            <option>3.75</option>
                            <option>4</option>
                            <option>4.25</option>
                            <option>4.5</option>
                        </select>

                        <span className="text-[12px] text-gray-600 underline font-semibold">
                            Need help with sizing?
                        </span>
                    </div>

                    <div className="flex text-center justify-center flex-col mt-6">
                        <h2 className="text-2xl pb-2">Total Price</h2>
                        <p className="text-3xl font-bold">$1,450</p>
                        <span className="mx-auto mt-2 flex gap-3 items-center bg-gray-200 text-gray-700 rounded-xl px-3 py-1 text-sm">
                            <picture>
                                <source
                                    srcSet="https://i.postimg.cc/GmZg813h/svgviewer-png-output-4.png"
                                    type="image/webp"
                                />
                                <img
                                    src="https://i.postimg.cc/GmZg813h/svgviewer-png-output-4.png"
                                    loading="lazy"
                                    alt="cart"
                                    srcSet="https://i.postimg.cc/GmZg813h/svgviewer-png-output-4.png"
                                    className="w-6 h-6"
                                />
                                Ships in 2-3 weeks
                            </picture>
                        </span>
                    </div>
                </section>
            )}
        </section>
    );
};

export default QuickCheckout;
