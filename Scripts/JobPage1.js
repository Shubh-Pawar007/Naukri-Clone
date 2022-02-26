//Getting the Data From Local Storage
var data=JSON.parse(localStorage.getItem("jobDetail"));
// console.log(data);

var saveJobarr=JSON.parse(localStorage.getItem("savedJob"))|| [];

//Mapping the Data.
data.map(function (elem){
  var innerdiv= document.createElement("div");
  innerdiv.setAttribute("class","innerdiv")
  var p=document.createElement("h3");
  p.innerText=elem.profile;
  p.setAttribute("class","title")

  var c= document.createElement("p");
  c.innerText=elem.company;
  //console.log(c);
  var e= document.createElement("p");
  e.innerText=elem.experience;
  var s= document.createElement("p");
  s.innerText=elem.salary;
  var l= document.createElement("p");
  l.innerText=elem.location;
  var d= document.createElement("p");
  d.innerText=elem.discription;
  var btn=document.createElement("button");
  btn.setAttribute("class","saveButton");
  btn.innerText="Save";
  btn.addEventListener("click",function(){
    saveJob(elem);
  })
  innerdiv.append(p,c,e,s,l,d,btn);
 
  document.querySelector("#jobs").append(innerdiv);

  // Save Job Fuctionality 
  
})
function saveJob(elem){
  console.log(elem);
  saveJobarr.push(elem)
  console.log(saveJobarr);
  localStorage.setItem("savedJob",JSON.stringify(saveJobarr));
}

