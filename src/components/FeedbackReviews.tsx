import { useState, useEffect } from "react";
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

const FeedbackReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; rating?: string; message?: string }>({});
  const [success, setSuccess] = useState(false);

  // ⭐ ADMIN MODE (password protected)
  const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    setReviews(loadReviews());
  }, []);

  // ⭐ ADMIN LOGIN FUNCTION (works on mobile)
  const handleAdminLogin = () => {
    const pass = prompt("Enter admin password:");

    if (pass === "drsamer$") {
      setAdminMode(true);
      alert("Admin mode activated.");
    } else {
      alert("Incorrect password.");
    }
  };

  // ⭐ DELETE REVIEW (admin only)
  const deleteReview = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    saveReviews(updated);
  };

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

  const renderStars = (count: number, interactive = false, size = "w-5 h-5") => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={!interactive}
            className={`transition-all duration-200 ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"}`}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            onClick={() => interactive && setRating(star)}
          >
            <Star
              className={`${size} transition-colors duration-200 ${
                star <= (interactive ? hoverRating || rating : count)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-transparent text-muted-foreground/40"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section
  id="feedback"
  className="py-12 md:py-20 bg-gradient-to-b from-background to-card/20"
>
  <div className="container mx-auto px-4 md:px-6 max-w-3xl">
    
    {/* Section Header */}
    <div className="text-center mb-8 md:mb-12">
      <span className="inline-block px-3 py-1 mb-3 text-[10px] sm:text-xs font-medium uppercase bg-primary/10 text-primary rounded-full">
        Your Voice Matters
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
        Patient Feedback
      </h2>

      <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
        Share your experience with Dr. Samer Farhat
      </p>

      {/* Admin Login */}
      {!adminMode && (
        <button
          onClick={handleAdminLogin}
          className="mt-2 text-[11px] text-primary underline"
        >
          Admin Login
        </button>
      )}

      {adminMode && (
        <p className="mt-2 text-[11px] text-primary">Admin Mode Enabled</p>
      )}
    </div>

    {/* Review Form */}
    <div className="bg-card/70 backdrop-blur-sm border border-border/40 rounded-xl p-4 sm:p-6 shadow-sm mb-10">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Star className="w-4 h-4 text-primary" />
        Leave a Review
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <div>
          <label className="block text-xs font-medium mb-1">Your Name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="h-9 text-sm"
          />
          {errors.name && <p className="text-destructive text-[11px] mt-1">{errors.name}</p>}
        </div>

        {/* Rating */}
        <div>
          <label className="block text-xs font-medium mb-1">Your Rating</label>

          <div className="flex items-center gap-3">
            {renderStars(rating, true, "w-5 h-5")}
            {rating > 0 && (
              <span className="text-xs text-muted-foreground">
                {rating} stars
              </span>
            )}
          </div>

          {errors.rating && <p className="text-destructive text-[11px] mt-1">{errors.rating}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium mb-1">Your Message</label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="text-sm resize-none"
            placeholder="Share your experience..."
          />
          {errors.message && <p className="text-destructive text-[11px] mt-1">{errors.message}</p>}
        </div>

        {/* Submit */}
        <Button className="w-full sm:w-auto px-6 h-9 text-sm">
          <Send className="w-4 h-4 mr-1" />
          Submit
        </Button>

        {success && (
          <div className="text-green-500 text-xs mt-2">Review submitted!</div>
        )}
      </form>
    </div>

    {/* Reviews List */}
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <User className="w-4 h-4 text-primary" />
        Recent Reviews
        {reviews.length > 0 && (
          <span className="text-xs text-muted-foreground">
            ({reviews.length})
          </span>
        )}
      </h3>

      {/* Empty State */}
      {reviews.length === 0 && (
        <div className="text-center py-10 bg-card/60 border border-border/30 rounded-xl">
          <Star className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
          <p className="text-muted-foreground text-sm">
            No reviews yet. Be the first!
          </p>
        </div>
      )}

      {/* Reviews */}
      <div className="grid gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-card/70 backdrop-blur-md border border-border/40 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              
              {/* Name + stars */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {review.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="font-medium text-sm">{review.name}</p>
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Date */}
              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {review.date}
              </span>
            </div>

            {/* Message */}
            <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">
              {review.message}
            </p>

            {/* Admin Delete */}
            {adminMode && (
              <button
                onClick={() => deleteReview(review.id)}
                className="mt-3 text-red-500 text-[11px] flex items-center gap-1 hover:underline"
              >
                <Trash className="w-3 h-3" />
                Delete Review
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default FeedbackReviews;
