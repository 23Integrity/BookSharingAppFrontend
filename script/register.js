function registrationCheck() {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("POST", "https://booksharingapp-1661546905710.azurewebsites.net/api/auth/signup");
    
    // Specifying the MIME type of the request body
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");

    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            Window.open("mainpage.html")
        }
    };

    // Retrieving the form data
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    // Sending the request to the server
    request.send("login=" + login + "&password=" + password);
}