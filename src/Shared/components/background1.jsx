import React from "react";
import Particles from "react-tsparticles";

const BackParticles1 = () => {
  return (
    <Particles
      canvasClassName="particle-canvas"
      options={{
         fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#000000",
        },
        fpsLimit: 60,
        emitters: {
          direction: "top",
          life: {
            count: 0,
            duration: 0.008,
            delay: 0.1,
          },
          rate: {
            delay: 0.15,
            quantity: 8,
          },
          size: {
            width: 100,
            height: 0,
          },
          position: {
            y: 100,
            x: 50,
          },
        },
        particles: {
          number: {
            value: 20,
          },
          life: {
            count: 5,
          },
          shape: {
            type: "line",
          },
          size: {
            value: 50,
            animation: {
              enable: true,
              sync: true,
              speed: 0.5,
              startValue: "max",
              destroy: "min",
            },
          },
          stroke: {
            color: {
              value: "#ff0000",
            },
            width: 1,
          },
          rotate: {
            path: true,
            value: 0,
          },
          move: {
            straight: true,
            enable: true,
            speed: { min: 15, max: 20 },
            outModes: {
              default: "destroy",
              top: "none",
            },
            trail: {
              fillColor: "#000",
              enable: true,
              length: 2,
            },
          },
        },
      }}
    />
  );
};

export default BackParticles1;
