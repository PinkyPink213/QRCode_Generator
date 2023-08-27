let colorLight = "#ffffff",
    colorDark = "#000000",
    defaultText = "QR Code Text",
    text = defaultText,
    size = 400;

const getText     = document.querySelector("#mytext")
const qrcode      = document.querySelector("#qrcode")
const download    = document.querySelector(".download");
const shareBtn    = document.querySelector(".share");
const currentSize = document.querySelector(".size");
const light       = document.querySelector("#color-one");
const dark        = document.querySelector("#color-two");
// const getImg      = document.querySelector("#qrcode img");
// const getImg      = document.querySelector("#qrcode img");

            // let img=document.querySelector('img');
            // bd.addEventListener('click',()=>{
            //     let impath=img.getAttribute('src');
            //     let fn=getFileName(impath);
            //     saveAs(impath,fn);
            // });
currentSize.addEventListener("change", handleSize);
getText.addEventListener("input", handleText);
dark.addEventListener("input", handleDarkColor);
light.addEventListener("input", handleLightColor);
download.addEventListener("click",handleDownload)
// shareBtn.addEventListener("click", handleShare);


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

function handleDownload(){
    const getImg      = document.querySelector("#qrcode img");
    const src         = getImg.getAttributeNode("src").value;
    saveAs(src,'qrcode.png');
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
