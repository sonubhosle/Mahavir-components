import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeroSection, { ProductType } from './HeroSection';
import StoneGrid from '../../Components/Grids/StoneGrid';
import { products } from '../../Components/Data';
import QuickCheckout from './QuickCheckout';
import DiamondRingPreview from './DiamondRingPreview';
import ProductSettings from './ProductSettings';
import Accordion from './Accordion';
import Review from './Review';

// Icons
import { FaCirclePlus, FaHandHoldingDollar } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { SlBag, SlPlane } from 'react-icons/sl';
import { LiaAwardSolid } from 'react-icons/lia';
import { PiCertificateThin } from 'react-icons/pi';
import Related_Products from './Related_Products';

const Product_Details: React.FC = () => {

  // Get Id From Prams
  const { id } = useParams();

  // Find Products Related To Id
  const product = products.find((prod) => String(prod.id) === id) as ProductType | undefined;

  // Check products is avilable or not

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  // Custome Config Stones 
  
  const stoneConfigs = [
    { label: 'Center Stone Shape', data: product.centerStone },
    { label: 'Material', data: product.materialStone },
    { label: 'Style', data: product.styleStone },
  ];

  const [activeIndexes, setActiveIndexes] = useState([0, 0, 0]);

  const handleStoneSelect = (sectionIndex: number, stoneIndex: number) => {
    const updated = [...activeIndexes];
    updated[sectionIndex] = stoneIndex;
    setActiveIndexes(updated);
  };

  return (
    <>
      <section className="w-full flex flex-col lg:flex-row mt-10 gap-10 items-stretch">
        {/* Left: Hero Section */}
        <section
          className="w-full lg:w-[45%] xl:w-[55%] relative bg-transparent lg:bg-[#f7f7f7]
          lg:rounded-3xl border border-gray-100 overflow-hidden h-full"
        >
          <HeroSection product={product} />
            <Related_Products />
          
        </section>

        {/* Right: Product Info */}
        <section className="w-full lg:w-[55%] xl:w-[45%] pb-10 h-full">
          <header className="flex justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-medium">
                {product.name}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 ">
                {product.price}
              </p>
              <button className="flex gap-2 text-white pr-2 pl-3 py-1 rounded-full bg-[linear-gradient(to_right,_#d89571,_#d89571)] w-fit text-sm sm:text-base font-semibold">
                <span className="text-[14px] sm:text-[16px] font-bold">Extras</span>
                <FaCirclePlus size={18} className="sm:size-5" />
              </button>
            </div>

            {/* Icons */}
            <div className="flex gap-6 sm:gap-10">
              {[
                {
                  label: 'Try On',
                  src: 'https://cdn.tangiblee.com/integration/3.1/managed/keyzarjewelry.com/revision_3/variation_original/img/icon.png',
                  alt: 'Try On',
                },
                {
                  label: 'Drop a Hint',
                  src: 'https://i.postimg.cc/xdsYmMr7/Envlop.png',
                  alt: 'Drop a Hint',
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center cursor-pointer">
                  <picture>
                    <source srcSet={item.src} type="image/webp" />
                    <img
                      loading="lazy"
                      src={item.src}
                      alt={item.alt}
                      className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mb-1"
                    />
                  </picture>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </header>

          <p className="text-sm sm:text-base text-gray-500 mt-6 sm:mt-10 mb-6 sm:mb-10 leading-relaxed">
            {product.description}
          </p>

          {/* Stones */}
          {stoneConfigs.map((config, idx) => (
            <div key={idx} className={idx > 0 ? 'mt-6' : ''}>
              <h2 className=" text-black">
                {config.label}:
                <span className="text-gray-500 font-normal px-2">
                  {config.data?.[activeIndexes[idx]]?.name ?? 'Select'}
                </span>
              </h2>
              <StoneGrid
                stones={config.data ?? []}
                activeIndex={activeIndexes[idx]}
                onSelectIndex={(i) => handleStoneSelect(idx, i)}
              />
            </div>
          ))}

          <QuickCheckout />

          {/* CTA Buttons */}
          <div className="flex flex-col items-center text-center space-y-4 mt-6">
            <button className="w-full bg-gray-600 text-white font-semibold text-base py-3 rounded-full">
              <div>
                <div className="text-sm">Select Ring Size</div>
                <div className="text-xs text-gray-300 mt-1">Tap To Continue</div>
              </div>
            </button>

            <button className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition">
              <SlBag />
              <span className="font-medium">Add to Shopping Bag</span>
              <span className="text-xl font-bold">+</span>
            </button>

            <p className="text-md text-black">
              Pay in 12 interest-free installments of $120.83{' '}
              <Link to="/" className="underline font-medium">
                Learn more
              </Link>
            </p>

            <button className="flex items-center gap-2 text-xl text-gray-800">
              <FaRegHeart />
              <span>Add to wish list</span>
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 w-full max-w-xl">
            {[
              { icon: <SlPlane size={40} />, label: 'Overnight Shipping' },
              { icon: <LiaAwardSolid size={40} />, label: 'Lifetime Warranty' },
              { icon: <FaHandHoldingDollar size={40} />, label: '30 Days Free Return' },
              { icon: <PiCertificateThin size={40} />, label: 'Certificate & Appraisal' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-sm text-gray-700">
                <span className="text-2xl">{item.icon}</span>
                <span className="mt-1 text-md text-center">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Mobile Diamond Preview */}
          <div className="w-full lg:hidden bg-gray-100 mt-10 rounded-2xl p-2">
            <h3 className="font-bold text-lg leading-tight flex items-center gap-2 mb-2">
              <svg className="w-8 h-8 p-1.5 rounded-full bg-white" aria-hidden="true">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ...your path data here... */}
                </svg>
              </svg>
              Diamond Carat Size Guide
            </h3>
            <DiamondRingPreview className="rounded-xl" />
          </div>

          <ProductSettings />
          <Accordion />

          {/* Virtual Appointment */}
          <div className="w-full bg-gray-200 p-4 mt-3 rounded-xl">
            <h2 className="font-bold text-md mb-4">Virtual Appointment</h2>
            <p className="mb-4">
              See Keyzar's jewelry up close with a personal appointment. Explore engagement rings,
              diamonds, and fine jewelry in person through your device.
            </p>
            <Link to="/" className="underline text-sm font-semibold">
              Book Appointment
            </Link>
          </div>
        </section>
         
      </section>
       

      <Review />
    </>
  );
};

export default Product_Details;
