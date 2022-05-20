const aside = document.getElementById("aside");
console.log(aside);
aside.addEventListener("click", () => {
  const modalHome = document.getElementById("modal_home");

  modalHome.style.display = "block";
});
