import menuButton from "../html_templates/btn_hamburger.html";

export function appendDropDown(element, menuItems) {
  const menuDropDown = document.createElement("div");
  const menuButtonElement = document.createElement("button");
  menuButtonElement.innerHTML = menuButton;
  menuButtonElement.style.width = "36px";
  menuButtonElement.style.height = "auto";
  menuButtonElement.classList.add("menu-btn");

  menuDropDown.classList.add("menu-drop-down");
  menuDropDown.classList.add("hidden");

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = document.createElement("div");
    menuItem.innerText = menuItems[i].title;
    menuItem.classList.add("menu-dropdown-item");
    menuItem.dataset.dataIndex = i;

    menuItem.addEventListener("click", (event) => {
      const idx = event.target.dataset.dataIndex;
      menuItems[idx].action();
    });
    menuDropDown.appendChild(menuItem);
  }

  menuButtonElement.addEventListener("click", () => {
    if (menuDropDown.classList.contains("hidden")) {
      menuDropDown.classList.remove("hidden");
    } else {
      menuDropDown.classList.add("hidden");
    }
  });

  element.appendChild(menuButtonElement);
  element.appendChild(menuDropDown);
}
