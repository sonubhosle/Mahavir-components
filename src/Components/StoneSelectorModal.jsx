import { IoCloseOutline } from "react-icons/io5";
import { modelArray } from "./Data"; 

const StoneSelectorModal = ({ onSelect, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-overlay z-50">
      <div className="bg-white p-6 w-[600px] rounded-lg shadow-lg space-y-4 relative">
        {/* Header */}
        <div className="flex items-center justify-center flex-col">
          <p className="text-2xl text-gray-700">Before we continue</p>
          <h1 className="uppercase text-2xl font-bold mt-1">Choose your center stone</h1>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-black">
          <IoCloseOutline size={25} />
        </button>

        {/* Options */}
        <div className="flex flex-row gap-4 py-7 items-center justify-center">
          {modelArray.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.name)}
              className="border border-gray-400 h-[150px] w-[130px] cursor-pointer bg-gray-100 px-2 py-2 rounded flex flex-col items-center justify-center text-center hover:bg-gray-200"
              dangerouslySetInnerHTML={{
                __html: `${item.svg}<div class="mt-2 text-sm font-medium">${item.name}</div>`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoneSelectorModal;