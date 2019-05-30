import _ from 'lodash';
import printMe from './print';
import pic from './smallpic.png'

const component = () => {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const myPic = new Image();

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    myPic.src = pic;

    element.appendChild(btn);
    element.appendChild(myPic);
  
    return element;
  }
  
  document.body.appendChild(component());