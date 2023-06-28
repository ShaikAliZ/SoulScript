console.log('Hello World!');
const beforeText = document.getElementById('before_text');
const box = document.getElementById('box');
const button = document.getElementById('button');
const input = document.getElementById('userInput');
const p = document.getElementById('para');
const button2 = document.getElementById('userDone');
const section2 = document.getElementById('section2');
const section1 = document.getElementById('section1');
let scroll = false;
setInterval(hidingText, 8000);
function hidingText(){
  beforeText.classList.add('hide');
  box.classList.add('visible');
}
button.addEventListener('click', function(){
  button.style.transform = 'translateY(-600px)';
  input.style.opacity = '1';
  input.style.transform = 'translateY(-100px)';
  p.style.opacity = 1;
  button2.style.transform = 'translateY(-190px)';
  button2.style.visibility = 'visible';
  button2.style.opacity = 1;
})
button2.addEventListener('click', function(){
  p.style.opacity = 0;
  p.style.transform = 'translateX(1000px)';
  input.style.opacity = 0;
  input.style.tramsform = 'translateX(-1000px)';
  input.style.visibility = 'hidden';
  button2.style.opacity = 0;
  button2.style.transform = 'translateX(-1000px)';
  box.style.transform = 'translateY(-30000px)';
  box.style.opacity = 0;
  box.style.visibility = 'hidden';
  scroll = true;
  section1.style.background = '#333'
  var name = input.value;
  window.open('enter.html')
});
if(!scroll){
window.onscroll = () => window.scroll(0, 0);
} else {
  scroll = false;
}
