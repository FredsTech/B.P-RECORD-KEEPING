// WE will create a function that appends all the values writtend to the respective variables so that calculations can be done and the output given.

var calculations=()=>{
let sysA,sysB,sysC,diaA,diaB,diaC;

 sysA=document.getElementById("sysA").value;
 diaA=document.getElementById("diaA").value;


 sysB=document.getElementById("sysA").value;
 diaB=document.getElementById("diaA").value;


 sysC=document.getElementById("sysA").value;
 diaC=document.getElementById("diaA").value;
 
console.log(sysA,sysB,sysC,diaA,diaB,diaC);

// We now go to the conditions computer A
// SYSTOLIC PRESSURE TOTAL
let sysTotal=(+sysA + +sysB + +sysC);
console.log(sysTotal);
// DIASTOLIC PRESSURE TOTAL
let diaTotal=(+diaA + +diaB + +diaC);
console.log(diaTotal);

// SYSTOLIC PRESSURE AVERAGE
let sAvg=Math.floor((sysTotal/3));
console.log(sAvg);

//  DIATOLIC PRESSURE AVERAGE
let dAvg=Math.floor((diaTotal/3));
console.log(dAvg);

// GRADING THE RESPONSE USING THE IF LOOP

if (sAvg<=129&&dAvg<=84) {
   res='Your systolic pressure is'+' '+ sAvg+' '+'and your diastolic pressure is'+' '+dAvg+' '+'Your blood pressure is normal.There is no cause for alarm.'
} else if((sAvg>=130&&sAvg<=139)&&(dAvg>=85&&dAvg<=89)) {
   res='Your systolic pressure is'+' '+ sAvg+' '+'and your diastolic pressure is'+' '+dAvg+' '+'You are perfectly fine.Just a little psyked up.'
} else if((sAvg>=140&&sAvg<=159)&&(dAvg>=90&&dAvg<=99)) {
   res='Your systolic pressure is'+' '+ sAvg+' '+'and your diastolic pressure is'+' '+dAvg+' '+'You have mild hypertension.Kindly consult a medical officer for assistance.'
} else if((sAvg>=160&&sAvg<=179)&&(dAvg>=100&&dAvg<=109)) {
   res='Your systolic pressure is'+' '+ sAvg+' '+'and your diastolic pressure is'+' '+dAvg+' '+'You have mild hypertension.Kindly consult a medical officer for assistance.'
} else {
   res='Your systolic pressure is'+' '+ sAvg+' '+'and your diastolic pressure is'+' '+dAvg+' '+'You have severe hypertension.Consult a medic immediately for swift assistance.'
};


console.log(res);
// var par=document.createElement(p);
// par.setAttribute("id","paragraph_1");
// var p =document.getElementById("paragraph_1");

var p =document.getElementById("answer");
p.innerHTML=res;

};


// calculations();