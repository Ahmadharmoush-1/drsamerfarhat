import { useState, useEffect, useRef } from "react";
import { Star, Send, User, Calendar, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Review {
  id: string;
  name: string;
  rating: number;
  message: string;
  date: string;
}

const STORAGE_KEY = "dr_samer_reviews";

/* -------------------- STORAGE HELPERS -------------------- */
const loadReviews = (): Review[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveReviews = (reviews: Review[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
};

const addReview = (review: Review): void => {
  const reviews = loadReviews();
  reviews.unshift(review);
  saveReviews(reviews);
};

/* -------------------- COMPONENT -------------------- */
const FeedbackReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; rating?: string; message?: string }>({});
  const [success, setSuccess] = useState(false);

  /* ⭐ ADMIN MODE */
  const [adminMode, setAdminMode] = useState(false);

  /* ⭐ AUTO SCROLL REF */
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setReviews(loadReviews());
  }, []);

  /* -------------------- AUTO SCROLL LOGIC -------------------- */
  useEffect(() => {
  if (!scrollRef.current || reviews.length === 0) return;

  const container = scrollRef.current;
  let animationFrameId: number;
  let paused = false;

 const speed = 0.2;
// adjust speed here

  const scroll = () => {
    if (!paused) {
      container.scrollLeft += speed;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1
      ) {
        container.scrollLeft = 0;
      }
    }

    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  const handleMouseEnter = () => (paused = true);
  const handleMouseLeave = () => (paused = false);

  container.addEventListener("mouseenter", handleMouseEnter);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    cancelAnimationFrame(animationFrameId);
    container.removeEventListener("mouseenter", handleMouseEnter);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
}, [reviews]);


  /* -------------------- ADMIN LOGIN -------------------- */
  const handleAdminLogin = () => {
    const pass = prompt("Enter admin password:");
    if (pass === "drsamer$") {
      setAdminMode(true);
      alert("Admin mode activated.");
    } else {
      alert("Incorrect password.");
    }
  };

  const deleteReview = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    saveReviews(updated);
  };

  /* -------------------- FORM -------------------- */
  const validateForm = (): boolean => {
    const newErrors: { name?: string; rating?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (rating === 0) newErrors.rating = "Please select a rating";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      rating,
      message: message.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    addReview(newReview);
    setReviews(loadReviews());

    setName("");
    setRating(0);
    setMessage("");
    setErrors({});
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  /* -------------------- STAR RENDER -------------------- */
  const renderStars = (count: number, interactive = false, size = "w-5 h-5") => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          onClick={() => interactive && setRating(star)}
          className={`transition-transform ${
            interactive ? "hover:scale-110" : "cursor-default"
          }`}
        >
          <Star
            className={`${size} ${
              star <= (interactive ? hoverRating || rating : count)
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-muted-foreground/40"
            }`}
          />
        </button>
      ))}
    </div>
  );

  /* -------------------- JSX -------------------- */
  return (
    <section id="feedback" className="py-12 md:py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-3 text-xs uppercase bg-primary/10 text-primary rounded-full">
            Your Voice Matters
          </span>
          <h2 className="text-3xl font-bold mb-2">Patient Feedback</h2>
          <p className="text-muted-foreground text-sm">
            Share your experience with Dr. Samer Farhat
          </p>

          {!adminMode && (
            <button onClick={handleAdminLogin} className="mt-2 text-xs underline text-primary">
              Admin Login
            </button>
          )}
          {adminMode && (
            <p className="mt-2 text-xs text-primary">Admin Mode Enabled</p>
          )}
        </div>

        {/* FORM */}
        <div className="bg-card/70 border rounded-xl p-6 mb-12">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" /> Leave a Review
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

            {renderStars(rating, true)}

            <Textarea
              rows={3}
              placeholder="Share your experience..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}

            <Button className="flex items-center gap-1">
              <Send className="w-4 h-4" /> Submit
            </Button>

            {success && <p className="text-xs text-green-500">Review submitted!</p>}
          </form>
        </div>

        {/* REVIEWS */}
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-primary" /> Recent Reviews
        </h3>

        {reviews.length === 0 ? (
          <p className="text-center text-muted-foreground text-sm">No reviews yet.</p>
        ) : (
         <div
  ref={scrollRef}
  className="flex gap-4 overflow-x-hidden pb-4 no-scrollbar"
>

            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[280px] bg-card/70 border rounded-xl p-4 flex-shrink-0"
              >
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="font-medium text-sm">{review.name}</p>
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {review.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">{review.message}</p>

                {adminMode && (
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="mt-3 text-xs text-red-500 flex items-center gap-1"
                  >
                    <Trash className="w-3 h-3" /> Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeedbackReviews;
