import './style.css';
import Icon from './icon.png';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = ['Hello', 'webpack', '2'].join(' ');
    element.classList.add('hello');

    // Add the image
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());