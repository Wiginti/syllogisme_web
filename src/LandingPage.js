document.getElementById('startButton').addEventListener('click', function() {
    alert('Bienvenue dans Syllogis !');
});

const Quantificateur =[
    { tittle: "Tout", type: "A", body: "est" },
    { tittle: "Aucun",type: "E", body: "n'est" },
    { tittle: "Certain",type: "O", body: "sont" },
    /// j'ai vrm fait a l'aide de mes connaissance c'etait pour donner l'idee parce que y a pas encore d'application et de method
    /// faudra clairement revoir la structure de de l'array 
];

function ngForFunctionality() {
    let value = '';
    Quantificateur.forEach((post) => {
        value += `<div class="Quantificateur">  <p>${post.tittle} </p></div>`;
    });
    document.getElementById("Quantificateur-Avaible").innerHTML= value;
};

ngForFunctionality();


                             
