const dropdown = document.querySelectorAll(".video-dropdown");
const dropdownIcons = document.querySelectorAll(".toggle-icon");
const videosLists = document.querySelectorAll(".videos-dropdown-list");

videosLists.forEach((list) => (list.style.display = "none"));

dropdown.forEach((dropdown, index) => {
  dropdownIcons[index].addEventListener("click", () => {
    const isListShown = videosLists[index].style.display === "block";

    videosLists[index].style.display = isListShown ? "none" : "block";
    dropdownIcons[index].style.transform = isListShown ? "" : "rotate(180deg)";
  });
});
