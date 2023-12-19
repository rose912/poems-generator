function generatePoem(event) {
  event.preventDefault();

  let poemElement =document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "Living is no laughing matter",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);