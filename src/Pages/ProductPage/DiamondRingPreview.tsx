import React, { useState, useRef } from 'react';
interface DiamondRingPreviewProps {
  className?: string;
}

const DiamondRingPreview: React.FC<DiamondRingPreviewProps> = ({className}) => {
    const displayOptions = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];

    // Displayed → Actul scaling values (fine-tuned to prevent oversize)
    const actualScaleMap: Record<number, number> = {
        1.0: 1.0,
        1.5: 1.15,
        2.0: 1.25,
        2.5: 1.35,
        3.0: 1.45,
        3.5: 1.6,
        4.0: 1.75,
        4.5: 1.85,
        5.0: 2.0, 
    };

    const [displayScale, setDisplayScale] = useState(1.0);
    const [actualScale, setActualScale] = useState(actualScaleMap[1.0]);

    const animationRef = useRef<NodeJS.Timeout | null>(null);

    const animateToScale = (targetDisplay: number) => {
        const target = actualScaleMap[targetDisplay];
        setDisplayScale(targetDisplay);

        if (animationRef.current) clearInterval(animationRef.current);

        animationRef.current = setInterval(() => {
            setActualScale(prev => {
                if (prev === target) {
                    clearInterval(animationRef.current!);
                    return prev;
                }

                const step = 0.05;
                const direction = prev < target ? 1 : -1;
                const next = parseFloat((prev + step * direction).toFixed(2));

                if ((direction === 1 && next >= target) || (direction === -1 && next <= target)) {
                    clearInterval(animationRef.current!);
                    return target;
                }

                return next;
            });
        }, 30);
    };

    return (
        <div className="relative">
            <img src="https://i.postimg.cc/RhwdscR8/hand-with-setting-23-F6-JYZ6.png" alt="Hand with Ring" className={`w-full h-full object-cover ${className || ""}`} />
            <div className="absolute top-4  w-full  z-10 text-center ">
                <h1 className="text-lg text-white font-bold">Diamond Carat Size Guide</h1>
                <p className="text-sm text-white">*The setting in the image is for reference only</p>
            </div>
            {/* Diamond Image */}
            <img src="https://i.postimg.cc/QCggkjNZ/Round-Shape-Stone-Solo-MHTOVVUU.png" alt="Diamond" className={`
            absolute top-[53%] left-[54%] w-[30px] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-in-out z-10`}
                style={{ transform: `translate(-50%, -50%) scale(${actualScale})` }} />

            {/* Scale Filter */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-[90%]">
                <div className="relative flex bg-white/80 backdrop-blur-md rounded-full overflow-hidden">
                    {/* Sliding circle indicator */}
                    <div
                        className="absolute top-0 left-0 h-full  rounded-full bg-white shadow transition-all duration-300 ease-in-out"
                        style={{
                            width: `${100 / displayOptions.length}%`,
                            transform: `translateX(${displayOptions.indexOf(displayScale) * 100}%)`,
                        }}
                    />

                    {/* Buttons with vertical dividers */}
                    {displayOptions.map((option, index) => (
                        <React.Fragment key={option}>
                            <button
                                onClick={() => animateToScale(option)}
                                className={`relative z-10 flex-1 cursor-pointer text-base font-semibold py-[9px]   text-center transition-all duration-200
                        ${displayScale === option ? 'text-black' : 'text-gray-700 hover:text-black'}
                    `}
                            >
                                {option.toFixed(1)}
                            </button>

                            {/* Vertical divider between buttons */}
                            {index < displayOptions.length - 1 && (
                                <div className="w-[1px] h-4 bg-white self-center z-20" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DiamondRingPreview;
