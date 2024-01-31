const inputText = document.getElementById("input-text");
const encryptBtn = document.getElementById("encrypt-button");
const decryptBtn = document.getElementById("decrypt-button");
const resultContainer = document.getElementById("sidebar");

const copyToClipboard = (textToCopy) => {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
};

const displayResult = (resultText) => {
  resultContainer.innerHTML = `
    <p>${resultText}</p>
    <button 
      class="copyBtn"
      onclick="copyToClipboard('${resultText}')"
    >
      Copiar
    </button>
  `;

  resultContainer.classList.add('result-space-between');
};

const encryptText = () => {
  const inputLetters = inputText.value.split("");
  let encryptedText = [];

  for (let letter of inputLetters) {
    letter =
      letter === "a"
        ? "ai"
        : letter === "e"
        ? "enter"
        : letter === "i"
        ? "imes"
        : letter === "o"
        ? "ober"
        : letter === "u"
        ? "ufat"
        : letter;

    encryptedText.push(letter);
  }

  encryptedText = encryptedText.join("");
  displayResult(encryptedText);
};

const decryptText = () => {
  const inputWords = inputText.value.split(" ");
  const keyWords = ["ai", "enter", "imes", "ober", "ufat"];
  let decryptedText = [];

  for (let word of inputWords) {
    for (let keyWord of keyWords) {
      while (word.includes(keyWord)) {
        word = word.replace("ai", "a")
                   .replace("enter", "e")
                   .replace("imes", "i")
                   .replace("ober", "o")
                   .replace("ufat", "u");
      }
    }

    decryptedText.push(word);
  }

  decryptedText = decryptedText.join(" ");
  displayResult(decryptedText);
};

encryptBtn.addEventListener("click", encryptText);
decryptBtn.addEventListener("click", decryptText);
