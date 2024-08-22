import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Design = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#05081C",
              },
              image: "linear-gradient(135deg, #05081C 0%, #1e3a8a 100%)",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 6,
                },
                repulse: {
                  distance: 120,
                  duration: 0.6,
                },
              },
            },
            particles: {
              color: {
                value: ["#ffffff", "#3b82f6", "#60a5fa"],
              },
              links: {
                color: "#ffffff",
                distance: 120,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.6,
                random: true,
              },
              shape: {
                type: ["circle", "triangle"],
              },
              size: {
                value: { min: 1, max: 4 },
                random: true,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};

export default Design;
