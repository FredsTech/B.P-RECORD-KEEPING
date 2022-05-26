// PERFORMING THE CALCULATIONS
//==============================

var calculations = (e) => {
  e.preventDefault();
  // GETTING THE UPDATED DATA FROM THE DOM
  //========================================
  let sysA, sysB, sysC, diaA, diaB, diaC, p, form;
  form = document.getElementsByClassName("formData")[0];
  console.log(form);
  sysA = document.getElementById("sysA").value;
  diaA = document.getElementById("diaA").value;

  sysB = document.getElementById("sysB").value;
  diaB = document.getElementById("diaB").value;

  sysC = document.getElementById("sysC").value;
  diaC = document.getElementById("diaC").value;
  p = document.getElementById("answer");

  let sysTotal = +sysA + +sysB + +sysC;
  let diaTotal = +diaA + +diaB + +diaC;

  let sAvg = Math.floor(sysTotal / 3);
  let dAvg = Math.floor(diaTotal / 3);

  if (sAvg <= 129 && dAvg <= 84) {
    res =
      "Your systolic pressure is" +
      " " +
      sAvg +
      " " +
      "and your diastolic pressure is" +
      " " +
      dAvg +
      " " +
      "Your blood pressure is normal.There is no cause for alarm.";
  } else if (sAvg >= 130 && sAvg <= 139 && dAvg >= 85 && dAvg <= 89) {
    res =
      "Your systolic pressure is" +
      " " +
      sAvg +
      " " +
      "and your diastolic pressure is" +
      " " +
      dAvg +
      " " +
      "You are perfectly fine.Just a little psyked up.";
  } else if (sAvg >= 140 && sAvg <= 159 && dAvg >= 90 && dAvg <= 99) {
    res =
      "Your systolic pressure is" +
      " " +
      sAvg +
      " " +
      "and your diastolic pressure is" +
      " " +
      dAvg +
      " " +
      "You have mild hypertension.Kindly consult a medical officer for assistance.";
  } else if (sAvg >= 160 && sAvg <= 179 && dAvg >= 100 && dAvg <= 109) {
    res =
      "Your systolic pressure is" +
      " " +
      sAvg +
      " " +
      "and your diastolic pressure is" +
      " " +
      dAvg +
      " " +
      "You have mild hypertension.Kindly consult a medical officer for assistance.";
  } else {
    res =
      "Your systolic pressure is" +
      " " +
      sAvg +
      " " +
      "and your diastolic pressure is" +
      " " +
      dAvg +
      " " +
      "You have severe hypertension.Consult a medic immediately for swift assistance.";
  }

  p.innerHTML = res;

  setTimeout(() => {
    p.innerHTML = " ";
    form.reset();
  }, 1500);
};

const clearingScreen = () => {
  window.location.reload();
};
