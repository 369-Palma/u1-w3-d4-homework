/* const gestisciKeyUpSuInput = (event) => {
  console.log("L'utente ha digitato:", event.key);
}; */

const AggiungiTask = document.getElementById("bottone");
AggiungiTask.addEventListener("onclick", (event) => {
  const nuovoDiv = document.createElement("div");
  nuovoDiv.classList.add("contenitore");
  nuovoDiv.innerHTML = valore.InputField;
  document.getElementsByClassName("contenitore").appendChild(nuovoDiv);
  console.log(AggiungiTask);
  nuovoDiv.onclick = AggiungiTask;
});
const eliminaSelezionati = () => {
  const list = document.get;
};
