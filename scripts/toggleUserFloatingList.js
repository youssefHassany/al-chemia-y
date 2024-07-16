const userSection = document.getElementById("user-section");
const userFloatingList = document.getElementById("user-floating-section");

let isUserFloatingSectionHidden = true;
userFloatingList.style = `${
  isUserFloatingSectionHidden ? "display: none;" : ""
}`;

userSection.addEventListener("click", () => {
  isUserFloatingSectionHidden = !isUserFloatingSectionHidden;
  userFloatingList.style = `${
    isUserFloatingSectionHidden ? "display: none;" : ""
  }`;
});
