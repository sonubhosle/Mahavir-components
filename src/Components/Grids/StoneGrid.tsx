import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";

interface StoneItem {
  id: number;
  icon: string;
  name: string;
}

interface StoneGridProps {
  stones: StoneItem[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
}

const StoneGrid: React.FC<StoneGridProps> = ({
  stones,
  activeIndex,
  onSelectIndex,
}) => {
  const [showMore, setShowMore] = React.useState(false);

  useEffect(() => {
    if (stones.length > 0) {
      onSelectIndex(activeIndex);
    }
  }, [stones]);

  const handleSelect = (index: number) => {
    onSelectIndex(index);
  };

  const renderStoneItem = (item: StoneItem, idx: number) => (
    <section
      key={item.id}
      role="button"
      tabIndex={0}
      onClick={() => handleSelect(idx)}
      onKeyDown={(e) => e.key === "Enter" && handleSelect(idx)}
      className={`w-[80px] h-[90px] border-2 rounded-xl flex flex-col items-center justify-center text-gray-900 font-bold cursor-pointer
        ${activeIndex === idx ? "border-gray-800" : "border-gray-300"}
        hover:bg-gray-100 hover:text-gray-800 transition`}
    >
      <div
        className="w-10 h-10"
        dangerouslySetInnerHTML={{ __html: item.icon }}
      />
<p className="text-xs sm:text-[11px] md:text-sm mt-1 text-center font-normal">{item.name}</p>
    </section>
  );

  const hasMoreThanFive = stones.length > 6;
  const firstFour = hasMoreThanFive ? stones.slice(0, 4) : stones;
  const remaining = hasMoreThanFive ? stones.slice(4) : [];

  return (
    <section className="pt-5">
      {/* First row */}
      <div className="grid grid-cols-5 gap-0">
        {firstFour.map((item, idx) => renderStoneItem(item, idx))}

        {hasMoreThanFive && (
          <div
            onClick={() => setShowMore(!showMore)}
            className="w-[80px] h-[90px] border-2 border-gray-300 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
          >
            <button
              aria-expanded={showMore}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-white transition"
              title={showMore ? "Hide" : "Show More"}
            >
              {showMore ? <GoDash /> : <FaPlus />}
            </button>
          </div>
        )}
      </div>

      {/* Expanded grid */}
      {hasMoreThanFive && (
        <div
          className={`grid grid-cols-5 gap-0 mt-4 transition-all duration-500 ease-in-out ${showMore ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          {remaining.map((item, idx) => renderStoneItem(item, idx + 4))}
        </div>
      )}
    </section>
  );
};

export default StoneGrid;
