function rain() {
    let cloud= document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);
  
      let x = Math.floor(Math.random() * 290);
  
  //  /e.innerText = '💧';
  e.innerText = 'A';
   e.style.left = left + 'px';  
  }