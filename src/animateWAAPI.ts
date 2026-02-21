const animate = (duration: number, box: HTMLDivElement) => {
  const startPos = 0;
  const endPos = 200;

  box.animate(
    [
      { transform: `translateX(${startPos}px)` },
      { transform: `translateX(${endPos}px)` },
    ],
    {
      duration,
      fill: "forwards",
    },
  );
};

const start = () => {
  const box = document.querySelector(".box:last-child") as HTMLDivElement;

  if (box) {
    animate(1000, box);
  }
};

requestIdleCallback(start);
