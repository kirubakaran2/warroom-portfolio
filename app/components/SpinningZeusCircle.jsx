// components/SpinningZeusCircle.jsx
import Image from 'next/image';
import imgsculpture from '../../public/Sculpture.jpg';
const SpinningZeusCircle = () => {
  const labels = [
    { text: "EXPERTISE AND EXPERIENCE", position: "top-left" },
    { text: "VALUE", position: "top-right" },
    { text: "CLARITY", position: "bottom-right" },
    { text: "RELIABILITY AND TRUST", position: "bottom-center" }, // Adjusted for visual balance
    { text: "RESULTS", position: "bottom-left" },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      {/* Central Zeus Image */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
        {/*
          Using Image 2 as the central image.
          You'll need to place your Image 2 file in `public/images/zeus-thunder.png`
          or adjust the `src` path accordingly.
        */}
        <Image
          src={imgsculpture} // Replace with your actual image path
          alt="Zeus with thunder"
          layout="fill"
          objectFit="contain"
          className="rounded-full shadow-lg" // Optional: add some styling to the image
        />
      </div>

      {/* Spinning Yellow Circle Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[400px] h-[400px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] border-2 border-yellow-400 rounded-full animate-spin-slow flex items-center justify-center">
          {/* Static Dot (for visual anchor, if desired) */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-0 left-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>

          {/* Text Labels - Counter-rotate to stay readable */}
          {labels.map((label, index) => (
            <div
              key={index}
              className={`absolute text-white text-sm md:text-base font-semibold whitespace-nowrap animate-counter-spin
                        ${label.position === "top-left" && "-top-10 left-1/4 -translate-x-1/2"}
                        ${label.position === "top-right" && "-top-10 right-1/4 translate-x-1/2"}
                        ${label.position === "bottom-right" && "-bottom-10 right-1/4 translate-x-1/2"}
                        ${label.position === "bottom-center" && "-bottom-16 left-1/2 -translate-x-1/2"}
                        ${label.position === "bottom-left" && "-bottom-10 left-1/4 -translate-x-1/2"}
                        `}
              style={{
                // Example of calculating positions manually for precise placement if needed
                // For a more dynamic circular arrangement, you'd use trigonometry
                // This static positioning with animate-counter-spin is simpler for this example.
              }}
            >
              {label.text}
              {/* Optional: Thunder-like glow on text */}
              <span className="absolute inset-0 blur-sm opacity-50 bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 animate-pulse-thunder -z-10"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpinningZeusCircle;
