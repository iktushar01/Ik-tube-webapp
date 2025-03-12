function loadCategories (){
    // 1 - fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    // 2 - convert promise to json
    .then(res => res.json())
    // 3 - sent data to display categories
    .then(data => displayCategories(data.categories))
}

function displayCategories (categories){
    // get the container
    const categoryContainer = document.getElementById("category_container");
    // loop operation on array of object
    for (let cat of categories){  
        console.log(cat);
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm active:bg-orange-500 active:text-white">${cat.category}</button>
    `;
    // append the element
    categoryContainer.append(categoryDiv);
    }
}

loadCategories()