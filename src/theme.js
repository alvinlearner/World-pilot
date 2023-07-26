function dark() {
  let darkMode = document.querySelector(".dark");
  if (
    darkMode.style.backgroundColor === "black" &&
    darkMode.style.color === "white"
  ) {
    darkMode.style.backgroundColor = "white";
    darkMode.style.color = "black";
  } else {
    darkMode.style.backgroundColor = "black";
    darkMode.style.color = "white";
  }
}

