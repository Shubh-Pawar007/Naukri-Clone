document.querySelector("#form").addEventListener("submit", creatAcc);
    var registerArr = JSON.parse(localStorage.getItem("registedUser")) || []
    console.log(registerArr)

    function creatAcc(event){
        event.preventDefault()        

        var infoObj = {
            sName : document.querySelector("#name").value,
            sEmail : document.querySelector("#email").value,
            sPass : document.querySelector("#pass").value,
            sMobile : document.querySelector("#phone").value
                
        };

        console.log(infoObj);
        registerArr.push(infoObj)
        console.log(registerArr)

        localStorage.setItem("registedUser", JSON.stringify(registerArr)) 

        document.querySelector("input[type='submit']").addEventListener("click", function(){
            window.location.href = "login.html"
        })         
    }