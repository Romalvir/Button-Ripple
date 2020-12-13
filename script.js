//for ripple affect refernce the DOM
const buttons = document.querySelectorAll(".ripple")
//use a method for each button
buttons.forEach( button => {
	//add an event listener for the buttons
	button.addEventListener("click", function (e) {
		// position in the window space
		const x = e.clientX
		const y = e.clientY
		
		//but we need position in the button 
		const buttonTop = e.target.offsetTop
		const buttonLeft = e.target.offsetLeft

		const xInside = x - buttonLeft
		const yInside = y - buttonTop

		//DOM
		//create the element
		const circle = document.createElement("span")
		//add the class to space
		circle.classList.add("circle")
		//
		circle.style.top = yInside + "px"
		circle.style.Left = xInside + "px"

		//append the circle to the HTML

		this.appendChild(circle)

		setTimeout( () => circle.remove(),500)
	})
})