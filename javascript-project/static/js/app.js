const textinput = document.getElementById("textInput");
const charcounter = document.getElementById("charcounter");
const maxchars = 50;
textinput.addEventListener("input", () => {
  const currentlength = textinput.value.length;

  charcounter.textContent = `${currentlength}/ ${maxchars}`;

  if (currentlength > maxchars) {
    textinput.style.borderColor = "red";
    charcounter.style.color = "red";
  }
});
