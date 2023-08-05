document.getElementById('calculate').addEventListener('click', function () {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  if (weight > 0 && height > 0) {
    var total = weight / (height * height);
    
    if (total < 18.5) {
      document.getElementById('result').textContent = "Your BMI is " + total.toFixed(2) + " you are underweight";
      playUnderweightAudio();
    } else if (total >=18.5 && total <=24.9) {
      document.getElementById('result').textContent = "Your BMI is " + total.toFixed(2) + " : You have a normal BMI ";
    }
    else if (total >=25 && total <=29.9) {
      document.getElementById('result').textContent = "Your BMI is " + total.toFixed(2) + " : you are overweight ";
    }
  } else {
    document.getElementById('result').textContent = "Please enter a valid weight and height";
  }
});

document.getElementById('reset').addEventListener('click', function () {
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  document.getElementById('result').textContent = '';
});

function playUnderweightAudio() {
  var audio = document.getElementById('underweightAudio');
  audio.play();
}