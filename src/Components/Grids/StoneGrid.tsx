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
      onSelectIndex(activeIndex); // Ensure parent has initial selection
    }
  }, [stones]);

  const handleSelect = (index: number) => {
    onSelectIndex(index);
  };

  const renderStoneItem = (item: StoneItem, idx: number) => (
    <div
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
      <p className="text-xs mt-1">{item.name}</p>
    </div>
  );

  const hasMoreThanFive = stones.length > 5;
  const firstFour = hasMoreThanFive ? stones.slice(0, 4) : [];
  const remaining = hasMoreThanFive ? stones.slice(4) : [];

  return (
    <div className="pt-5">
      <div className="grid grid-cols-5 gap-2">
        {hasMoreThanFive
          ? (
              <>
                {firstFour.map((item, idx) => renderStoneItem(item, idx))}

                {/* Show More toggle in 5th spot */}
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
              </>
            )
          : (
              stones.map((item, idx) => renderStoneItem(item, idx))
            )}
      </div>

      {/* Only if more than 5 */}
      {hasMoreThanFive && (
        <div
          className={`grid grid-cols-5 gap-2 mt-4 transition-all duration-500 ${
            showMore ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {remaining.map((item, idx) =>
            renderStoneItem(item, idx + 4) // index continues
          )}
        </div>
      )}
    </div>
  );
};

export default StoneGrid;
