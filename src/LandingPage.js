const Quantificateur =[
    { title: "Tout", type: "A", body: "est" },
    { title: "Aucun",type: "E", body: "n'est" },
    { title: "Certain",type: "O", body: "sont" },
    /// j'ai vrm fait a l'aide de mes connaissance c'etait pour donner l'idee parce que y a pas encore d'application et de method
    /// faudra clairement revoir la structure de de l'array 
];
const Proposition = [];

let isOpen = false;



document.getElementById('startButton').addEventListener('click', function() {
    StartButton();
    
});






function ngForFunctionality() {
    let value = '';
    Quantificateur.forEach((post) => {
        value += `<div class="Quantificateur">  <p>${post.title} </p></div>`;
    });
 
    document.getElementById("Quantificateur-Avaible").innerHTML= value;
};
function AddProposition() {
    Subject = document.getElementById("Sujet").value
    Predicat = document.getElementById("Predicat").value
    console.log(this.Subject, this.Predicat)
    if ((this.Subject || this.Predicat) == ""){
        console.error();
    }else {

    Proposition.push({ Subject: this.Subject, Predicat: this.Predicat })
    console.log(Proposition)
    displayProposition() 

    
   
}};
function  verfyConclusion(i) {
    if(i % 3 == 0) {
        return "Conclusion"
    }
    else return `Premisse ${i}`
}
function displayProposition() {
 let value = '';
    i = 1
    Proposition.forEach((post) => {
        
        value += `
        <div class="Proposition1">
        <p id="Title-Prop">
            ${this.verfyConclusion(i++)}
        </p>
        <p id="Sentence-Prop"><i>Tout</i> <b>${post.Subject}</b> <i>est</i> <b>${post.Predicat}</b></p>
        </div>`;
    });
 
    document.getElementById("Proposition-container-pointer").innerHTML = value;
}

function StartButton() {
    console.log("beggin Start Button");

    BringUpInputs();

    
};

function BringUpInputs() {
    document.getElementById("button-container-pointer").style.bottom = "30px";
    document.getElementById("header-pointer").style.marginTop = "-15px";
    document.getElementById("right-side-pointer").style.opacity="0"
    document.getElementById("left-side-pointer").style.opacity="0"
    document.body.style.background = "linear-gradient(231.16deg, rgb(224 77 51 / 99%) 40.93%, rgb(236 195 165 / 82%) 100%)"
    setTimeout(() => {
        document.getElementById("right-side-pointer").style.display="none"
        document.getElementById("left-side-pointer").style.display="none"
        document.getElementById("Proposition-container-pointer").style.display="flex"
        document.getElementById("Proposition-container-pointer").style.zIndex = 0
       
        setTimeout(()=> {
            document.getElementById("Proposition-container-pointer").style.opacity="1"
        },100)
    }, 300)
   

}
function OpenAlert() {
    if(isOpen == false){
        document.getElementById("Quantificateur-Values-Box-pointer").style.bottom = "50px";
        document.getElementById("Quantificateur-Values-Box-pointer").style.opacity = "1"; 
        document.getElementById("arrow-up-pointer").style.transform = "rotate(0deg)" 
        
        isOpen = true
    } else if(isOpen == true) {
            document.getElementById("Quantificateur-Values-Box-pointer").style.bottom = "-100px";
            document.getElementById("Quantificateur-Values-Box-pointer").style.opacity = "0";     
            document.getElementById("arrow-up-pointer").style.transform = "rotate(180deg)" 

            isOpen = false
        }
    
    console.log(isOpen)
    
}

ngForFunctionality();


                             
