// DECLARATION OF VARIABLES TO BE USES
let sysA,sysB,sysC,diaA,diaB,diaC;

// First Bunch
sysA=prompt('Input first systolic pressure reading');
diaA=prompt('Input first diastolic pressure reading');

// Second Bunch
sysB=prompt('Input second systolic pressure reading');
diaB=prompt('Input second diastolic pressure reading');

//Third Bunch
sysC=prompt('Input third systolic pressure reading');
diaC=prompt('Input third diastolic pressure reading');

// Confirmation of storage

console.log(sysA);
console.log(diaA);
console.log(sysB);
console.log(diaB);
console.log(sysC);
console.log(diaC);

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



// DISPLAYING THE MESSAGE ON THE DOM A SUCCESS
// var alrt=document.getElementById('alerti');
// var pair=document.createTextNode(res);
// console.log(res);

// alrt.appendChild(pair);

