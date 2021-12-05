const seta = document.getElementById('setaid1');
const seta2 = document.getElementById('setaid2');
const myphoto = document.getElementById('myphotoid');


function inicial(){
    myphoto.src='./imgs/etc_img/myphoto.jpg';
    
}

function mudar(){
    myphoto.src='./imgs/etc_img/Eu salvador.jpg';
}

// function text(){
//     if(seta.textContent === '⮚'){
//         mudar();
//         seta.textContent = '⮘';
//     } else {
//         inicial();
//         seta.textContent = '⮚'
//     }
// }

seta.addEventListener('click',inicial)
seta2.addEventListener('click',mudar)