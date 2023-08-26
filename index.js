let colorLight = "#ffffff",
    colorDark = "#000000",
    text = "QR Code Text",
    size = 400;

const getText = document.querySelector('#mytext')
const qrcode  = document.querySelector('#qrcode')
getText.addEventListener("input", handleText);
// getText.innerHTML = text;
getText.placeholder = text;
function handleText(e){
    const value = e.target.value;
    text = value;
    console.log(text)
    generateQRCode()
}

function generateQRCode() {
    qrcode.innerHTML = "";
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
    // new QRCode("qr-code", {
    //     text,
    //     height: size,
    //     width: size,
    //     colorLight,
    //     colorDark,
    // });
    // download.href = await resolveDataUrl();
