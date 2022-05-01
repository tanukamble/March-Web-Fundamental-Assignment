const input = document.querySelector("#search-input")
const container = document.querySelector(".container")
const form = document.querySelector("form")
const icon = document.querySelector("#icon")

form.addEventListener('submit', searchRecipe )
icon.addEventListener('click', searchRecipe)

function searchRecipe(event){
    event.preventDefault()
    
    const query = input.value
    fetchData(query)
}


function fetchData(q){
    console.log("fetching data...", q)

    const baseURL = `https://api.edamam.com/search?q=${q}&app_id=a6d62631&app_key=db65596bbd8f8d675d159c99933c8890&from=0&to=20`;
    fetch(baseURL).then( (something) => {
        return something.json()
    } ).then( (buttler) => {
        console.log(buttler.hits)
        displayData(buttler.hits)
    } ).catch( (error) => {
        console.log("got some error ", error)
    } )
}


function displayData(recipeList){
    container.innerHTML = ''
    for (let i = 0; i < recipeList.length; i++) {
        const element = recipeList[i];
        console.log(element.recipe)
        const html = `
        <div class="recipe-card">
                
                <img class="img" src="https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-2-1200-1024x683.jpg"/>
                <div class="flex-items">
                    <p>${element.recipe.source}</p>
                    <a href=${element.recipe.url}>View Recipe</a>
                </div>
                <div class="more-details">
                    <p>${element.recipe.label}</p>
                </div>
            </div>
        `
        container.innerHTML = container.innerHTML + html
    }

}