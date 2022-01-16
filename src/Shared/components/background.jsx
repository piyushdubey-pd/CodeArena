import React from "react";
import Particles from "react-tsparticles";

const BackParticles = () => {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#000000",
        },
        particles: {
          number: {
            value: 100,
            limit: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ff0000",
          },
          shape: {
            type: "square",
            stroke: {
              width: 0,
              color: "#ff0000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.8,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ff0000",
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 20,
              duration: 2,
              opacity: 1,
              speed: 2,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: false,
        fps_limit: 60,
      }}
    />
  );
};

export default BackParticles;