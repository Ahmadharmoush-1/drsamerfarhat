import { useState, useRef, useEffect } from "react";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const comparisons = [
    {
      before: "/photos/beforeafterslide1.jpg",
      after: "/photos/beforeafterslide1-1.jpg",
      title: "Hollywood Smile Transformation",
      treatment: "Veneers & Whitening",
    },
    {
      before: "/photos/beforeafterslide2.jpg",
      after: "/photos/beforeafterslide2-1.jpg",
      title: "Dental Implants & Restoration",
      treatment: "Implants & Cosmetic Work",
    },
  ];

  const [currentComparison, setCurrentComparison] = useState(0);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleEnd);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleEnd);
      };
    }
  }, [isDragging]);

  const comparison = comparisons[currentComparison];

  return (
    <section id="before-after" className="py-12 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Real Results
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Interactive Before & After
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Drag the slider to see the amazing transformations we've achieved.
          </p>
        </div>

        {/* Interactive Slider */}
        <div className="max-w-4xl mx-auto animate-zoom-in">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-ew-resize select-none"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img
                src={comparison.after}
                alt="After treatment"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-foreground">
                After
              </div>
            </div>

            {/* Before Image (Overlay with clip) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={comparison.before}
                alt="Before treatment"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-foreground">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
                  <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {comparison.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{comparison.treatment}</p>

            {/* Comparison Selector */}
            <div className="flex justify-center gap-2">
              {comparisons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentComparison(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentComparison ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
