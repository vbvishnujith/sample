import React, { useEffect, useState } from 'react';

export default function About() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Add delay for entrance animation
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-6 py-12">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 border-b-4 border-blue-500 inline-block pb-2">
          About Me
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
          Hello! I'm <span className="text-blue-400 font-semibold">Vishnujith VB</span>, a passionate frontend developer with a strong interest in building beautiful and user-friendly web applications. I love transforming ideas into reality using code and continuously strive to improve my skills through learning and experimentation.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
          My journey into web development started with curiosity and quickly turned into a full-time obsession. I'm particularly experienced with technologies like <span className="text-blue-300 font-semibold">React</span>, <span className="text-blue-300 font-semibold">Tailwind CSS</span>, and <span className="text-blue-300 font-semibold">JavaScript</span>.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Apart from coding, I enjoy solving problems, collaborating with teams, and creating intuitive interfaces that make users' lives easier. I'm always up for new challenges and excited to see where this journey leads me.
        </p>
      </div>
    </div>
  );
}
