let inputText = document.getElementById('inputText')
let outputText = document.getElementById('outputText')
let tempOutput = document.getElementById('tempOutput')
let selectedArea = window.getSelection()

function makeBold () {
	/* selectedArea.style.fontWeight = "bold" */
  tempOutput.textContent = selectedArea
}

function convert () {
	inputText.style.fontWeight = "bold"
  outputText.textContent = inputText.textContent
}