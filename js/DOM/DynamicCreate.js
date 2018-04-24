// JS
// 外链方式
function DynamicCreateJS1(url){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

// 内嵌方式，注意IE不能直接给script设置子节点
function DynamicCreateJS2(scriptText){
    var script = document.createElement("script");
    script.type = "text/javascript";
    var code = document.createTextNode(scriptText);
    try{
        script.appendChild(code);
    }catch(ex){
        script.text = scriptText; // IE
    }
    document.body.appendChild(script);

}

// CSS
// 外链方式
function DynamicCreateCSS1(url){
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

// 内嵌方式
function DynamicCreateCSS2(cssText){
    var style = document.createElement("style");
    style.type = "text/css";
    var code = document.createTextNode(cssText);
    try {
        style.appendChild(code);
    } catch (ex) {
        style.styleSheet.cssText = cssText; // IE，注意，重用同一个style元素并再次设置此属性时，会导致浏览器崩溃，设置为空时，也会导致崩溃
    }
    document.getElementsByTagName("head")[0].appendChild(style);
}

// 表格
var table = document.createElement("table");
table.border = 1;
table.width = "100%";

var tbody = document.createElement("tbody");
table.appendChild(tbody);
// 创建第一行
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells(0).appendChild(document.createTextNode("Cell 1 1"));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells(1).appendChild(document.createTextNode("Cell 2 1"));
// 创建第二行
tbody.insertRow(1);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells(0).appendChild(document.createTextNode("Cell 1 2"));
tbody.rows[1].insertCell(1);
tbody.rows[1].cells(1).appendChild(document.createTextNode("Cell 2 2"));