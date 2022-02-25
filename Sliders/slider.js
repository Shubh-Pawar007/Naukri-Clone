
var left = 1;
var right = 5;
function show() {


  for (m = left; m <= right; m++) {
    document.getElementById("c" + m).style.display = "inline-block";
    document.getElementById("d" + m).style.display = "inline-block";
  }

}
function moveleft() {

  if (left >= 2 && right >= 6) {
    document.getElementById("c" + right).style.display = "none";
    left--;
    right--;
    for (i = left; i <= right; i++) {
          document.getElementById("c" + i).style.display = "inline-block";
   
        }
    }
  else {
    return;
  }
}
function moveright() {
   debugger;

  if (left <= 3 && right <= 7) {
    document.getElementById("c" + left).style.display = "none";

    left++;
    right++;
    for (j = left; j <= right; j++) {
      document.getElementById("c" + j).style.display = "inline-block";
  
    }
    
  }
  else {
    return;
  }
debugger;
}
console.log(left,right);
function Next() {
  if (left <= 3 && right <= 7) {
    document.getElementById("d" + left).style.display = "none";
    left++;
    right++;
    for (k = left; k <= right; k++) {
      document.getElementById("d" + k).style.display = "inline-block";

    }
  }
  else {
    return;
  }
}
function prev() {
  if (left >= 2 && right >= 6) {
  document.getElementById("d" + right).style.display = "none";
    left--;
    right--;
    for (l = left; l<= right; l++) {
      document.getElementById("d" + l).style.display = "inline-block";
    }
  }
  else {
    return;
  }
}