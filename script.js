function run()
{
    let htmlCode =document.getElementById("html_code")
    let csscode =document.getElementById("css_code")
    let jscode=document.getElementById("js_code")
    let output=document.getElementById("output")
    output.contentDocument.body.innerHTML=htmlCode.value +"<style>"+ csscode.value +"</style>";
    output.contentWindow.eval(jscode.value)

}