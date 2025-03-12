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

function displayCategories(categories) {
  // get the container
  const categoryContainer = document.getElementById("category_container");
  // loop operation on array of object
  for (let cat of categories) {
    // console.log(cat);
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm active:bg-orange-500 active:text-white">${cat.category}</button>
    `;
    // append the element
    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video_container");
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

// {
//     "category_id": "1003",
//     "video_id": "aaai",
//     "thumbnail": "https://i.ibb.co/kc8CCFs/30-rock.png",
//     "title": "30 Rock",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/YZN9rQZ/tina.jpg",
//             "profile_name": "Tina Fey",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "4.5K",
//         "posted_date": "14800"
//     },
//     "description": "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines."
// }
