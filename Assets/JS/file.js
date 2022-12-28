/* const gestisciKeyUpSuInput = (event) => {
  console.log("L'utente ha digitato:", event.key);
}; */
window.onload = () => {
  /* const AggiungiTask = document.getElementById("bottone");
  AggiungiTask.addEventListener("onclick", (event) => {
    const nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("contenitore");
    nuovoDiv.innerHTML = valore.InputField;
    document.getElementsByClassName("contenitore").appendChild(nuovoDiv);
    console.log(AggiungiTask);
    nuovoDiv.onclick = AggiungiTask;
  });
};
 */
};
const contenitoreLista = document.getElementById("lista-items");
contenitoreLista.innerHTML += "<div class=`lista-items`> Task 1 </div>";
contenitoreLista.innerHTML += "<div class=`lista-items`> Task 2 </div>";

const tastoEnter = (event) => {
  //console.log("L'ultente ha digitato:", event.key);
  if (event.key === "Enter") {
    const valoreField = document.getElementById("Aggiungi").value;
    if (valoreField === "") {
      alert("Non lascire vuoto questo campo");
    } else {
      const newElementoLista = document.createElement("div");
      newElementoLista.classList.add("lista-items");
      contenitoreLista.innerText = valoreField;
      document.getElementById("lista-items").appendChild(newElementoLista);
    }
  }
};
