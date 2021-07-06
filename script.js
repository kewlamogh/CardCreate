let colorPickerFBack = document.getElementById('background-color');
let textColor = document.getElementById('text-color');
let myDiv = document.getElementById('div');
let font = document.getElementById('font');
let evt = document.getElementById('evt');
colorPickerFBack.value = '#ADD8E6';
function main() {
  myDiv.style.backgroundColor = colorPickerFBack.value;
  myDiv.style.color = textColor.value;
  if (font.options[font.selectedIndex].text == 'Yomogi') {
    myDiv.style.fontFamily = "'Yomogi', cursive";
    font.style.fontFamily = "'Yomogi', cursive";
  } else if (font.options[font.selectedIndex].text == 'Cursive') {
    myDiv.style.fontFamily = "'Petit Formal Script', cursive";
    font.style.fontFamily = "'Petit Formal Script', cursive";
  } else if (font.options[font.selectedIndex].text == 'Roboto') {
    myDiv.style.fontFamily = "'Roboto', sans-serif";
    font.style.fontFamily = "'Roboto', sans-serif";
  }
  document.getElementById('que').innerText = "Happy "+evt.options[evt.selectedIndex].text+', ';
	let emojis = {"valentines day": "♥💝", "christmas": "🎅🎄", "birthday": "🎉🎉", "father's day": "👨", "mother's day": "👩"}
  document.getElementById('br').innerHTML = emojis[evt.options[evt.selectedIndex].text.toLowerCase()] + '<br>';
  requestAnimationFrame(main);
}
//font-family: 'STIX Two Math', serif;
main();
