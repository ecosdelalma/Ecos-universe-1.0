
const beEcosBtn = document.getElementById("be-ecos");
const formContainer = document.getElementById("form-container");

beEcosBtn.addEventListener("click", () => {
  beEcosBtn.style.display = "none";
  formContainer.classList.remove("hidden");
});
