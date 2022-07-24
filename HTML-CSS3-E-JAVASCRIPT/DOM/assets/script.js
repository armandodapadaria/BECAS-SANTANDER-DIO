function mode(){
    let body = document.querySelector('body');
    let h1 = document.querySelector('h1');
    let input = document.querySelector('input');
    body.classList.toggle('darkBody');
    h1.classList.toggle('darkH1');
    input.classList.toggle('darkButton');
    if (h1.innerHTML=="Light Mode ON"){
        h1.innerHTML = "Dark Mode ON";
        input.value = "Light Mode";
    }
    else{
        h1.innerHTML = "Light Mode ON";
        input.value = "Dark Mode";
    }   
}   