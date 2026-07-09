const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWdByn2U5otdKPQs8qju7Ebc2ZV6MOSTqSeSuhkoa5qH2HBkSSq5S9GU&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_NVH-soxhx1QWK0Rvm8drycjxoF5HNh0Wd5nyNt4d3Vie1whyQTdByUW&s=10",
    "https://hips.hearstapps.com/hmg-prod/images/easy-party-food-ideas-grilled-tomatoes-68470ee24ee2a.png",
    "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Party-food-recipes-fcfb3af.jpg",
    "https://www.myfussyeater.com/wp-content/uploads/2022/12/Kids-Christmas-party-platter_02.jpg"
];

let currentIndex = 0;

const sliderImage = document.querySelector("#sliderImage");
const counter = document.querySelector("#counter");
const dotsContainer = document.querySelector("#dotsContainer");

images.forEach((image, index) => {
    dotsContainer.innerHTML +=
    `<span class="dot" onclick="showImage(${index})"></span>`;
});

const dots = document.querySelectorAll(".dot");

function showImage(index){

    currentIndex = index;

    sliderImage.src = images[currentIndex];

    updateCounter();

    dots.forEach(dot => dot.classList.remove("active"));

    dots[currentIndex].classList.add("active");
}

function nextSlide(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);
}

function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
}

function updateCounter(){

    counter.innerHTML = `Image ${currentIndex + 1} of ${images.length}`;
}

showImage(0);