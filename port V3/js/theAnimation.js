window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");

	loader.classList.add("loader-hidden");

	loader.addEventListener("transitioned", () => {
		document.body.remove("loader");
	})
})