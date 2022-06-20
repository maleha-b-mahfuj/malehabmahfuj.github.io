let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bear-image.jpg'){
        myImage.setAttribute('src', 'images/another-bear.jpg')
    } else {
        myImage.setAttribute('src', 'images/bear-image.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name. ');
    if(!myName) {
        setUserName();
      } else {
          localStorage.setItem('name', myName);
          myHeading.textContent = 'We like bears, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'We like bears, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}


