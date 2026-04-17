window.addEventListener("load", () => {                
    var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);                
    if(isMobile) { 
        window.location.href = "../m/views/home.php";
    }
    else { 
        window.location.href = "../d/views/home.php";
    }
});