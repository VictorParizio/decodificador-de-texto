const text = document.getElementById("text");
const encryptBtn = document.getElementById("encrypt-button");

const encryptedText = () => {
  const arrayLetters = text.value.split("");
  let encryptedText = [];

  for (letter of arrayLetters) {
    if (letter === "a") {
      letter = "ai";
    } else if (letter === "e") {
      letter = "enter";
    } else if (letter === "i") {
      letter = "imes";
    } else if (letter === "o") {
      letter = "ober";
    } else if (letter === "u") {
      letter = "ufat";
    }

    encryptedText.push(letter);
  }

  const result = encryptedText.join("");
  alert(result);
};

encryptBtn.addEventListener("click", encryptedText);
