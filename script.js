document.getElementById('calculate-button').addEventListener('click', function() {
  const wt = document.getElementById('weight').value;
  let ht = document.getElementById('height').value;
  const bmiElement = document.getElementById('bmi');
  const type = document.getElementById('body-type');


  bmiElement.style.visibility = "visible";
  type.style.visibility = "hidden";

  if(ht === "" || wt === "" ) {
    if(ht === "" && wt === "" ) bmiElement.innerHTML = "<strong>not dates</strong>";
    else if (ht === "") bmiElement.innerHTML = "<strong>not height</strong>";
    else if (wt === "" ) bmiElement.innerHTML = "<strong>not weight</strong>";
  } else  {
    ht /= 100;
     const bmi = (wt / (ht * ht)).toFixed(3);
     bmiElement.innerHTML = "bmi is <strong>" + bmi + "</strong>";

     type.style.visibility = "visible";
     if (bmi < 18) type.innerHTML = "underweight";
     else if (bmi >= 18.5 && bmi < 24.9 ) type.innerHTML = "normal";
     else if(bmi >= 24.9 && bmi < 29.9) type.innerHTML = "overweight";
     else if(bmi >= 29.9 && bmi < 34.9) type.innerHTML = "obsee";
     else type.innerHTML = "extreme obese";
  }
});