function generatePoem(event) {
  event.preventDefault();

  let poemElement =document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "Living is no laughing matter",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  poemElement.innerHTML = "Living is no laughing matter";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);