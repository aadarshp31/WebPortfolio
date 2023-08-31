const styleLight = {
	navlinka: "rgba(255, 255, 255, 0.7)",
	backgroundcolor: "#fff",
	primarycolor: "#e8676b",
	hovercolor: "crimson",
	textcolor: "#3d4451",
	shadowColor: "#eee"
}

const styleDark = {
	navlinka: "rgba(255, 255, 255, 0.7)",
	backgroundcolor: "rgb(47, 46, 46)",
	primarycolor: "lightcoral",
	hovercolor: "crimson",
	textcolor: "#efe8e8",
	borderColor: "rgba(0, 0, 0, 0.8)",
	shadowColor: "#333",
	elementBackgroundColor: "rgba(37, 36, 36, 0.9)",
	footerBackgroundColor: "rgba(0,0,0, 0.9)"
}

// a function to change the style of the page
const changeStyle = (style) => {
    document.documentElement.style.setProperty('--navlinka', style.navlinka)
    document.documentElement.style.setProperty('--backgroundcolor', style.backgroundcolor)
    document.documentElement.style.setProperty('--primarycolor', style.primarycolor)
    document.documentElement.style.setProperty('--hovercolor', style.hovercolor)
    document.documentElement.style.setProperty('--textcolor', style.textcolor)
}
