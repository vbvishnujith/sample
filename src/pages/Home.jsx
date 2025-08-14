import React, { useState, useEffect } from 'react';

export default function PortfolioWelcome() {
  // State to control when animations start
  const [showContent, setShowContent] = useState(false);
  // State for typing code elements
  const [codeLines, setCodeLines] = useState([]);

  // Array of simple, beginner-friendly code lines
  const codeSnippets = [
    'let name = "John";',
    'const age = 25;',
    'if (age > 18) {',
    '  console.log("Adult");',
    '}',
    'function sayHi() {',
    '  alert("Hello!");',
    '}',
    'let colors = ["red", "blue"];',
    'for (let i = 0; i < 5; i++) {',
    '  console.log(i);',
    '}',
    '<h1>Welcome</h1>',
    '<p>Hello World</p>',
    '<button>Click me</button>',
    'body {',
    '  color: blue;',
    '  font-size: 16px;',
    '}',
    '.title {',
    '  text-align: center;',
    '}',
    'let x = 10;',
    'let y = x + 5;',
    'document.getElementById("demo");',
    'button.onclick = sayHi;',
    'let isTrue = true;',
    'let items = [];',
    'items.push("apple");',
    'Math.random();',
    'Date.now();'
  ];

  // Start animations when component loads
  useEffect(() => {
    // Small delay to make the animation visible
    setTimeout(() => {
      setShowContent(true);
    }, 100);

    // Create typing effect for code lines
    const createCodeLine = () => {
      const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const newLine = {
        id: Math.random(),
        text: randomCode,
        top: Math.random() * 80, // Random vertical position (0-80%)
        left: Math.random() * 80, // Random horizontal position (0-80%)
        opacity: 0.15 + Math.random() * 0.25, // Brighter opacity between 0.15-0.4
        fontSize: 10 + Math.random() * 4, // Small font size
        typingIndex: 0, // For typing effect
        isComplete: false
      };
      return newLine;
    };

    // Generate initial code lines
    const initialLines = Array.from({ length: 12 }, () => createCodeLine());
    setCodeLines(initialLines);

    // Add new code lines periodically
    const addLineInterval = setInterval(() => {
      setCodeLines(prev => {
        const filtered = prev.slice(-20);
        return [...filtered, createCodeLine()];
      });
    }, 3000);

    // Typing animation for each line
    const typingInterval = setInterval(() => {
      setCodeLines(prev => prev.map(line => {
        if (!line.isComplete && line.typingIndex < line.text.length) {
          return {
            ...line,
            typingIndex: line.typingIndex + 1,
            isComplete: line.typingIndex + 1 >= line.text.length
          };
        }
        return line;
      }));
    }, 100); // Typing speed

    return () => {
      clearInterval(addLineInterval);
      clearInterval(typingInterval);
    };
  }, []);

  // Function to handle button click
  const handleViewProjects = () => {
    alert('View Projects clicked! You can add your navigation logic here.');
  };

  return (
    // Main container - full screen with dark gradient background
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      
      {/* Coding in background effect - brighter */}
      <div className="absolute inset-0 pointer-events-none">
        {codeLines.map((line) => (
          <div
            key={line.id}
            className="absolute text-green-400/60 font-mono text-xs"
            style={{
              top: `${line.top}%`,
              left: `${line.left}%`,
              fontSize: `${line.fontSize}px`,
              opacity: line.opacity,
            }}
          >
            {line.text.substring(0, line.typingIndex)}
            {!line.isComplete && (
              <span className="animate-pulse text-green-300/80">|</span>
            )}
          </div>
        ))}
      </div>
      
      {/* Hero section - centers content on screen */}
      <div className="min-h-screen flex items-center justify-center px-4">
        
        {/* Content container - max width and centered */}
        <div className="text-center max-w-4xl">
          
          {/* Main heading with fade-in animation and hover effect */}
          <h1 
            className={`
              text-4xl sm:text-6xl lg:text-7xl 
              font-bold text-white mb-6
              transition-all duration-1000 ease-out
              hover:scale-105 hover:text-blue-100
              cursor-default
              ${showContent 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
              }
            `}
          >
            Hi, I'm{' '}
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              Vishnujith VB
            </span>
          </h1>

          {/* Subtitle with slide-up animation (appears after heading) */}
          <p 
            className={`
              text-xl sm:text-2xl lg:text-3xl 
              text-gray-300 mb-12 font-light
              transition-all duration-1000 ease-out delay-300
              ${showContent 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
              }
            `}
          >
            Welcome to my portfolio
          </p>

          {/* Call-to-action button with enhanced hover effects */}
          <button
            onClick={handleViewProjects}
            className={`
              px-8 py-4 
              bg-blue-600 hover:bg-blue-500
              text-white font-semibold rounded-lg text-lg
              transform hover:scale-110 active:scale-95
              transition-all duration-300 ease-out
              hover:shadow-xl hover:shadow-blue-500/30
              hover:-translate-y-1
              border border-transparent hover:border-blue-400
              ${showContent 
                ? 'opacity-100 translate-y-0 delay-500' 
                : 'opacity-0 translate-y-8'
              }
            `}
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}