tsParticles.load("tsparticles", {

  fullScreen: {
    "enable": false
},

  fpsLimit: 60,
  particles: {
    color: { value: "#181818" },
    links: {
      enable: true,
      distance: 50
    },
    move: {
      enable: true,
      speed: 5,
      outModes: {
        default: "bounce"
      }
    },
    size: {
      value: 1
    }
  }
});
