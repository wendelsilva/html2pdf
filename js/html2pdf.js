function download() {
    const element = document.getElementById("teste");

    var worker = html2pdf().from(element).save();
}