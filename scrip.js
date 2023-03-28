var numberbox = 6;
let rv = document.querySelector(':root');
let span =  document.querySelector('#ts');
let play_again= document.querySelector('#pa');
let result =  document.querySelector('#result');
var modeButtons = document.querySelectorAll(".mode");
let box = document.querySelectorAll('.box');
var pickedColor;
var colors = [];

begin();

function begin(){
    span.textContent = pickedColor;
    setupbox();
    setlevel();
    restart();
}

play_again.addEventListener('click', ()=>{
    restart();
})

function setupbox(){
    let boxL = box.length;
    for(let i =0; i < boxL; i++ ){
        box[i].style.backgroundColor =  colors[i];
        box[i].addEventListener('click',function(){
            var clickedcolor = this.style.backgroundColor;
            if(clickedcolor === pickedColor){
                result.textContent = "well done";
                play_again.textContent = 'play again';
                changeColors(pickedColor);
                rv.style.setProperty('--color', pickedColor);
            }
            else{
                this.style.backgroundColor = "rgb(87, 87, 87)";
                result.textContent = 'try again';
            }
        })
    }
}
function setlevel() {

    
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "easy") {
				numberbox=3;
			}
			else {
				numberbox=6;
			}
			restart();
		});
	}
}
function restart(){
    colors = colorgenerator(numberbox);
pickedColor =  chooseColor();
span.textContent = pickedColor;
rv.style.setProperty('--color', 'rgb(68, 134, 239)');
play_again.textContent='new color';
result.textContent='';

for (var i = 0; i < box.length; i++) {
    		if(colors[i]) { 
    			box[i].style.display = "block";
    			box[i].style.backgroundColor = colors[i];
    		}
    		else {
    			box[i].style.display = "none";
            }}

}

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color) {
	for(var i = 0; i < box.length; i++) {
		box[i].style.backgroundColor = color;
		rv.style.setProperty('--color', color);
	}
}
function colorgenerator(num){
    var arr = [];
    for(var x = 0; x<num; x++){
        arr.push(makeColor());
    }
    return arr;
}

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}
