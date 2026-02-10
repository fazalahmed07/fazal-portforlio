import { ChevronLeft, ChevronRight, Quote, } from "lucide-react";
import { useState } from "react";
  const testimonials=[{
    quote:
      "Not done yet.",
    author: "Fazal",
    role: "Test 2",
    avatar:
    "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWV8ZW58MHx8MHx8fDA%3D"
    ,
  },
    {
    quote:
      "Just getting started.",
    author: "No one",
    role: " Test 1.",
    avatar:
      "https://images.unsplash.com/photo-1640903581708-8d491706515b?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D",
  },
];
export const Testimonials = () => {
  const [activeIdx, setAciveIdx]=useState(0);
  const next =()=>{
    setAciveIdx((prev) => ( prev+1 ) %testimonials.length );
  }
   const previous =()=>{
     setAciveIdx((prev) => ( prev - 1 + testimonials.length ) %testimonials.length );
  }
    return (
    <section id="testimonials"
    className="py-32 relative overflow-hidden">
        <div   className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>
        {/* Testimonial s */}
        <div className="max-w-4xl mx-auto "> 
            <div className="relative">
                {/* main */}
                <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200">
                    <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center ">
                        <Quote className="w-6 h-6 text-primary-foreground " />
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                        "{testimonials[activeIdx].quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <img src={testimonials[activeIdx].avatar} 
                        alt={testimonials[activeIdx].author} 
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" 
                        style={{ objectPosition: 'center top' }}/>
                
                        <div>
                            <div className="font-semibold">
                                {testimonials[activeIdx].author}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {testimonials[activeIdx].role}
                            </div>
                        </div>
                    </div>
                </div>
                {/*testimonial nav */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                        <ChevronLeft />
                    </button>
                    <div className="flex gap-2  ">
                      {testimonials.map((_,idx)=>(
                        <button onClick={()=>setAciveIdx(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary":"bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
                    ))}</div>
                    <button onClick={next} className="p-3 rounded-fully glass hover:bg-primary/10 hover:text-primary transition-all">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
        </div>
    </section>
    );
};