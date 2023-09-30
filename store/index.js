export const state = () => ({
  isDrawerOpen: false,
});

export const getters = {
  getIsDrawerOpen(state) {
    return state.isDrawerOpen;
  },
};

export const mutations = {
  toggleIt(state) {
    state.isDrawerOpen = !state.isDrawerOpen;
    console.log(state.isDrawerOpen);
  },
};

export const actions = {
  handleSidebarMenu() {
    var menuItems = [].slice.call(document.querySelectorAll("#sb-menu li a"));
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function (e) {
        console.log(menuItem);
        menuItems.map(function (item) {
          return item.classList.remove("is-active");
        });
        e.target.classList.add("is-active");
      });
    });

    /*button events*/
    var container = document.querySelector("#page-wrapper");
    var sidebar = document.querySelector("#sb-menu");
    [].forEach.call(
      document.querySelectorAll(".sb-trigger"),
      function (trigger) {
        trigger.addEventListener("click", function (e) {
          container.className = "";
          if (e.target.attributes["data-nav"]) {
            container.classList.add(e.target.attributes["data-nav"].value);
            sidebar.className = "sb-menu";
            sidebar.classList.add(e.target.attributes["data-nav"].value);
          }
          setTimeout(function () {
            container.classList.add("sidebar-is-open");
          }, 150);

          document.addEventListener("click", onBodyClick);
        });
      }
    );

    function onBodyClick(e) {
      var container = document.querySelector("#page-wrapper");
      if (
        e.target.classList.contains("md-content") &&
        container.classList.contains("sidebar-is-open")
      ) {
        container.classList.remove("sidebar-is-open");
        document.removeEventListener("click", onBodyClick);
      }
    }
  },

  toggle(state) {
    return state.commit("toggleIt");
  },
};
