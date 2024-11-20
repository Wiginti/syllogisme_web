const Quantificateur = [
  { title: "Tout les", body: "sont", type: "A" },
  { title: "Aucun", body: "n'est", type: "E" },
  { title: "Certain", body: "sont", type: "I" },
  { title: "Certain", body: "ne sont pas", type: "O" },
  /// j'ai vrm fait a l'aide de mes connaissance c'etait pour donner l'idee parce que y a pas encore d'application et de method
  /// faudra clairement revoir la structure de de l'array
];
const Premisse = [];

let isOpen = false;

function StartButton() {
  console.log("beggin Start Button");

  BringUpInputs();
}

function ngForFunctionality() {
  let value = "";
  Quantificateur.forEach((post) => {
    value += `<div class="Quantificateur">  <p>${post.title} </p></div>`;
  });

  document.getElementById("Quantificateur-Avaible").innerHTML = value;
}

function AddPremisse() {
  Subject = document.getElementById("Sujet").value;
  Predicat = document.getElementById("Predicat").value;
  console.log(this.Subject, this.Predicat);
  if (Subject === ""  || Predicat === "") {
    console.error("ERROR: Null argument(s)");
  } else {
    
    Premisse.push({ Subject: this.Subject, Predicat: this.Predicat });
    console.log(Premisse)
    displayPremisse();
  }
}

function isConclusion(i) {
    
  if (i % 3 == 0) {
    return "Conclusion";
    
  }
  else if ((i - 2) % 3 == 0) {
 
    SearchForMiddleTerm(i);
    return `Premisse ${i}`;
  } 
  else return `Premisse ${i}`;
  
 
}

function displayPremisse() {
  let value = "";
  i = 1;
  Premisse.forEach((post) => {
    value += `
        <div class="Premisse1">
        <p id="Title-Prop">
            ${this.isConclusion(i++)}
        </p>
        <p id="Sentence-Prop"><i>Tout</i> <b>${
          post.Subject
        }</b> <i>est</i> <b>${post.Predicat}</b></p>
        </div>`;
  });

  document.getElementById("Premisse-container-pointer").innerHTML = value;
}

function SearchForMiddleTerm(i) {
    var value = i - 1;
    console.log(`Checking Premisse at index ${value} and ${value - 1}`);
    console.log(Premisse[value].Subject, Premisse[value - 1].Subject);
    
    if ((Premisse[value].Subject === Premisse[value - 1].Subject) || (Premisse[value].Predicat === Premisse[value - 1].Predicat)) {
      console.log("Le moyen terme est :", Premisse[value].Subject);
    } else {
      console.log("No middle term found for", i);
    }
    return;
  }

// Fonctions d'animation

function BringUpInputs() {
  document.getElementById("button-container-pointer").style.bottom = "30px";
  document.getElementById("header-pointer").style.marginTop = "-15px";
  document.getElementById("right-side-pointer").style.opacity = "0";
  document.getElementById("left-side-pointer").style.opacity = "0";
  document.body.style.background =
    "linear-gradient(231.16deg, rgb(224 77 51 / 99%) 40.93%, rgb(236 195 165 / 82%) 100%)";
  setTimeout(() => {
    document.getElementById("right-side-pointer").style.display = "none";
    document.getElementById("left-side-pointer").style.display = "none";
    document.getElementById("Premisse-container-pointer").style.display =
      "flex";
    document.getElementById("Premisse-container-pointer").style.zIndex = 0;

    setTimeout(() => {
      document.getElementById("Premisse-container-pointer").style.opacity = "1";
    }, 100);
  }, 300);
}

function OpenAlert() {
  if (isOpen == false) {
    document.getElementById("Quantificateur-Values-Box-pointer").style.bottom =
      "50px";
    document.getElementById("Quantificateur-Values-Box-pointer").style.opacity =
      "1";
    document.getElementById("arrow-up-pointer").style.transform =
      "rotate(0deg)";

    isOpen = true;
  } else if (isOpen == true) {
    document.getElementById("Quantificateur-Values-Box-pointer").style.bottom =
      "-100px";
    document.getElementById("Quantificateur-Values-Box-pointer").style.opacity =
      "0";
    document.getElementById("arrow-up-pointer").style.transform =
      "rotate(180deg)";

    isOpen = false;
  }

  console.log(isOpen);
}

ngForFunctionality();
