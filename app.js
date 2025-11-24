console.log("Login page loaded for AKR Corporindo Tbk");

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "dashboard.html";
});
