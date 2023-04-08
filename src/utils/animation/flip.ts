export const flip = (
  fn: Function,
  firstEls: HTMLElement[],
  lastEls: HTMLElement[] = firstEls
) => {
  const firstRects = firstEls.map((el) => el.getBoundingClientRect());

  fn();

  setTimeout(() => {
    requestAnimationFrame(() => {
      const lastRects = lastEls.map((el) => el.getBoundingClientRect());

      lastRects.forEach((lastRect, i) => {
        const firstRect = firstRects[i];
        const lastEl = lastEls[i];

        if (!firstRect) {
          return;
        }

        const dx = firstRect.x - lastRect.x;
        const dy = firstRect.y - lastRect.y;
        const dw = firstRect.width / lastRect.width;
        const dh = firstRect.height / lastRect.height;

        lastEl.style.setProperty("--dx", String(dx));
        lastEl.style.setProperty("--dy", String(dy));
        lastEl.style.setProperty("--dw", String(dw));
        lastEl.style.setProperty("--dh", String(dh));

        if (dw !== 1 || dh !== 1) {
          lastEl.dataset.flip = "invert";

          requestAnimationFrame(() => {
            lastEl.dataset.flip = "play";
          });
        }
      });
    });
  }, 0);
};
