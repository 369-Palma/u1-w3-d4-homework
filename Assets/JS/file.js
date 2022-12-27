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

  const contenitoreLista = document.getElementById("lista-items");
  contenitoreLista.innerHTML += "<div class="lista-items">Task 1</div>";
  contenitoreLista.innerHTML += "<div>"Task 2"</div>";
};
