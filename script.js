img = document.getElementById("img");
change = document.getElementById("change");
main = document.getElementsByTagName("main")[0];
footer = document.getElementsByTagName("footer")[0];
body = document.body;

state = true;

main.addEventListener("click", () => {
  body.classList.contains("none")
    ? body.classList.remove("none")
    : body.classList.add("none");
});

change.addEventListener("click", () => {
  img.src = state ? "./BOUNCYAN LOOP.svg" : "./BOUNCYAN.svg";
  state = !state;
});
