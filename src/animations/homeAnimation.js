import anime from "animejs"

function homeAnimation() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1000,
  })

  tl.add({
    targets: ".nav .nav__logo",
    translateY: ["-100%", 0],
  })
    .add(
      {
        targets: ".main-nav ul li",
        opacity: [0, 1],
        translateY: ["-50%", 0],
        delay: anime.stagger(100),
      },
      "-=500"
    )
    .add(
      {
        targets: [".main-content h1", ".main-content .h1", ".main-content p"],
        translateY: ["-100%", 0],
        opacity: [0, 1],
        duration: 1000,
      },
      "-=500"
    )
    .add(
      {
        targets: ".main-nav p",
        translateX: [0, "270px"],
      },
      "-=1000"
    )
    .add(
      {
        targets: ".main-nav p",
        translateY: [0, "-96px"],
      },
      "-=400"
    )
    .add(
      {
        targets: ".social-links .social-item",
        translateX: ["100%", 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
      },
      "-=1000"
    )
}
export { homeAnimation }
