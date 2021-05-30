function download() {
    const element = document.getElementById("teste");

    html2pdf()
    .from(element)
    .save();
}