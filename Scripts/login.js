var registerArr = JSON.parse(localStorage.getItem("registedUser"));
    console.log(registerArr);

    document.querySelector("#form").addEventListener("submit", loginSub);

    function loginSub(event){
        event.preventDefault()

        var userEmail = document.querySelector("#email").value;
        var userPass = document.querySelector("#pass").value;

        var flag = false;
        for(var i =0;i<registerArr.length;i++)
        {
            if(registerArr[i].sEmail == userEmail && registerArr[i].sPass == userPass){
                flag = true
                break;
            }            
        }
        if(flag == true)
        {
            console.log("Login Succses")
            document.querySelector("#result").textContent = "Login Succesfully";
            document.querySelector("input[type='submit']").addEventListener("click", function (){
                window.location.href = "index.html"
            })
        }
        else
        {
            console.log("Login Failed");
            document.querySelector("#result").textContent = "Invalid Email ID and Password";
            
        }
    }