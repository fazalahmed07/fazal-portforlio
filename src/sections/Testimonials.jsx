import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [activeIdx, setAciveIdx] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch approved reviews from backend
  useEffect(() => {
    fetch("https://54-165-144-23.nip.io/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const next = () => {
    setAciveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setAciveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://54-165-144-23.nip.io/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        {loading ? (
          <p className="text-center text-muted-foreground">Loading reviews...</p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-muted-foreground">No reviews yet. Be the first!</p>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                  "{testimonials[activeIdx].comment}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/20">
                    <span className="text-xl font-bold text-primary">
                      {testimonials[activeIdx].name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[activeIdx].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                  </div>
                </div>
              </div>
              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                  <ChevronLeft />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAciveIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    />
                  ))}
                </div>
                <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Submit a Review Form */}
        <div className="max-w-xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary-foreground">
            Leave a Review
          </h3>
          {submitted ? (
            <div className="glass p-8 rounded-3xl text-center">
              <p className="text-lg text-primary font-medium">Thank you for your review!</p>
              <p className="text-sm text-muted-foreground mt-2">It will appear after approval.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
              />
              <input
                type="text"
                placeholder="Your role (e.g. CEO at Company)"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
              />
              <textarea
                placeholder="Your review..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                required
                rows={4}
                className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground rounded-xl py-3 font-semibold hover:bg-primary/90 transition-all"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};