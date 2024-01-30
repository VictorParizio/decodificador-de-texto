const text = document.getElementById("text");
const encryptBtn = document.getElementById("encrypt-button");
const decryptBtn = document.getElementById("decrypt-button");
const result = document.getElementById("sidebar");

const copyText = () => {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = decryptedText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
};

const addResult = (result) => {
  result.innerHTML = `<p>${result}</p>
  <button 
    class="copyBtn"
    onclick="copyText()"
  >
    Copiar
  </button>`;
};

const encryptedText = () => {
  const arrayLetters = text.value.split("");
  let encryptedText = [];

  for (letter of arrayLetters) {
    letter =
      letter === "a" ? "ai"
        : letter === "e" ? "enter"
        : letter === "i" ? "imes"
        : letter === "o" ? "ober"
        : letter === "u" ? "ufat" 
        : letter;

    encryptedText.push(letter);
  }

  encryptedText = encryptedText.join("");
  addResult(encryptedText)
};

const decryptedText = () => {
  const arrayWords = text.value.split(" ");
  const keyWords = ["ai", "enter", "imes", "ober", "ufat"];
  let decryptedText = [];

  for (word of arrayWords) {
    for (keyWord of keyWords) {
      while (word.includes(keyWord)) {
        word = word.includes("ai") ? word.replace("ai", "a")
          : word.includes("enter") ? word.replace("enter", "e")
          : word.includes("imes") ? word.replace("imes", "i")
          : word.includes("ober") ? word.replace("ober", "o")
          : word.includes("ufat") ? word.replace("ufat", "u") 
          : word;
      }
    }

    decryptedText.push(word);
  }

  decryptedText = decryptedText.join(" ");
  addResult(decryptedText)
};

encryptBtn.addEventListener("click", encryptedText);
decryptBtn.addEventListener("click", decryptedText);
