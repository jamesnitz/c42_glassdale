export const witnessComponent = (witnessObject) => {
 return `
    <div class="witness">
        <h4>${witnessObject.name}</h4>
        <div class="witness__details">
            <p>Statement: ${witnessObject.statements}</p>
        </div>
    </div>
  `

}