const inputText = document.getElementById("input-text");
const encryptBtn = document.getElementById("encrypt-button");
const decryptBtn = document.getElementById("decrypt-button");
const resultContainer = document.getElementById("sidebar");
const modal = document.getElementById("dialog");
let animateCheckbox = document.getElementById("animatedText");

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

const animateText = async (text) => {
  let animatedText = "";
  const characters = text.split("");

  for (let i = 0; i < characters.length; i++) {
    animatedText += characters[i];
    resultContainer.innerHTML = animatedText;
    await new Promise((resolve) => setTimeout(resolve, 40));
  }
};

const displayResult = async (resultText) => {
  const paragraphs = resultText
    .split("\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const copyButton = `
    <button 
      class="copyBtn"
      onclick="copyToClipboard('${paragraphs}')"
    >
      Copiar
    </button>
  `;

  if (animateCheckbox.checked) {
    await animateText(paragraphs);
  } else {
    resultContainer.innerHTML = `${paragraphs}`;
  }

  resultContainer.innerHTML += copyButton;
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
      letter === "e"
        ? "enter"
        : letter === "i"
        ? "imes"
        : letter === "a"
        ? "ai"
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
  let decryptedText = inputWords
    .map((word) => {
      word = word
        .replace("enter", "e")
        .replace("imes", "i")
        .replace("ai", "a")
        .replace("ober", "o")
        .replace("ufat", "u");
      return word;
    })
    .join(" ");

  displayResult(decryptedText);
};

encryptBtn.addEventListener("click", encryptText);
decryptBtn.addEventListener("click", decryptText);
