const Icons = document.querySelectorAll(".icon");
Icons.forEach(icon => {
    icon.addEventListener('click',() => {
        const redirectURL=icon.dataset.url;
        const newWindow = window.open(redirectURL,'_blank');
        newWindow.opener = nul;
    })
});