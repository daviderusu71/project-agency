const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let start = 0;
const end = counter.innerText;

const updateCounter = () => {

start++;

counter.innerText = start;

if(start < end){
setTimeout(updateCounter,20);
}

};

updateCounter();

});

const testimonials = document.querySelectorAll(".testimonial");

let index = 0;

function showTestimonial(){

testimonials.forEach(t => t.classList.remove("active"));

index++;

if(index >= testimonials.length){
index = 0;
}

testimonials[index].classList.add("active");

}

setInterval(showTestimonial,4000);

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.display = "none";

});

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 200){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};