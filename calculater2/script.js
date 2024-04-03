let inputs = document.getElementsByClassName('user-inputs');
let ans = "";
let currLength = 0;
let arr = Array.from(inputs);
arr.forEach(input => {
input.addEventListener('click', (e) => {
let currInput = e.target.innerHTML;
if (currInput == 'AC') {
ans = "";
currLength = 0;
screenOutput.value = ans;
} else if (currInput == 'DEL') {
ans = ans.substring(0, ans.length - 1);
currLength--;
screenOutput.value = ans;
} else if (currInput == '=') {
if (currLength == 1) return;
ans = eval(ans);
currLength = ans.length;
screenOutput.value = ans;
} else {
if (currLength > 1) {
let prevInput = ans.charAt(currLength - 1);
if (prevInput == '+' || prevInput == '-' || prevInput
== '*' || prevInput == '/' || prevInput == '%' || prevInput == '.') {
if (currInput == '+' || currInput == '-' ||
ans = ans.substring(0, ans.length - 1);
ans = ans + currInput;
screenOutput.value = ans;
return;
}
}
}
ans = ans + currInput;
currLength++;
screenOutput.value = ans;
}
})
})