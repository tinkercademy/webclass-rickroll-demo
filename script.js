const button = document.querySelector("button");
const iframe = document.querySelector("iframe");
let intervalStarted = false;

button.addEventListener("click", () => {
  iframe.style.display = "block";

  // Ensure ? or & is used correctly for autoplay
  const baseURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const autoplayURL = baseURL.includes("?") 
    ? baseURL + "&autoplay=1" 
    : baseURL + "?autoplay=1";

  iframe.setAttribute("src", autoplayURL);

  if (!intervalStarted) {
    intervalStarted = true;
    setInterval(() => {
      rickroll();
    }, 2000);
  }
});

function rickroll() {
  const top = Math.random() * 400;
  const left = Math.random() * 1000;
  const clone = iframe.cloneNode(true);
  clone.style.position = "absolute";
  clone.style.top = top + "px";
  clone.style.left = left + "px";
  document.body.appendChild(clone);
}