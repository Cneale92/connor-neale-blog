const darkModeToggle = document.querySelector("#dark-mode-toggle");
const displayImg = document.querySelector(".display-img");
const backButton = document.getElementById("back");


const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
  displayImg.src = "/assets/Images/blog-image.png";
};


const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
  displayImg.src = "/assets/Images/blog-image.png";
};


darkModeToggle.addEventListener("click", () => {
  const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
  if (!darkModeEnabled) {
    enableDarkMode();
    darkModeToggle.classList.add("bxs-star");
  } else {
    disableDarkMode();
    darkModeToggle.classList.remove("bxs-star");
  }
});

const currentPage = window.location.pathname.split("/").pop();
if (currentPage === "blog.html") {
  backButton.style.display = "block";
} else {
  backButton.style.display = "none";
}


backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
