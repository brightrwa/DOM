const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        tabs.forEach(function(item) {
            item.classList.remove("active");
        });

        panels.forEach(function(panel) {
            panel.classList.remove("active");
        });

        tab.classList.add("active");

        const selectedTab = tab.dataset.tab;

        const selectedPanel = document.querySelector(`#${selectedTab}`);

        selectedPanel.classList.add("active");

    });

});