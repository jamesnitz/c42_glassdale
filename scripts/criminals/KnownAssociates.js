const eventHub = document.querySelector(".container")

export const knownAssociates = () => {
  eventHub.addEventListener("click", theEvent => {
    if (theEvent.target.id.startsWith("associates--")) {
      const [label, eventId] = theEvent.target.id.split("--")
      const theDialog = document.querySelector(`#dialog--${eventId}`)
      theDialog.showModal()
    } else if (theEvent.target.classList.contains("button--close")) {
      const dialogElement = theEvent.target.parentNode
      dialogElement.close()
    }  
  }) 
}

