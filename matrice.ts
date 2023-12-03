matrixForm: FormGroup;
  matrixA: number[][] = [];
  matrixB: number[][] = [];
  resultMatrix: number[][] = [];
  m: number;

  constructor(private formBuilder: FormBuilder) {
    this.matrixForm = this.formBuilder.group({
      rows: [ [Validators.required, Validators.min(1)]],
      columns: [ [Validators.required, Validators.min(1)]]
    });
  }
  choixCocher(libelle: string="choix") {
    // Fonction appelée lorsqu'une case à cocher est cochée ou décochée
    console.log('Choix coché ou décoché:', libelle);
    // Vous pouvez ajouter le code correspondant à chaque choix ici
    if(libelle == "generateMatrices"){
       this.generateMatrices();
    }
  }
  generateMatrices() {
    const rowsControl = this.matrixForm.get('rows');
    const columnsControl = this.matrixForm.get('columns');
  
    if (rowsControl && columnsControl && rowsControl.valid && columnsControl.valid) {
      const rows = rowsControl.value;
      const columns = columnsControl.value;
  
      this.matrixA = this.generateEmptyMatrix(rows, columns);
      this.matrixB = this.generateEmptyMatrix(rows, columns);
      this.resultMatrix = this.generateEmptyMatrix(rows, columns);
    }
  }
  
// multiplication matrice-matrice


  multiplyMatrices() {
    for (let i = 0; i < this.matrixA.length; i++) {
      for (let j = 0; j < this.matrixA[i].length; j++) {
          this.resultMatrix[i][j] = 0;
          for (let k = 0; k < this.matrixA.length; k++) {
            this.resultMatrix[i][j] += this.matrixA[i][k] * this.matrixB[k][j];
          }
      }
    }
  }

  multiplyMatriceTI_TS() {
    for (let i = 0; i < this.matrixA.length; i++) {
        for (let j = 0; j < i; j++) {
            this.resultMatrix[i][j] = 0;
            for (let k = 0; k < j; k++){
                this.resultMatrix[i][j] += this.matrixA[i][k] * this.matrixB[k][j];
            }
        }
        for(let j = i + 1; j < this.matrixA.length; j++){
            this.resultMatrix[i][j] = 0;
            for (let k = 0; k < i; k++){
                this.resultMatrix[i][j] += this.matrixA[i][k] * this.matrixB[k][j];
            }
        }
    }
}

// multiplication matrice-vecteur

multiplicationMatriceDenseVecteur() {
  for (let i = 0; i < this.matrixA.length; i++) {
      this.resultvector[i] = 0;
      for (let j = 0; j <= this.matrixA[i].length; j++) {
          this.resultVector[i] += this.matrixA[i][j] * this.vectorB[j];
      }
  }
}

multiplicationMatriceTIVecteur() {
    for (let i = 0; i < this.matrixA.length; i++) {
        this.resultvector[i] = 0;
        for (let j = 0; j <= i ; j++) {
            this.resultVector[i] += this.matrixA[i][j] * this.vectorB[j];
        }
    }
}

multiplicationMatriceTSVecteur() {
  for (let i = 0; i < this.matrixA.length; i++) {
      this.resultvector[i] = 0;
      for (let j = i; j < this.matrixA[0].length; j++) {
          this.resultVector[i] += this.matrixA[i][j] * this.vectorB[j];
      }
  }
}

multiplicationMatriceTI_DemiBandeVecteur() {
  for (let i = 0; i < this.matrixA.length; i++) {
      this.resultvector[i] = 0;
      for (let j = Math.max(0, i - this.m); j <= i ; j++) {
          this.resultVector[i] += this.matrixA[i][j] * this.vectorB[j];
      }
  }
}

multiplicationMatriceTS_DemiBandeVecteur() {
  for (let i = 0; i < this.matrixA.length; i++) {
      this.resultvector[i] = 0;
      for (let j = i; j < Math.min(i + this.m + 1, this.matrixA[0].length); j++) {
          this.resultVector[i] += this.matrixA[i][j] * this.vectorB[j];
      }
  }
}

multiplicationMatriceBandeVecteur() {
  for (let i = 0; i < this.matrixA.length; i++) {
      this.resultvector[i] = 0;
      for (let j = Math.max(0, i - this.m); j < Math.min(i + this.m + 1, this.matrixA[0].length); j++) {
          this.resultVector[i] += this.matrixA[i][j] * this.vectorB[j];
      }
  }
}

  private generateEmptyMatrix(rows: number, columns: number): number[][] {
    return Array.from({ length: rows }, () => Array(columns).fill(0));
  }