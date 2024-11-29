class Syllogisme {
  constructor(premisse1, premisse2, conclusion, moyenTerme) {
    this.premisse1 = new Premisse(
      premisse1.quantificateur,
      premisse1.sujet,
      premisse1.predicat
    );
    this.premisse2 = new Premisse(
      premisse2.quantificateur,
      premisse2.sujet,
      premisse2.predicat
    );
    this.conclusion = new Premisse(
      conclusion.quantificateur,
      conclusion.sujet,
      conclusion.predicat
    );
    this.moyenTerme = moyenTerme;
  }

  isValid() {
    return (
      !this.ruleRMT() &&
      this.ruleRLH() &&
      this.ruleRAA() &&
      this.ruleRPP() &&
      this.ruleRP() &&
      this.ruleRN() &&
      this.ruleRNN()
    );
  }

  ruleRLH() {
    const sujetConclusion = this.conclusion.sujet;
    const predicatConclusion = this.conclusion.predicat;

    return (
      (this.premisse1.contains(sujetConclusion) ||
        this.premisse2.contains(sujetConclusion)) &&
      (this.premisse1.contains(predicatConclusion) ||
        this.premisse2.contains(predicatConclusion))
    );
  }

  ruleRLH() {}

  ruleRAA() {
    return (
      this.premisse1.estAffimative() &&
      this.premisse2.estAffimative() &&
      this.conclusion.estNegative()
    );
  }

  ruleRPP() {
    return this.premisse1.estParticuliere() && this.premisse2.estParticuliere();
  }

  ruleRP() {
    return (
      this.premisse1.estParticuliere() ||
      (this.premisse2.estParticuliere() && this.conclusion.estUniverselle())
    );
  }

  ruleRN() {
    return (
      this.premisse1.estNegative() ||
      (this.premisse2.estNegative() && this.conclusion.estAffimative())
    );
  }

  ruleRNN() {
    return this.premisse1.estNegative() && this.premisse2.estNegative();
  }
}
