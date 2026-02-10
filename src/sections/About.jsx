import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About=() => {
    return <section id="about"className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/*left column*/} 
              <div className="space-y-8">
                <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium treacking-wider uppercas">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
                Building the future,
                <span className="font-serif italic font-normal text-white"> one component at a time
                  </span> 
                  </h2>
                  <div className="space-y-4 text-muted-foreground aimate-fade-in animation-delay-200">
                    <p>
                      I'm a dedicated web developer with a passion for creating modern, responsive, and visually appealing websites.
                       I enjoy building clean user interfaces that not only look good but also provide smooth and intuitive experiences. 
                       My focus is always on writing structured, maintainable code while bringing creative ideas to life 
                       through design and development.
                    </p>
                    <p>
                      I specialize in front-end development, working with the latest web technologies to develop fast, interactive, and 
                      optimized web applications. Whether it's designing a portfolio, developing a business website, or building a 
                      full-scale web platform, I aim to deliver solutions that meet real-world needs. I'm constantly learning and 
                      improving to stay updated with current trends and best practices in web development.
                    </p>
                    <p>
                      For me, web development is more than just coding — it's about solving problems and crafting digital experiences that 
                      make an impact. I take pride in paying attention to detail, ensuring performance, accessibility, and responsiveness across all devices.
                       My goal is to grow as a professional developer while building projects that reflect both technical skill and creativity.
                    </p>
                  </div>
                  <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                      My mission is to empower businesses and creators with cutting-edge web experiences that captivate, convert, and 
                      perform flawlessly across every device. By harnessing modern front-end technologies like React, Tailwind CSS, and 
                      responsive design, I solve real-world challenges with clean, accessible code and creative flair—delivering intuitive
                       UIs that drive impact, foster user delight, and stand the test of evolving trends
                    </p>
                  </div>
             </div>
             {/*right col */}
             <div className="grid sm:grid-cols-2 gap-6">
             {highlights.map((item,idx) =>(
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in "
              style={{animationDelay:`${(idx+1) * 100}ms`}}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground ">{item.description}</p>
                </div>
             ))}
             </div>
             </div>
        </div>
    </section>;
};