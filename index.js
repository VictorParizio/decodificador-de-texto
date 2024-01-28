const text = document.getElementById("text");
const encryptBtn = document.getElementById("encrypt-button");
const decryptBtn = document.getElementById("decrypt-button");

const encryptedText = () => {
  const arrayLetters = text.value.split("");
  let encryptedText = [];

  for (letter of arrayLetters) {
    letter = (letter === "a") ? "ai" :
             (letter === "e") ? "enter" :
             (letter === "i") ? "imes" :
             (letter === "o") ? "ober" :
             (letter === "u") ? "ufat" : letter;

    encryptedText.push(letter);
  }

  const result = encryptedText.join("");
  alert(result);
};

const decryptedText = () => {
  const arrayWords = text.value.split(" ");
  const keyWords = ["ai", "enter", "imes", "ober", "ufat"];
  let encryptedText = [];

  for (word of arrayWords) {
    for (keyWord of keyWords) {
      while (word.includes(keyWord)) {
        word = word.includes("ai") ? word.replace("ai", "a") :
               word.includes("enter") ? word.replace("enter", "e") :
               word.includes("imes") ? word.replace("imes", "i") :
               word.includes("ober") ? word.replace("ober", "o") :
               word.includes("ufat") ? word.replace("ufat", "u") : word;
      }
    }

    encryptedText.push(word);
  }

  const result = encryptedText.join(" ");
  alert(result);
};

encryptBtn.addEventListener("click", encryptedText);
decryptBtn.addEventListener("click", decryptedText);
