const reviews = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
      },
      {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
      },
      {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
      },
      {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
      },
      {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
      }
    ];

      let indexToBeDisplayed = 0

  const currentElement = reviews[indexToBeDisplayed]

  const avatarElement = document.querySelector("#avatar")

  const first_nameElement = document.querySelector(".first_name")

  const last_nameElement = document.querySelector(".last_name")
  
  const emailElement = document.querySelector(".email")
  


  const nextBtn = document.querySelector("#next")
  const prevBtn = document.querySelector("#prev")
  const randomBtn = document.querySelector("#random")

  nextBtn.addEventListener('click',displayNext)
  prevBtn.addEventListener('click',displayprev)

  randomBtn.addEventListener('click',displayRandom)


  function displayNext(){
      if(indexToBeDisplayed === reviews.length-1){
          indexToBeDisplayed = 0
      }else{
          indexToBeDisplayed++ 
      }
      console.log(indexToBeDisplayed)
      updateScreen(reviews[indexToBeDisplayed])
  }

    function displayprev(){
      if(indexToBeDisplayed===0){
        indexToBeDisplayed=reviews.length-1
      }else{
        indexToBeDisplayed--
      }
      console.log(indexToBeDisplayed)
      updateScreen(reviews[indexToBeDisplayed])

    }
    function displayRandom(){
        console.log("display randome users details")
    }
  
    function updateScreen(tanu){
      first_nameElement.innerText = tanu.first_name
      last_nameElement.innerText = tanu.last_name
      emailElement.innerText = tanu.email
    
    avatarElement.src = tanu.avatar
    }

  updateScreen(currentElement)



