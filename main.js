"use strict";
let personName = '';
prompt('what is your name?') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here are yore name in:
   LowerCase: ${lowercase}
   UpperCase: ${Uppercase}
   TitleCase: ${tittlecase}`);
}
else {
    alert('Please fill your name !');
}
