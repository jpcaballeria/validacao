let pswrd = document.getElementById('pswrd');
let toggleBtn = document.getElementById('toggleBtn');
let img = document.getElementById('img');
let img2 = document.getElementById('img2');

let lowerCase = document.getElementById('lower')
let upperCase = document.getElementById('upper')
let digit = document.getElementById('number')
let specialChar = document.getElementById('special')
let minLength = document.getElementById('length')

function checkPassword(data){
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    if(lower.test(data)){
        lowerCase.classList.add('valid')    
    } else {
    lowerCase.classList.remove('valid')
    }
    if(upper.test(data)){
        upperCase.classList.add('valid')    
    } else {
    upperCase.classList.remove('valid')
    }
    if(number.test(data)){
        digit.classList.add('valid')    
    } else {
        digit.classList.remove('valid')
    }
    if(special.test(data)){
        specialChar.classList.add('valid')    
    } else {
        specialChar.classList.remove('valid')
    }
    if(length.test(data)){
        minLength.classList.add('valid')    
    } else {
        minLength.classList.remove('valid')
    }
}



toggleBtn.onclick = function(){
    if(pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text');
        img.classList.add('img3');
        img2.classList.add('img4');
        img2.classList.remove('img2')
    } else{
        pswrd.setAttribute('type', 'password');
        img.classList.remove('img3');
        img2.classList.remove('img4');
        img2.classList.add('img2')
    }
}


