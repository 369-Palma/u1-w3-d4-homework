/* const gestisciKeyUpSuInput = (event) => {
  console.log("L'utente ha digitato:", event.key);
}; */

const AggiungiTask = document.getElementById("bottone");
AggiungiTask.addEventListener("onclick", function () {
  const nuovoDiv = document.createElement("div");
  nuovoDiv.classList.add("Cornice");
  nuovoDiv.innerHTML = valore.InputField;
  document.getElementById("Cornice").appendChild(nuovoDiv);
  console.log(AggiungiTask);
});
