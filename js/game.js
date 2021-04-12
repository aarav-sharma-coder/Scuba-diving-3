AFRAME.registerComponent("game", {
    schema: {
      elementId: { type: "string", default: "#coin1" },
    },
  
    update: function () {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function (elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", (e) => {
        if (elementId.includes("#coin")) {
          console.log(elementId + " collision");
        } else if (elementId.includes("#fish")) {
          console.log("fish collision");
        }
      });
    },
  });