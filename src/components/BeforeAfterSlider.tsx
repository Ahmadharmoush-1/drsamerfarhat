import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const comparisons = [ {
      before: "/photos/beforeafterslide2.jpg",
      after: "/photos/beforeafterslide2-1.jpg",
      title: "Dental Implants & Restoration",
      treatment: "Implants & Cosmetic Work",
    },
      {
      before: "/photos/beforeafterslide4.jpg",
      after: "/photos/beforeafterslide4-1.jpg",
      title: "Hollywood Smile Transformation",
      treatment: "Veneers & Whitening",
    },
    {
      before: "/photos/beforeafterslide1.jpg",
      after: "/photos/beforeafterslide1-1.jpg",
      title: "Hollywood Smile Transformation",
      treatment: "Veneers & Whitening",
    },
   
    {
      before: "/photos/beforeafterslide3.jpg",
      after: "/photos/beforeafterslide3-1.jpg",
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

  const handleMouseMove = (e: MouseEvent) => isDragging && handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) =>
    isDragging && handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", () => setIsDragging(false));
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", () => setIsDragging(false));

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", () => setIsDragging(false));
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", () => setIsDragging(false));
      };
    }
  }, [isDragging]);

  const comparison = comparisons[currentComparison];

  return (
    <section id="before-after" className="py-8 md:py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6 md:mb-8 animate-fade-in-up">
          <h3 className="text-xs font-semibold text-primary uppercase mb-1">
            Real Results
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Before & After Transformations
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Drag the slider to see real patient smile improvements.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto animate-zoom-in">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* After */}
            <div className="absolute inset-0">
              <img
                src={comparison.after}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-background/80 px-2 py-1 rounded-full text-[10px] font-semibold">
                After
              </div>
            </div>

            {/* Before */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={comparison.before}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-background/80 px-2 py-1 rounded-full text-[10px] font-semibold">
                Before
              </div>
            </div>

            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-primary-foreground rounded" />
                  <div className="w-0.5 h-3 bg-primary-foreground rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-4 text-center">
            <h3 className="text-base font-semibold text-foreground mb-1">
              {comparison.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              {comparison.treatment}
            </p>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-2">

              {/* Left Arrow */}
              <button
                onClick={() =>
                  setCurrentComparison(
                    (prev) => (prev - 1 + comparisons.length) % comparisons.length
                  )
                }
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {comparisons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentComparison(index)}
                    className={`
                      transition-all duration-300
                      ${index === currentComparison
                        ? "w-6 h-2 bg-primary rounded-full"
                        : "w-2 h-2 bg-muted-foreground/40 rounded-full"}
                    `}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  setCurrentComparison(
                    (prev) => (prev + 1) % comparisons.length
                  )
                }
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

            </div>

            {/* Swipe Indicator */}
            <div className="flex justify-center items-center gap-2 mt-3 text-muted-foreground text-xs md:hidden">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <span>Swipe right to view more</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
