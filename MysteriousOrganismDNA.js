// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let indexMutate = Math.floor(Math.random(this.dna)*15);
      console.log(indexMutate);
      const baseToMutate = this.dna[indexMutate];
      console.log(baseToMutate);
      
      let newBase = returnRandBase();
      while(newBase === baseToMutate) {
        newBase = returnRandBase();
      }
      console.log(newBase);

      this.dna[indexMutate] = newBase;
      return this.dna;
    },
    compareDNA (pAequorObject) {
      let equalMatches = 0
      for(let i = 0; i < pAequorObject.dna.length; i++) {
       if (pAequorObject.dna[i] === this.dna[i]) {
          equalMatches++
       }
      }
        const percentageMatches = (equalMatches/pAequorObject.dna.length)*100

      console.log (`specimen #${this.specimenNum} and specimen #${pAequorObject.specimenNum} have ${Math.floor(percentageMatches)}% DNA in common`);
    },
    willLikelySurvive() {
      let equalMatches = 0
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          equalMatches ++
        }
      }
      
      const percentageSurvive = (equalMatches/this.dna.length)*100
      return percentageSurvive > 60
    },
    complementStrand () {
      const complementaryDNA = [];
      for(let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === 'A') {
          complementaryDNA.push('T')
        } else if (this.dna[i] === 'T') {
          complementaryDNA.push('A') 
        } else if(this.dna[i] === 'G') {
           complementaryDNA.push('C')
        } else if(this.dna[i] === 'C'){
          complementaryDNA.push('G')
        }
      }
        return complementaryDNA;
      }
    }
  }


const toStudy = [] ;
let specimenID = 0
while(toStudy.length < 30) {
  const pAequorDNA = pAequorFactory(specimenID, mockUpStrand());
  specimenID ++
 if (pAequorDNA.willLikelySurvive()) {
   toStudy.push(pAequorDNA);
 }

}

console.log(toStudy);

//To compare dna and complementStrand dna
console.log(toStudy[1].dna );
console.log(toStudy[1].complementStrand());

/*const pAequorDNA1 = pAequorFactory(1, mockUpStrand());

console.log(pAequorDNA1.dna); //para aceder a propriedades de objetos

const pAequorDNA2 = pAequorFactory(2, mockUpStrand());

console.log ();
console.log (pAequorDNA2.dna);

pAequorDNA1.compareDNA(pAequorDNA2);

console.log(pAequorDNA1.willLikelySurvive());


// pAequorDNA.mutate()

// console.log(pAequorDNA.dna);
*/
