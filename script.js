const generateBtn = document.getElementById("generate-btn");
const qrImage = document.getElementById("qr-image");
const textInput = document.getElementById("text-input");
const downloadBtn = document.getElementById("download-btn");

generateBtn.addEventListener("click", () => {
  const text = textInput.value.trim();

  if (text === "") {
    alert("Please enter some text or a URL.");
    return;
  }

  const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

  qrImage.src = apiURL;

  // Enable download only after image is loaded
  qrImage.onload = () => {
    fetch(apiURL)
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        downloadBtn.href = url;
        downloadBtn.download = "qrcode.png"; // force download name
      });
  };
});
    