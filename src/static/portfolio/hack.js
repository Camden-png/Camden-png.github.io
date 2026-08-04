const hackRight = document.getElementById("hackright");
const hackLeft = document.getElementById("hackleft");

function updateHackPanels() {
  if (!hackRight || !hackLeft) {
    return;
  }

  // CSS hides the columns on narrow screens, nothing to do...
  if (getComputedStyle(hackRight).display === "none") {
    return;
  }

  const firstElement = hackRight.firstElementChild;

  if (!firstElement) {
    return;
  }

  const elementHeight = firstElement.getBoundingClientRect().height;

  if (elementHeight === 0) {
    return;
  }

  // Reads the `zoom` value set in `body` of the CSS...
  const bodyZoom = parseFloat(getComputedStyle(document.body).zoom) || 1;
  const viewportHeight = window.innerHeight / bodyZoom;

  const panelAmount =
    Math.ceil(viewportHeight / elementHeight) + 2;

  while (hackRight.children.length < panelAmount) {
    hackRight.appendChild(firstElement.cloneNode(true));
    hackLeft.appendChild(firstElement.cloneNode(true));
  }

  while (hackRight.children.length > panelAmount) {
    hackRight.lastElementChild.remove();
    hackLeft.lastElementChild.remove();
  }

  [...hackRight.children].forEach((panel, index) => {
    panel.style.top = `${index * elementHeight}px`;
  });

  [...hackLeft.children].forEach((panel, index) => {
    panel.style.top = `${index * elementHeight}px`;
  });
}

window.addEventListener("load", updateHackPanels);
window.addEventListener("resize", updateHackPanels);

updateHackPanels();  // Run immediately to avoid flash
setInterval(updateHackPanels, 1000);  // Fallback...
