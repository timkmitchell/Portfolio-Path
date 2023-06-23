let lightTheme = localStorage.getItem("light-theme");
const lightThemeToggle = document.querySelector("#light-theme-toggle");

// check if light theme is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableLightTheme = () => {
	// 1. add the class lightTheme to the body
	document.body.classList.add("light-theme")
	// 2. update lightTheme in the localStorage
	localStorage.setItem("lightTheme", "enabled");
};

const disableeLightTheme = () => {
	// 1. add the class lightTheme to the body
	document.body.classList.remove("light-theme")
	// 2. update lightTheme in the localStorage
	localStorage.setItem("lightTheme", null);
};

lightThemeToggle.addEventListener("click", () => {
	lightTheme = localStorage.getItem("light-theme");
	if (lightTheme !== "enabled") {
		enableLightTheme();
	} else {
		disableeLightTheme();
	}
});