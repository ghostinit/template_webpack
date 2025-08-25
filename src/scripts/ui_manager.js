// import menuButton from "../html_templates/btn_hamburger.html";
import { appendDropDown } from "./dropDown";

const UIManager = (function () {
  let menuVisible = false;

  const root = document.documentElement;

  //   const menuDropDown = document.createElement("div");

  //   const pageBody = document.querySelector("body");

  const pageHeader = document.querySelector("#page-header");
  const anotherHeader = document.querySelector("#another-header");

  const init = () => {
    appendDropDown(pageHeader, headerMenuItems);
    appendDropDown(anotherHeader, headerMenuItems);
    // buildPageMenuButton();

    // pageBody.addEventListener("click", (event) => {
    //   if (
    //     !event.target.classList.contains("menu-dropdown-item") &&
    //     !event.target.classList.contains("menu-drop-down") &&
    //     !event.target.classList.contains("menu-btn") &&
    //     !event.target.classList.contains("menu-btn-svg")
    //   ) {
    //     if (menuVisible) {
    //       setMenuVisibility(false);
    //     }
    //   }
    // });
  };

  //   const buildPageMenuButton = () => {
  //     const menuButtonElement = document.createElement("button");
  //     menuButtonElement.innerHTML = menuButton;
  //     menuButtonElement.style.width = "36px";
  //     menuButtonElement.style.height = "auto";
  //     menuButtonElement.classList.add("menu-btn");

  //     menuDropDown.classList.add("menu-drop-down");
  //     menuDropDown.classList.add("hidden");
  //     menuVisible = false;
  //     for (let i = 0; i < headerMenuItems.length; i++) {
  //       const menuItem = document.createElement("div");
  //       menuItem.innerText = headerMenuItems[i].title;
  //       menuItem.classList.add("menu-dropdown-item");
  //       menuItem.dataset.dataIndex = i;

  //       menuItem.addEventListener("click", (event) => {
  //         const idx = event.target.dataset.dataIndex;
  //         headerMenuItems[idx].action();
  //       });
  //       menuDropDown.appendChild(menuItem);
  //     }

  //     menuButtonElement.addEventListener("click", () => {
  //       if (menuVisible) {
  //         setMenuVisibility(false);
  //       } else {
  //         setMenuVisibility(true);
  //       }
  //     });

  //     const pageHeader = document.querySelector("#page-header");
  //     pageHeader.appendChild(menuButtonElement);
  //     pageHeader.appendChild(menuDropDown);
  //   };

  const setTheme = () => {
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
  };

  //   const setMenuVisibility = (visible) => {
  //     if (visible) {
  //       menuDropDown.classList.remove("hidden");
  //       menuVisible = true;
  //     } else {
  //       menuDropDown.classList.add("hidden");
  //       menuVisible = false;
  //     }
  //   };

  const menuActionToggleTheme = () => {
    setTheme();
  };

  const menuActionDummyAction = () => {
    console.log("dummy action");
  };

  const headerMenuItems = [
    {
      title: "Toggle Theme",
      action: menuActionToggleTheme,
    },
    {
      title: "Dummy 1",
      action: menuActionDummyAction,
    },
    {
      title: "Dummy 2",
      action: menuActionDummyAction,
    },
  ];

  return {
    init,
  };
})();

export { UIManager };
