const inputText = document.getElementById("input-text");
const encryptBtn = document.getElementById("encrypt-button");
const decryptBtn = document.getElementById("decrypt-button");
const resultContainer = document.getElementById("sidebar");
const modal = document.getElementById("dialog");

const showModal = (message) => {
  const isVisible = modal.style.display === "block";
  modal.style.display = isVisible ? "none" : "block";

  if (!isVisible) {
    modal.innerHTML = `
      <p>${message}</p>
    `;

    setTimeout(() => {
      modal.style.display = "none";
    }, 3000);
  }
};

const copyToClipboard = (textToCopy) => {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy.replace(/<p>/g, "").replace(/<\/p>/g, "\n");
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  inputText.focus();
  showModal("Copiado com sucesso!");
};

const displayResult = (resultText) => {
  const paragraphs = resultText
    .split("\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  let animatedText = "";

  paragraphs.split("").forEach((letter, i) => {
    setTimeout(() => {
      animatedText += letter;
      resultContainer.innerHTML = animatedText;

      resultContainer.innerHTML += `
          <button 
            class="copyBtn"
            onclick="copyToClipboard('${paragraphs}')"
          >
            Copiar
          </button>
        `;
    }, 25 * i);
  });

  resultContainer.classList.add("space-between");
};

const encryptText = () => {
  if (inputText.value.length === 0) {
    showModal("Digite seu texto");
    inputText.focus();
    return;
  }

  const inputLetters = inputText.value.split("");
  const encryptedText = inputLetters
    .map((letter) =>
      letter === "a"
        ? "ahti"
        : letter === "e"
        ? "enter"
        : letter === "i"
        ? "imes"
        : letter === "o"
        ? "ober"
        : letter === "u"
        ? "ufat"
        : letter
    )
    .join("");

  displayResult(encryptedText);
};

const decryptText = () => {
  if (inputText.value.length === 0) {
    showModal("Digite seu texto");
    inputText.focus();
    return;
  }

  const inputWords = inputText.value.split(" ");
  const keyWords = ["ahti", "enter", "imes", "ober", "ufat"];
  let decryptedText = inputWords
    .map((word) => {
      keyWords.forEach((keyWord) => {
        while (word.includes(keyWord)) {
          word = word
            .replace("ahti", "a")
            .replace("enter", "e")
            .replace("imes", "i")
            .replace("ober", "o")
            .replace("ufat", "u");
        }
      });
      return word;
    })
    .join(" ");

  displayResult(decryptedText);
};

encryptBtn.addEventListener("click", encryptText);
decryptBtn.addEventListener("click", decryptText);
