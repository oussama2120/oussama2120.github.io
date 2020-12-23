/*global document, alert, prompt*/
/*jslint plusplus: true, evil: true*/

function login() {
    
    var username = document.getElementById("text").value,
        password = document.getElementById("pass").value;
    
    if (username === "" || password === "") {
        
        alert("*Please fill out all the fields*");
    }
}