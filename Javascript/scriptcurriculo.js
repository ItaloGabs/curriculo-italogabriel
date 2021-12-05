const icones = document.getElementById('icones');
const fundo = document.getElementById('fund');
let iconindex = 0;


const imgs = (event) => {
    tudo[event.target.id]();
}


const nextindex = () => iconindex = iconindex < 4 ? ++iconindex : 0;

const changerimg = () => {
    const icon = ['html','css','js','sql','py']
    const icons = icon[ iconindex ];
    tudo[icons]();
    nextindex();
}

const tudo = {
    'html': () => fundo.src='./imgs/etc_img/html5.png',
    'css': () => fundo.src='./imgs/etc_img/css3.png',
    'js': () => fundo.src='./imgs/etc_img/javascript.png',
    'sql': () => fundo.src='./imgs/etc_img/sql.png',
    'py': () => fundo.src='./imgs/etc_img/python.jpg',
}

function goback(){
    fundo.src='./imgs/etc_img/fundo-linguas.jpg';
}

icones.addEventListener('click', imgs)
icones.addEventListener('dblclick', goback)