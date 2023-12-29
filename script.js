// function run()
// {
//     let htmlCode =document.getElementById("html_code")
//     let csscode =document.getElementById("css_code")
//     let jscode=document.getElementById("js_code")
//     let output=document.getElementById("output")
//     output.contentDocument.body.innerHTML=htmlCode.value +"<style>"+ csscode.value +"</style>";
//     output.contentWindow.eval(jscode.value)
// }


function run() {
    let htmlCode = document.getElementById("html_code");
    let cssCode = document.getElementById("css_code");
    let jsCode = document.getElementById("js_code");
    let output = document.getElementById("output");

    if (output.contentDocument) {
        let combinedCode = `
            ${htmlCode.value}
            <style>${cssCode.value}</style>
            <script>${jsCode.value}</script>
        `;

        output.contentDocument.open();
        output.contentDocument.write(combinedCode);
        output.contentDocument.close();
    } else {
        console.error("Failed to access the iframe content.");
    }
}
