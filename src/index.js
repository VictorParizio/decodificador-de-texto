const inputText = document.getElementById("input-text");
const encryptBtn = document.getElementById("encrypt-button");
const decryptBtn = document.getElementById("decrypt-button");
const resultContainer = document.getElementById("sidebar");

const copyToClipboard = (textToCopy) => {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy.replace(/<\/p>/g, "\n").replace(/<p>/g, "");
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  inputText.focus();
  alert("Copiado com sucesso!");
};

const displayResult = (resultText) => {
  const paragraphs = resultText
    .split("\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  resultContainer.innerHTML = `
    ${paragraphs}
    <button 
      class="copyBtn"
      onclick="copyToClipboard('${paragraphs}')"
    >
      Copiar
    </button>
  `;

  resultContainer.classList.add("space-between");
};

const encryptText = () => {
  if (inputText.value.length === 0) {
    alert("Digite seu texto");
    inputText.focus();
    return;
  }

  const inputLetters = inputText.value.split("");
  let encryptedText = [];

  for (let letter of inputLetters) {
    letter =
      letter === "a"
        ? "ahi"
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
  if (inputText.value.length === 0) {
    alert("Digite seu texto");
    inputText.focus();
  }

  const inputWords = inputText.value.split(" ");
  const keyWords = ["ahi", "enter", "imes", "ober", "ufat"];
  let decryptedText = [];

  for (let word of inputWords) {
    for (let keyWord of keyWords) {
      while (word.includes(keyWord)) {
        word = word
          .replace("ahi", "a")
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
