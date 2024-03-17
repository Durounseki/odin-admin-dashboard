const Icons = document.querySelectorAll(".icon");
Icons.forEach(icon => {
    icon.addEventListener('click',() => {
        const redirectURL=icon.dataset.url;
        const newWindow = window.open(redirectURL,'_blank');
        newWindow.opener = nul;
    })
});

//Animate progress bar
const progressBars = document.querySelectorAll(".progress");
progressBars.forEach(bar => bar.style.width = bar.dataset.progress+'%');