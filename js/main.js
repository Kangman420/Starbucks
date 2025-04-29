gsap.registerPlugin(ScrollTrigger);

// 모든 move-section 요소들을 class로 찾음
const sections = document.getElementsByClassName("move-section");

Array.from(sections).forEach(section => {
  const triggerArea = section.getElementsByClassName("trigger-area")[0];
  const descs = section.getElementsByClassName("desc");
  const button = section.getElementsByClassName("button")[0];

  // 초기 상태 설정
  const allElements = [triggerArea, ...Array.from(descs), button].filter(Boolean);
  allElements.forEach(el => {
    const direction = el.getAttribute("data-direction") || "left";
    gsap.set(el, { opacity: 0, x: direction === "left" ? -100 : 100 });
  });

  // 타임라인 생성
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerArea,
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // 애니메이션 진행
  tl.to(triggerArea, {
    opacity: 1,
    x: 0,
    duration: 0.3
  })
    .to(descs, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.3
    }, "+=0")
    .to(button, {
      opacity: 1,
      x: 0,
      duration: 0.8
    }, "+=0");
});
