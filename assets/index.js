function responsiveMenu() {
    let navbar = document.getElementById("navbar");
    if (navbar.className === "navbar-menu") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar-menu";
    }
  }
