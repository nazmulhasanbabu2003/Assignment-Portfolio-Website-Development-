import React, { useState } from 'react';

export default App;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Portfolio.
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 px-6 py-4 space-y-3">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
          Welcome to my universe
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Nazmul Hasan</span>
        </h1>
        <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          A passionate Frontend Developer & Programmer dedicated to building stunning, responsive, and user-friendly web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="#projects" className="px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:opacity-90 transition transition-all duration-300 hover:scale-110">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-xl font-medium bg-slate-800 text-slate-200 border border-slate-700  transition transition-all duration-300 hover:scale-110">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-100">About Me</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              I am a dedicated developer with a strong focus on creating clean, efficient, and responsive websites. I love exploring modern web technologies and continuously improving my problem-solving skills through coding.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, tweaking system setups, or sharpening my logical skills.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 shadow-xl transition-all duration-300 hover:scale-110">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Info</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="text-slate-400">Degree:</span> CSE / Undergraduate
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="text-slate-400">Email:</span> nazmulhasanbabu2003@gmail.com
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="text-slate-400">Location:</span> Bangladesh
              </li>
              <li className="flex justify-between pb-2">
                <span className="text-slate-400">Freelance:</span> Available
              </li>
              <li className="flex justify-between pb-2">
                <span className="text-slate-400">Contact Number:</span> 01885240139
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Technologies and tools I use to bring ideas to life.</p>
        </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["React.js", "Tailwind CSS", "JavaScript", "HTML5 / CSS3", "Git & GitHub", "C++ Programming", "Vite", "Responsive Design"].map((skill, index) => (
            <div 
              key={index} 
              className="bg-slate-800/40 border border-slate-700/60 p-6 rounded-xl text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 shadow-md group cursor-pointer"
            >
              <span className="font-semibold text-slate-200 group-hover:text-cyan-500 transition">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Some of the works I've built with passion.</p>
        </div>
       {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Some of the works I've built with passion.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Tea House Landing Page", 
              desc: "A fully responsive modern landing page built using Tailwind CSS with clean sections.", 
              tag: "Tailwind CSS",
              link: "https://nazmulhasanbabu2003.github.io/Tea-Landing-Page-With-Tailwind/" 
            },
            { 
              title: "G3 Architects Website", 
              desc: "An architectural firm landing page featuring modern layout and elegant sections.", 
              tag: "HTML / CSS",
              link: "https://nazmulhasanbabu2003.github.io/G3-Architects/" 
            },
            { 
              title: "Bangladesh 2.0", 
              desc: "Idea, innovation, vision and challenges in New Bangladesh.", 
              tag: "HTML/Tailwind CSS/JavaScript",
              link: "https://nazmulhasanbabu2003.github.io/Bangladesh-2.0/" 
            }
          ].map((project, index) => (
            <div key={index} className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition transition-all duration-300 hover:scale-110">
              <div>
                <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block mb-4">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
              >
                Live Demo &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
      </section>

  


          {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400">Have a project in mind or want to say hello? Drop a message!</p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition" />
            <input type="email" placeholder="Your Email" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition" />
          </div>
          <textarea rows="5" placeholder="Your Message" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition"></textarea>
          
          <button type="submit" className="w-full py-4 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:opacity-90 transition transition-all duration-300 hover:scale-105">
            Send Message
          </button>
        </form>

        {/* WhatsApp Contact Button */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 mb-3 text-sm">Or connect with me instantly via WhatsApp:</p>
          <a 
            href="https://wa.me/8801885240139" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-medium bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-500 transition"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Nazmul. All rights reserved.</p>
      </footer>
    </div>
  );
}