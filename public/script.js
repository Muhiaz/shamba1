const navtoggle = document.querySelector('.nav__toggle');
const navmenu = document.querySelector('.nav__menu');

navtoggle.addEventListener('click',()=>{
	navmenu.classList.toggle('active')
})
const navlinks = document.querySelectorAll('.nav__link');
navlinks.forEach(n => n.addEventListener('click',()=>{
	navmenu.classList.remove('active')
}));
const slider = document.querySelector('.slider').children;
const slide = document.querySelector('slide');
let index = 0;

function nextSlide(){
	if(index == slider.length - 1){
		index == 0;
	}
	else{
		index++;
	}
	changeSlide();
}
function changeSlide(){
	for(i=0; i<slider.length; i++){
		slider[i].classList.remove('active');
	}
	slider[index].classList.add('active')
}
let autoplay = setInterval(nextSlide,5000);


const homeslider = document.querySelector('.homeslider').children;
console.log(homeslider);
let homeslideindex = 0;
function nexthomeSlide(){
	if(homeslideindex == homeslider.length - 1){
		homeslideindex = 0;
	}
	else{
		homeslideindex++;
	}
	changehomeSlider();
	updateCircle();
}
	function changehomeSlider(){
		for(let j=0; j<homeslider.length; j++){
			homeslider[j].classList.remove('active');
		}
		homeslider[homeslideindex].classList.add('active');
		console.log(homeslideindex);
	}

function autoslides(){
	nexthomeSlide();
}
const homeslideindicators = document.querySelector('.homeslideindicators');
for(let k=0; k<homeslider.length; k++){
	const div = document.createElement('div');
	div.id = k;
	homeslideindicators.appendChild(div);
	div.setAttribute('onclick','thisIndicator(this)');
	if(k==0){
		div.classList.add('active');
	}


}
function thisIndicator(element){
	homeslideindex = element.id;
	updateCircle();
	changehomeSlider();
}
function updateCircle(){
	for(let x=0; x<homeslideindicators.children.length; x++){
		homeslideindicators.children[x].classList.remove('active');	
	}
	homeslideindicators.children[homeslideindex].classList.add('active');
}
let homesliderInterval = setInterval(autoslides,5000);
