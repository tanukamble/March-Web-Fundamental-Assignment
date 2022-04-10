 //target.addEventListener('click', height = 300 width  = 300)

 //target.addEventListener('mouseover', mouseOver)
 //target.addEventListener('mouseout', mouseOut)

 //function mouseOver(){
     //const imgTarget = document.querySelector('img')
     //imgTarget.innerimg = `hovering over button`
 //}

 //function mouseOut(){
    //const imgTarget = document.querySelector('img')
     //imgTarget.innerimg = img.height = 300;
                        = img.width =300;
 //}
 const img = document.querySelector('img')
 button.addEventListener('click', addNames)
 
 function addNames(){
     for(let i = 0; i<names.length; i++){
         const newElement = document.createElement('p')
         // newElement.innerText = names[i]
         newElement.innerHTML = `
         <img src="${img16.jpeg}" />
         <h3>${names[i]}</h3>
         `
         newElement.classList.add(classList[i])
         const target = document.querySelector('h1')
         target.appendChild(newElement)
     }
 
     button.style.display = 'none'
 }
 