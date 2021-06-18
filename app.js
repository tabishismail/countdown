
// Set the date we're counting down
var countDownDate = new Date("22 july 2021").getTime();

// Update the count down every 1 second
var x = setInterval(function(){
    var today = new Date().getTime();
    var distance=countDownDate-today;

    // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
console.log(hours);

//   If the count down is finished, write some text
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("message").innerHTML = "Eid Mubarak";
    document.getElementById("day").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    }

     
},1000);

