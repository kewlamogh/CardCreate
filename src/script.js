let colorPickerFBack = document.getElementById('background-color');
let textColor = document.getElementById('text-color');
let myDiv = document.getElementById('div');
let font = document.getElementById('font');
let evt = document.getElementById('evt');
evt.click();
document.getElementById('br').innerHTML = "🎉🎉" + '<br>';
let hed = document.getElementById('que');
let toWho = document.getElementById('ppp');
colorPickerFBack.value = '#ADD8E6';
function main() {
  myDiv.style.backgroundColor = colorPickerFBack.value;
  myDiv.style.color = textColor.value;
  if (font.options[font.selectedIndex].text == 'Yomogi') {
    myDiv.style.fontFamily = "'Yomogi', cursive";
    font.style.fontFamily = "'Yomogi', cursive";
	  hed.style.fontFamily = "'Yomogi', cursive";
	  toWho.style.fontFamily = "'Yomogi', cursive";
  } else if (font.options[font.selectedIndex].text == 'Cursive') {
    myDiv.style.fontFamily = "'Petit Formal Script', cursive";
    font.style.fontFamily = "'Petit Formal Script', cursive";
toWho.style.fontFamily = "'Petit Formal Script', cursive";
	hed.style.fontFamily = "'Petit Formal Script', cursive";
  } else if (font.options[font.selectedIndex].text == 'Roboto') {
    myDiv.style.fontFamily = "'Roboto', sans-serif";
    font.style.fontFamily = "'Roboto', sans-serif";  
	hed.style.fontFamily = "'Roboto', sans-serif";
	  toWho.style.fontFamily = "'Roboto', sans-serif";
  } else if (font.selectedIndex == 3) {
	myDiv.style.fontFamily = "'Uchen', serif";
	font.style.fontFamily = "'Uchen', serif";
	  hed.style.fontFamily = "'Uchen', serif";
	  toWho.style.fontFamily = "'Uchen', serif";
	} 
  requestAnimationFrame(main);
}
evt.onclick = function () {


  document.getElementById('que').innerText = "Happy "+evt.options[evt.selectedIndex].text+', ';
	if (evt.options[evt.selectedIndex].text == "Christmas") {
document.getElementById('que').innerText = "Merry "+evt.options[evt.selectedIndex].text+', ';}
let emojis = {"valentines day": "♥💝", "christmas": "🎅🎄", "birthday": "🎉🎉", "father's day": "👨", "mother's day": "👩"}
  document.getElementById('br').innerHTML = emojis[evt.options[evt.selectedIndex].text.toLowerCase()] + '<br>';
}
	
//font-family: 'STIX Two Math', serif;
main();
