window.addEventListener('load', function(){
const button1 = document.getElementById('button');
var box = document.getElementById('box');
var box2 = document.getElementById('box2');
const cBtn = document.getElementById('check');
const inputColor = document.getElementById('Fav_Color');
const resultText = document.getElementById('result');
const inputDate = document.getElementById('dateofbirth');
const deathText = document.getElementById('deathText');
const body = document.querySelector('body');
const dob = document.getElementById('dob');
const stravecode = document.getElementById('owner');
const DeathDates = [
  '01-07-2034',
  '02-07-2035',
  '03-08-2036',
  '04-09-2037',
  '05-10-2038',
  '18-06-2039',
  '24-03-2040',
  '25-07-2041',
  '28-09-2042',
  '06-08-2043',
  '07-05-2044',
  '08-02-2045',
  '09-01-2046',
  '10-12-2047',
  '15-10-2038',
  '12-05-2039',
  '13-03-2040',
  '14-07-2041',
  '15-09-2042',
  '16-08-2043',
  '17-05-2044',
  '18-02-2045',
  '19-01-2046',
  '20-10-2038',
  '21-01-2039',
  '22-03-2040',
  '23-07-2041',
  '24-09-2042',
  '25-08-2043',
  '26-05-2044',
  '28-02-2045',
  '27-01-2046',
  '29-12-2047',
  '30-10-2038',
  '31-09-2039',
  '01-01-2040',
  '25-07-2041',
  '28-09-2042',
  '06-08-2043',
  '07-05-2044',
  '08-02-2045',
  '09-01-2046',
  '10-12-2047',
  '05-10-2038',
  '18-08-2039',
  '24-03-2040',
  '25-07-2041',
  '28-09-2042',
  '06-08-2043',
  '07-05-2044',
  '08-02-2045',
  '09-01-2046',
  '10-12-2047',
  ]
let DDate = DeathDates[(Math.floor(Math.random() * (DeathDates.length)))]
button1.addEventListener('click', function(){
  box.style.opacity = 0;
  box.style.visibility = 'hidden';
  box2.style.opacity = 1;
  box2.style.visibility = 'visible';
});
cBtn.addEventListener('click', function(){
  if((inputColor.value == null ||
  inputColor.value == '')){
    alert('Enter Details To Continue!');
  } else if(
  inputColor.value == 'shaik' ||
  inputColor.value == 'Shaik' ||
  inputColor.value == 'Marwaan' ||
  inputColor.value == 'Shaik Marwaan' ||
  inputColor.value == 'ali' ||
  inputColor.value == 'Ali' ||
  inputColor.value == 'Shaik Ali' ||
  inputColor.value == 'shaik ali' ||
  inputColor.value == 'Shaik ali' ||
  inputColor.value == 'shaik Ali' ||
  inputColor.value == 'shaik marwaan' ||
  inputColor.value == 'SHAIK MARWAAN' ||
  inputColor.value == 'MARWAAN' || 
  inputColor.value == 'ALI' || 
  inputColor.value == 'Shaik marwaan'){
    window.open('https://www.instagram.com/byteninja_studios');
    return false;
  }
  
  
  else if (
  inputColor.value == 'red' ||
  inputColor.value == 'yellow' ||
  inputColor.value == 'blue' ||
  inputColor.value == 'white' ||
  inputColor.value == 'grey' ||
  inputColor.value == 'purple' ||
  inputColor.value == 'black' ||
  inputColor.value == 'green' ||
  inputColor.value == 'brown' ||
  inputColor.value == 'orange' || 
  inputColor.value == 'pink' ||
  inputColor.value == 'Red' ||
  inputColor.value == 'Yellow' ||
  inputColor.value == 'Blue' ||
  inputColor.value == 'White' ||
  inputColor.value == 'Grey' ||
  inputColor.value == 'Purple' ||
  inputColor.value == 'Black' ||
  inputColor.value == 'Green' ||
  inputColor.value == 'Brown' ||
  inputColor.value == 'Orange' || 
  inputColor.value == 'Pink'){
  inputDate.style.opacity = 0;
  inputColor.style.visibility = 'hidden';
  inputDate.style.visibility = 'hidden';
  inputColor.style.opacity = 0
  cBtn.style.opacity = 0;
  cBtn.style.visibility = 'hidden';
  deathText.style.transform = 'translateX(-10px)';
  deathText.style.transform = 'translateY(-100px)';
 // box2.style.backgroundImage = 'url(img.jpg';
  body.style.background = '#000';
  deathText.style.color = '#f3f3f3';
  box2.style.zIndex = 1;
  deathText.style.zIndex = 10;
  deathText.classList.add('hide');
  deathText.style.textAlign = 'center';
  dob.style.opacity = 0;
  dob.style.visibility = 'hidden';
  setInterval(Text, 1900);
  } else {
    alert('Invalid Color : ' + inputColor.value);
    return false;
  }
})
setInterval(TimeCut,30000);
function TimeCut(){
  alert('Connection TimeOut! Retrying..')
  window.location.reload();
}
function Text(){
  deathText.innerText = ' D-DATE  \n\n' + ' ' + '{ ' + DDate + ' }';
}
})
owner.addEventListener('click', function(){
const SInsta = 'https://www.instagram.com/byteninja_studios';
  window.open(SInsta);
})