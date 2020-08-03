const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", theEvent => {
  if (theEvent.target.id.startsWith("associates--")) {
    const [prefix, criminalId] = theEvent.target.id.split("--")
    const theDialog = document.querySelector(`#dialog--${criminalId}`)
    theDialog.showModal()
  } else if (theEvent.target.classList.contains("button--close")) {
    const dialogElement = theEvent.target.parentNode
    dialogElement.close()
  }  
}) 

