function GetElementStyle(ele){
    var style;
    if(window.getComputedStyle){
        // except IE
        style = window.getComputedStyle(ele, null);
    }else if(ele.currentStyle){
        // IE
        style = ele.currentStyle;
    }
    return style;
}

function getStyleValue(ele, styleType){
    var style = GetElementStyle(ele);
    return style.getPropertyValue(styleType);
}