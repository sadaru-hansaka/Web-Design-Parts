function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    //enter service key and template key
    emailjs.send("service key", "template key", parms).then(
        function(response) {
            alert("Email sent successfully");
            document.querySelector('.form').reset(); 
        },
        function(error) {
            alert("Failed to send email");
        }
    );
}