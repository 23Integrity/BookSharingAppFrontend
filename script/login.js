function loginCheck() {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("POST", "https://book-sharing-app-361218.uc.r.appspot.com/api/auth/signin");
    
    // Specifying the MIME type of the request body
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");

    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            localStorage.setItem("login", login)
            open("mainpage.html", "_self")
        }
    };

    // Retrieving the form data
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    // Sending the request to the server
    request.send("login=" + login + "&password=" + password);
}