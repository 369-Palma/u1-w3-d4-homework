/* const gestisciKeyUpSuInput = (event) => {
  console.log("L'utente ha digitato:", event.key);
}; */ /* const AggiungiTask = document.getElementById("bottone");
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
/* window.onload = () => {};
const contenitoreLista = document.getElementById("lista-items");
contenitoreLista.innerHTML +=
  "<div class=`lista-items`onclick=`nuovaClasse`(event)> Task 1 </div>";
contenitoreLista.innerHTML +=
  "<div class=`lista-items`onclick=`nuovaClasse`(event)> Task 2 </div>";
const nuovaClasse = (event) => {
  console.log(event.target);
};
const nuovaTask = (event) => {
  //console.log("L'ultente ha digitato:", event.key);
  if (event.key === "Enter") {
    const valoreField = document.getElementById("Aggiungi").value;
    if (valoreField === "") {
      alert("Non lascire vuoto questo campo");
    } else {
      const newElementoLista = document.createElement("div");
      newElementoLista.classList.add("lista-items");
      contenitoreLista.innerText = valoreField;
      newElementoLista.onclick = nuovaClasse;
      document.getElementById("lista-items").appendChild(newElementoLista);
      document.getElementById("Aggiungi").value = "";
    }
  }
};
 */

const nuovaTask = (event) => {
  let li = document.createElement("li");
  let inputValue = document.getElementById("bottone");
  let testo = document.createTextNode(inputValue);
  li.appendChild(testo);
  if (inputValue === "") {
    alert("Non lasciare questo campo vuoto");
  } else {
    document.getElementById("myList").appendChild(li);
  }

  document.getElementById("bottone").value = "";

  const span = document.createElement("SPAN");
  const text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
};

const miaLista = document.getElementById("myList");
for (let i = 0; i < miaLista.length; i++) {
  let bottoncino = document.createElement("button");
  let txt = document.createTextNode("\u00D7");
  bottoncino.className = "close";
  bottoncino.appendChild(txt);
  miaLista[i].appendChild(bottoncino);
}

const close = document.getElementsByClassName("close");
for (let i = 0; i < miaLista.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

const lista = document.getElementById("myList");
lista.addEventListener(
  `click`,
  function (evento) {
    if (evento.target.tagName === "LI") {
      evento.target.classList.toggle("fatto");
    }
  },
  false
);
