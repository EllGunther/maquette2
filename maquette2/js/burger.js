let nv = document.getElementById('nave');
let cmpt = 0;
let menu = document.getElementById('menu');
nv.addEventListener('click', () => {
  if (cmpt % 2 == 0) {
      barre2.style.left = -2 + 'vh';
      barre1.style.left = 1 + 'vh';
      barre3.style.left = 1 + 'vh';
  }
  else {
      barre2.style.left = 0 + 'vh';
      barre1.style.left = 0 + 'vh';
      barre3.style.left = 0 + 'vh';   
  }
    cmpt++
    if (cmpt % 2 != 0) {
        menu.style.right = '0%';
    }
    if(cmpt % 2 == 0) {
        menu.style.right = '-150%';
    }
});