class PremisseConst {
  constructor(quantificateur, sujet, predicat) {
    this.quantificateur = quantificateur;
    this.sujet = sujet;
    this.predicat = predicat;
  }

  estUniverselle() {
    return this.quantificateur == "A" || this.quantificateur == "E";
  }

  estParticuliere() {
    return this.quantificateur == "I" || this.quantificateur == "O";
  }

  estAffimative() {
    return this.quantificateur == "A" || this.quantificateur == "I";
  }

  estNegative() {
    return this.quantificateur == "E" || this.quantificateur == "O";
  }
}
