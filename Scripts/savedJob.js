var newdata=JSON.parse(localStorage.getItem("savedJob"));
 console.log(newdata);

 DisplayData(newdata);
//var saveJobarr= localStorage.setItem("savedJob",JSON.stringify(data))||[];

//console.log(saveJobarr)

    function DisplayData(newdata)
    {
        document.querySelector("#jobs").innerHTML="";

        newdata.map(function (elem){
        var innerdiv= document.createElement("div");
        innerdiv.setAttribute("class","innerdiv");
        var p=document.createElement("h3");
        p.innerText=elem.profile;
        // console.log(p)
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
        
        innerdiv.append(p,c,e,s,l,d);
       
        document.querySelector("#jobs").append(innerdiv);

    })
    }

    


