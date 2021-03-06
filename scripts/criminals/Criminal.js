export const criminalComponent = (criminalObject) => {
 return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Age: ${criminalObject.age}</p>
            <p>Crime: ${criminalObject.conviction}</p>
            <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString()}</p>
            <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString()}</p>
        </div>
        <button class="criminal__button" id="associates--${criminalObject.id}">Associate Alibis</button>
        <dialog id="dialog--${criminalObject.id}" class="dialogcriminals">
           <h4>${criminalObject.name}'s ${criminalObject.known_associates.length > 1 ? "Alibis" : "Alibi"}</h4>
            ${criminalObject.known_associates.map(
                assoc =>
                `
                    <div><strong>Name</strong>: ${assoc.name}</div>
                    <div><strong>Alibi</strong>: ${assoc.alibi}</div><br>
                `
            ).join("------------------------")}
            <button id="associateCloseButton">Close</button>
        </dialog>
    </div>
    `
}