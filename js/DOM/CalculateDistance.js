function divCenterPos(className){
    var div = document.getElementsByClassName(className)[0];
    var position = div.getBoundingClientRect();
    this.divPosX = position.left+(position.right-position.left)/2;
    this.divPosY = position.top+(position.bottom-position.top)/2;
}

function divLeftPos(className){
    var div = document.getElementsByClassName(className)[0];
    var position = div.getBoundingClientRect();
    this.divPosX = position.left;
    this.divPosY = position.top;
}