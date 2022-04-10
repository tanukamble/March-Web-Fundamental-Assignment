const names = ['virat', 'ronaldo', 'messi', 'dhoni']
 const url = "https://reqres.in/img/faces/10-image.jpg"
 const classList = ['one', 'two', 'three', 'four']

for(let i = 0; i<names.length; i++){
     const newElement = document.createElement('p')
           newElement.innerText = names[i]
        newElement.innerHTML = `
     <img src="${url}" />
     <h3>${names[i]}</h3>     `
     newElement.classList.add(classList[i])
     const target = document.querySelector('h1')
     target.appendChild(newElement)
}