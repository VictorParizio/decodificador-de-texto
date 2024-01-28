const text = document.getElementById("text");
const encryptBtn = document.getElementById("encrypt-button");
const decryptBtn = document.getElementById("decrypt-button");

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

const decryptedText = () => {
  const arrayWords = text.value.split(" ");
  const keyWords = ["ai", "enter", "imes", "ober", "ufat"];
  let encryptedText = [];

  for (word of arrayWords) {
    for (keyWord of keyWords) {
      while (word.includes(keyWord)) {
        if (word.includes("ai")) {
          word = word.replace("ai", "a");
        }
        if (word.includes("enter")) {
          word = word.replace("enter", "e");
        }
        if (word.includes("imes")) {
          word = word.replace("imes", "i");
        }
        if (word.includes("ober")) {
          word = word.replace("ober", "o");
        }
        if (word.includes("ufat")) {
          word = word.replace("ufat", "u");
        }
      }
    }

    encryptedText.push(word);
  }

  const result = encryptedText.join(" ");
  alert(result);
};

encryptBtn.addEventListener("click", encryptedText);
decryptBtn.addEventListener("click", decryptedText);
