const btMenOpen = document.querySelector('.head__menu');
const lay = document.querySelector('.overlay');
const btMenClosed = document.querySelector('.main-menu__close');

const bl = document.querySelector('.blur');

const btRepOpen = document.querySelector('.head__repair');
const rep = document.querySelector('.repair-saidbar');
const btRepClosed = document.querySelector('.repair-saidbar__closed');

const btCallOpen = document.querySelector('.head__checkstatus');
const call = document.querySelector('.call-saidbar');
const btCallClosed = document.querySelector('.call-saidbar__closed');
let skil;
let i = 0 ;
 function openMen(){
    lay.classList.add('show');
    lay.classList.remove('no-show');
    bl.classList.add('set');
    bl.classList.remove('set-too');
    skil = 'menu';
     
};
function openRep(){
    rep.classList.add('opt');
    rep.classList.remove('opt-too');
    bl.classList.add('set');
    bl.classList.remove('set-too');
    skil = 'repair';
    
};

function openCall(){
    call.classList.add('opt');
    call.classList.remove('opt-too');
    bl.classList.add('set');
    bl.classList.remove('set-too');
    skil = 'Call';
    
};
function closMen(){
    lay.classList.add('no-show');
    lay.classList.remove('show');
    bl.classList.remove('set');
    bl.classList.add('set-too');
    i = 0 ;
};
function closCall(){
    call.classList.add('opt-too');
    call.classList.remove('opt');
    bl.classList.remove('set');
    bl.classList.add('set-too');
    i = 0 ;
};
function closRep(){
    rep.classList.add('opt-too');
    rep.classList.remove('opt');
    bl.classList.remove('set');
    bl.classList.add('set-too');
    i = 0 ;
};
function set(event) { 
    
    i++;
       if (i == 2){
           if(skil == 'menu'){
        closMen();
        }
        else if (skil == 'repair'){
        closRep();
        }
        else if (skil == 'Call'){
            closCall();
            }

    }
    
};
btMenOpen.addEventListener('click', openMen);
btMenClosed.addEventListener('click', closMen);
bl.addEventListener('click', set);
btRepOpen.addEventListener('click', openRep);
btRepClosed.addEventListener('click', closRep);
btCallOpen.addEventListener('click', openCall);
btCallClosed.addEventListener('click', closCall)
