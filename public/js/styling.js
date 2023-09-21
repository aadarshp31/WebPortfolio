const styleLight = {
	navlinka: "rgba(255, 255, 255, 0.7)",
	backgroundcolor: "rgb(224, 224, 224)",
	primarycolor: "#e8676b",
	hovercolor: "crimson",
	textcolor: "#3d4451",
	borderColor: "lightgrey",
	shadowColor: "#eee",
	elementBackgroundColor: "rgba(255, 255, 255)",
	footerBackgroundColor: "rgb(235, 224, 224)",
}

const styleDark = {
	navlinka: "rgba(255, 255, 255, 0.7)",
	backgroundcolor: "rgba(37, 36, 36, 1)",
	primarycolor: "#e8676b",
	hovercolor: "crimson",
	textcolor: "#fcfcfc",
	borderColor: "#222",
	shadowColor: "#222",
	elementBackgroundColor: "rgb(49, 49, 49)",
	footerBackgroundColor: "rgba(31, 31, 31)",
}

// a function to change the style of the page
const changeStyle = (style) => {
    document.documentElement.style.setProperty('--navlinka', style.navlinka);
    document.documentElement.style.setProperty('--backgroundcolor', style.backgroundcolor);
    document.documentElement.style.setProperty('--primarycolor', style.primarycolor);
    document.documentElement.style.setProperty('--hovercolor', style.hovercolor);
    document.documentElement.style.setProperty('--textcolor', style.textcolor);
    document.documentElement.style.setProperty('--borderColor', style.borderColor);
    document.documentElement.style.setProperty('--shadowColor', style.shadowColor);
    document.documentElement.style.setProperty('--elementBackgroundColor', style.elementBackgroundColor);
    document.documentElement.style.setProperty('--footerBackgroundColor', style.footerBackgroundColor);
}
