let colorLight = "#ffffff",
    colorDark = "#000000",
    defaultText = "QR Code Text",
    text = defaultText,
    size = 400;

const getText = document.querySelector('#mytext')
const qrcode  = document.querySelector('#qrcode')
const download = document.querySelector(".download");
const shareBtn = document.querySelector(".share");
const currentSize = document.querySelector(".size");
const light = document.querySelector("#color-one");
const dark = document.querySelector("#color-two");


currentSize.addEventListener("change", handleSize);
getText.addEventListener("input", handleText);
dark.addEventListener("input", handleDarkColor);
light.addEventListener("input", handleLightColor);
// shareBtn.addEventListener("click", handleShare);

// getText.innerHTML = text;
getText.placeholder = text;
function handleText(e){
    const value = e.target.value;
    text = value;
    if (!text) {
        text = defaultText;
    }
    generateQRCode()
}
function handleSize(e) {
    size = e.target.value;
    generateQRCode();
}
function handleDarkColor(e) {
    colorDark = e.target.value;
    generateQRCode();
}

function handleLightColor(e) {
    colorLight = e.target.value;
    generateQRCode();
}
function generateQRCode() {
    qrcode.innerHTML = "";
    console.log(size)
    new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: size,
        height: size,
        colorDark : colorDark,
        colorLight : colorLight,
        correctLevel : QRCode.CorrectLevel.H
    });
}
generateQRCode()
