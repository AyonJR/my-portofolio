import React, { useState } from "react";
import ParticleImage from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.a > 0.5; // Only generate particles where the alpha channel is not transparent
  },
  color: ({ x, y, image }) => "#ffffff", // Customize the color of particles
  radius: () => Math.random() * 2 + 0.5, // Randomize the radius of particles
  mass: () => 40,
  friction: () => 0.15,
};

const ImageParticles = () => {
  const [entropy, setEntropy] = useState(20);

  const handleMouseEnter = () => {
    setEntropy(80); // Increase entropy when hovering to make particles move faster
  };

  const handleMouseLeave = () => {
    setEntropy(20); // Reset entropy when not hovering
  };

  return (
   <div className="flex justify-center">
     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ParticleImage
        src="/AbLogo.png" // Ensure this path is correct
        scale={0.75}
        entropy={entropy}
        maxParticles={4200}
        particleOptions={particleOptions}
        backgroundColor="transparent" // Set the background to transparent
      />
    </div>
   </div>
  );
};

export default ImageParticles;
