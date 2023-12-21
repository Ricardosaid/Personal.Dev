// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//If "buttonProbe" is clicked, then send a request to the server to log the event
document.getElementById("buttonProbe").addEventListener("click", function () {
    //show an alert to the user
    Swal.fire({
        title: 'Sending a request to the server...',
        text: 'Please wait...',
        allowOutsideClick: false,
        showConfirmButton: false
    });
});
