setTimeout(() => {
  document.querySelector(".hero-title").classList.add("active");
}, 1000);

setTimeout(() => {
  document.querySelector(".hero-desc").classList.add("active");
}, 1300);

const discussionTarget = document.querySelector(".discussion");
const speakersTarget = document.querySelector(".speakers");
const sponsorsTarget = document.querySelector(".sponsors");

const discussion = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (discussionTarget.classList.contains("active")) return;
      discussionTarget.classList.add("active");
    }
  });
});
const speakers = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (speakersTarget.classList.contains("active")) return;
      speakersTarget.classList.add("active");
    }
  });
});
const sponsors = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (sponsorsTarget.classList.contains("active")) return;
      sponsorsTarget.classList.add("active");
    }
  });
});

discussion.observe(discussionTarget);
speakers.observe(speakersTarget);
sponsors.observe(sponsorsTarget);
