function loadCategories() {
  // 1 - fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2 - convert promise to json
    .then((res) => res.json())
    // 3 - sent data to display categories
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

const loadCategoryVideo = (id) => {
  console.log(id);
  const url = `
  https://openapi.programming-hero.com/api/phero-tube/category/${id}
  `;
  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displayVideos(data.category));
}

function displayCategories(categories) {
  // get the container
  const categoryContainer = document.getElementById("category_container");
  // loop operation on array of object
  for (let cat of categories) {
    // console.log(cat);
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button id="${cat.category_id}" onclick = "loadCategoryVideo(${cat.category_id})" class="btn btn-sm active:bg-orange-500 active:text-white">${cat.category}</button>
    `;
    // append the element
    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video_container");

  videoContainer.innerHTML = '';
  if (videos.length === 0){
    videoContainer.innerHTML = `
    <div class="py-20 col-span-full flex flex-col text-center justify-center items-center">
        <img class="w-[120px]" src="./img/Icon.png" alt="">
        <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
      </div>
    `
    ;
    return;
  }
  videos.forEach((video) => {
    //console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
          <div class="card bg-base-100 shadow-sm">
            <figure class="relative">
              <img class = "w-full h-[200px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black px-2 rounded-sm">3hrs 56 min ago</span>
            </figure>
            <div class="my-4 flex gap-3 px-2 flex-row items-start">
              <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <div class="intro">
                <h1 class="text-lg font-semibold">${video.title}</h1>
                <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=bE5mRAhk65Br&format=png&color=000000" alt=""></p>
                <p class="text-sm text-gray-400 ">${video.others.views} views</p>
              </div>
              
              </div>
             
            </div>
          
        `;
    videoContainer.append(videoCard);
  });
};

loadCategories();
loadVideos();
