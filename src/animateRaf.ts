const animate = (duration: number, box: HTMLDivElement) => {
  let startTime = 0;
  const startPos = 0;
  const endPos = 200;

  const update = (currentTime: number) => {
    if (startTime === 0) {
      startTime = currentTime;
    }

    const elapsed = (currentTime - startTime) / duration;
    if (elapsed > 1) return;

    const newPos = startPos + (endPos - startPos) * elapsed;
    box.style.transform = `translateX(${newPos}px)`;
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
};

const start = () => {
  const box = document.querySelector(".box:first-child") as HTMLDivElement;

  if (box) {
    animate(1000, box);
  }
};

requestIdleCallback(start);
