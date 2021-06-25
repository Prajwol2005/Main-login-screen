/* JS didn't work with the PopCode so I commented it all out 
// set the correct username and password combination below
let correctUsername = "Me";
let correctPassword = "1234";


$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();

    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
    if (username === correctUsername && password === correctPassword) {
        window.location.replace("https://popcode.org/?snapshot=bb1f37f6-156a-4f07-8f57-c91ce6dfc979");
        /*(window.location.replace("www.com")) and (window.location.href = "")dont work with popcode*/
/*
    } else if (username === correctUsername && password === "") {
        $(".message").text("Complete username");
    } else if (username === "" && password === correctPassword) {
        $(".message").text("Complete username");
    } else if (username === correctUsername && password !== correctPassword) {
        $(".message").text("Incorrect Password");
    } else if (username !== correctUsername && password === correctPassword) {
        $(".message").text("Wrong Username");
    } else if (username === "" && password === "") {
        $(".message").text("Complete username and password!");
    } else {
        $(".message").text("Wrong username and password");
    }
    $("body").css("background-color", "black");
/*});*/