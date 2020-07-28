const eventHub = document.querySelector(".container")

export const knownAssociates = () => {
  eventHub.addEventListener("click", theEvent => {
    if (theEvent.target.id.startsWith("associates--")) {
      const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
      const theDialog = document.querySelector(dialogSiblingSelector)
      theDialog.showModal()
    } else if (theEvent.target.classList.contains("button--close")) {
      const dialogElement = theEvent.target.parentNode
      dialogElement.close()
    }  
  }) 
}

