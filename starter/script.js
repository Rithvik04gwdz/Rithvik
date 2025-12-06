document.getElementById("info-btn").addEventListener("click", () => {
    const btn = document.getElementById("info-btn");

    btn.style.transform = "scale(0.9)";
    btn.style.opacity = "0.7";

    setTimeout(() => {
        btn.style.transform = "scale(1)";
        btn.style.opacity = "1";
    }, 150);
});
