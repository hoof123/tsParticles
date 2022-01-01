// @path-json can be an object or an array, the first will be loaded directly, the object from the array will be random selected
/* tsParticles.loadJSON(@dom-id, @path-json, @callback (optional)); */

/* 
tsParticles
  .loadJSON("tsparticles", "wp-content/plugins/tsparticles/json/1.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });
*/

//or

/* tsParticles.load(@dom-id, @options); 

tsParticles.load("tsparticles", {

  fullScreen: {
    "enable": false
},
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "images/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  backgroundMask: {
    enable: true,
    cover: {
      value: {
        r: 255,
        g: 255,
        b: 255
      }
    }
  },
  retina_detect: true,
  background: {
    image: "url('https://particles.js.org/images/background.jpg')",
    position: "cover"
  }
});

*/

//or

/* tsParticles.loadFromArray(@dom-id, @options, @index (optional)); */

/*
tsParticles.loadFromArray("tsparticles", [
  {
    /* options here 
  },
  {
    /* other options here 
  },
]);
//random object
*/
/*
tsParticles.loadFromArray(
  "tsparticles",
  [
    {
      /* options here 
    },
    {
      /* other options here 
    },
  ],
  1
); 
// the second object
*/
// Important! If the index is not in range 0...<array.length, the index will be ignored.

// after initialization this can be used.

/* tsParticles.setOnClickHandler(@callback); */

/* this will be fired from all particles loaded */
/*
tsParticles.setOnClickHandler((event, particles) => {
  /* custom on click handler 
});
*/

// now you can control the animations too, it's possible to pause and resume the animations
// these methods don't change the config so you're safe with all your configurations
// domItem(0) returns the first tsParticles instance loaded in the dom
// const particles = tsParticles.domItem(0);

// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
// particles.play();

// pause will stop the animations
// particles.pause();