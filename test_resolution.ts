function resolDenseGauss(matrixA: number[][], vectorB: number[]): number[] {
    const n = matrixA.length;
    for(let k = 0; k < n-1; k++){
        for(let i = k+1; i < n; i++){
            matrixA[i][k] /= matrixA[k][k];
            for(let j = k+1; j < n; j++){
                matrixA[i][j] -= matrixA[i][k] * matrixA[k][j];
            }
            vectorB[i] -= matrixA[i][k]*vectorB[k];
        }
    }
    console.log(matrixA);
    return solveUpperTriangularSystem(matrixA, vectorB);
}


function resolDenseLU(matrixA:number[][],vectorB:number[]): number[] {
    const n = matrixA.length;
    const L: number[][] = new Array(n);
    const U: number[][] = new Array(n);    
    for (let i = 0; i < n; i++){
        L[i] = new Array(n);
        U[i] = new Array(n);
        L[i][i] = 1;
        for (let j = 0; j <= i - 1 ; j++){
            L[i][j] = matrixA[i][j];
            for (let k = 0; k < j ; k++)
            {
                L[i][j] = L[i][j] - L[i][k] * U[k][j];
            }
            L[i][j] = L[i][j] / U[j][j];
        }
        for (let j = i; j < n; j++)
        {
        
            U[i][j] = matrixA[i][j];
            for (let k = 0; k < i; k++)
            {
                U[i][j] = U[i][j] - L[i][k] * U[k][j];
            }
        }   
    }
    console.log(L)
    console.log(U)
    return solveUpperTriangularSystem(U,solveLowerTriangularSystem(L, vectorB));
}


function resolDenseGaussJordan(matrixA:number[][],vectorB:number[]):number[]{
    const n = matrixA.length;
    const resultvectorB: number[] = new Array(n);
    for(let i = 0; i < n; i++){
        resultvectorB[i] = vectorB[i];
    }
    for(let k = 0; k < n; k++)
    {
        for(let j = k + 1;j < n; j++)
        {
            matrixA[k][j] /= matrixA[k][k];
        }
        resultvectorB[k] /= matrixA[k][k];
        for(let i = 0; i < k; i++)
        {
            for(let j = k + 1; j < n; j++)
            {
                matrixA[i][j] -= matrixA[i][k] * matrixA[k][j];
            }
            resultvectorB[i] -= matrixA[i][k] * resultvectorB[k];
        }
        for(let i = k + 1; i < n; i++)
        {
            for(let j = k + 1; j < n; j++)
            {
                matrixA[i][j] -= matrixA[i][k] * matrixA[k][j];
            }
            resultvectorB[i] -= matrixA[i][k] * resultvectorB[k];
        }
    }
    console.log(matrixA)
    return resultvectorB;
}



function resolDenseCholesky(matrixA:number[][], vectorB:number[]): number[] {
    const n = matrixA.length;
    let L: number[][] = new Array(n);
    let T: number[][] = new Array(n);
    for(let i = 0; i < n; i++ ){
        L[i] = new Array(n);
        T[i] = new Array(n);
        for(let j = 0; j < n; j++){
            L[i][j] = 0;
            T[i][j] = 0;
        }
    }
    for (let j = 0; j < n; j++)
    {
        // L[j] = new Array(n);
        // T[j] = new Array(n);
        L[j][j] = matrixA[j][j];
        for (let k = 0; k <= j - 1; k++)
        {
            L[j][j] = L[j][j] - L[j][k] * L[j] [k];
        }
        L[j][j] = Math.sqrt(L[j][j]);
        for (let i = j + 1; i < n; i++)
        {
            L[i][j] = matrixA[i][j];
            for (let k = 0;k <= j - 1; k++)
            {
                L[i][j] = L[i][j] - L[i][k] * L[j] [k];
            }
            L[i][j] = L[i][j] / L[j][j];
        }
    }
    T = matrice_transpose(L);
    console.log(L);
    console.log(T);
    return solveUpperTriangularSystem(T,solveLowerTriangularSystem(L, vectorB));
}

function matrice_transpose(matrixA:number[][]):number[][]{
    const n = matrixA.length;
    let T: number[][] = new Array(n);
    for(let j = 0; j < n; j++){
        T[j] = new Array(n);
        for(let i = 0; i < n; i++){
                T[j][i] = matrixA[i][j];
        }
    }
    return T;
}

//resolution par Méthode d’élimination de Gauss avec pivotage partiel
function resolDenseGauss_AvecPP(matrixA: number[][], vectorB:number[]): number[] {
    const n = matrixA.length;

    //ajouter le vecteur a la matrice
    for (let i = 0; i < n; i++) {
        matrixA[i].push(vectorB[i]);
    }
    for (let i = 0; i < n; i++) {
        // Recherche de l'élément pivot
        let pivotRow = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(matrixA[j][i]) > Math.abs(matrixA[pivotRow][i])) {
                pivotRow = j;
            }
        }

        // Échange de lignes si nécessaire
        if (pivotRow !== i) {
            [matrixA[i], matrixA[pivotRow]] = [matrixA[pivotRow], matrixA[i]];
        }

        // Élimination de Gauss
        for (let j = i + 1; j < n; j++) {
            const factor = matrixA[j][i] / matrixA[i][i];
            for (let k = i; k < n + 1; k++) {
                matrixA[j][k] -= factor * matrixA[i][k];
            }
        }
    }
    //vecteur apres les changement
    for (let i = 0; i < n; i++) {
        vectorB[i] = matrixA[i][n];
    }
    //résolution
    const resultVector = solveUpperTriangularSystem(matrixA, vectorB);
    console.log(matrixA)
    return resultVector;
}


//Résolution d’un système linéaire triangulaire inferieur 
function solveLowerTriangularSystem(matrixA: number[][], vectorB: number[]): number[] {
    const n = matrixA.length;

    const resultVector: number[] = [];

    for (let i = 0; i < n; i++) {
        resultVector[i] = vectorB[i];
        for (let j = 0; j < i; j++) {
            resultVector[i] -= matrixA[i][j] * resultVector[j];
        }
        resultVector[i] = resultVector[i] / matrixA[i][i];
    }

    return resultVector;
}

//Résolution d’un système linéaire triangulaire superieur
function solveUpperTriangularSystem(matrixA: number[][], vectorB: number[]): number[] {
    const n = matrixA.length;

    const resultVector: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        resultVector[i] = vectorB[i];
        for (let j = i + 1; j < n; j++) {
            resultVector[i] -= matrixA[i][j] * resultVector[j];
        }
        resultVector[i] = resultVector[i] / matrixA[i][i];
    }

    return resultVector;
}

//Résolution d’un système linéaire triangulaire inferieur demi-bande
function solveLowerBandedTriangularSystem(matrixA: number[][], vectorB: number[], m: number): number[] {
    const n = matrixA.length;

    const resultVector: number[] = [];

    for (let i = 0; i < n; i++) {
        resultVector[i] = vectorB[i];
        for (let j = Math.max(0, i - m); j < i ; j++) {
            resultVector[i] -= matrixA[i][j] * resultVector[j];
        }
        resultVector[i] = resultVector[i] / matrixA[i][i];
    }

    return resultVector;
}

//Résolution d’un système linéaire triangulaire superieur demi-bande
function solveUpperBandedTriangularSystem(matrixA: number[][], vectorB: number[], m: number): number[] {
    const n = matrixA.length;

    const resultVector: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        resultVector[i] = vectorB[i];
        for (let j = i + 1; j < Math.min(i + m + 1, n); j++) {
            resultVector[i] -= matrixA[i][j] * resultVector[j];
        }
        resultVector[i] = resultVector[i] / matrixA[i][i];
    }

    return resultVector;
}



//Méthodes itérative 

    //methode de jocobi
    function jacobi(matrixA: number[][], vectorB: number[], max_iter: number = 1000, epsilon: number = 1e-6): number[]{
        const n = matrixA.length;
        let resultVector: number[] = [];
        let x: number[] = [];
        let max = 0;
        let k = 0;
        for(let i = 0; i < n; i++){
            resultVector[i] = 0;
        }
        while(true){
            for(let i = 0; i < n; i++){
                x[i] = resultVector[i];
            }
            for(let i = 0; i < n; i++){
                let s = vectorB[i];
                for(let j = 0; j < i; j++){
                    s = s - matrixA[i][j] * x[j];
                }
                for(let j = i + 1; j < n; j++){
                        s = s - matrixA[i][j] * x[j];
                }
                resultVector[i] = s / matrixA[i][i];
                if(max < Math.abs(x[i] - resultVector[i])){
                    max = Math.abs(x[i] - resultVector[i]);
                }
                if(max < epsilon || k == max_iter){
                    return resultVector;
                }
                k++
            }
        }
    }

    //methode de Gauss-Seidel
    function gauss_seidel(matrixA: number[][], vectorB: number[], max_iter: number = 1000, epsilon: number = 1e-6): number[]{
        const n = matrixA.length;
        let resultVector: number[] = [];
        let max = 0;
        let k = 0;
        for(let i = 0; i < n; i++){
            resultVector[i] = 0;
        }
        while(true){
            for(let i = 0; i < n; i++){
                let s = 0;
                for(let j = 0; j < i; j++){
                    s = s + matrixA[i][j] * resultVector[j];
                }
                for(let j = i + 1; j < n; j++){
                    s = s + matrixA[i][j] * resultVector[j];
                }
                s = (vectorB[i] - s) / matrixA[i][i];
                if(max < Math.abs(s - resultVector[i])){
                    max = Math.abs(s - resultVector[i]);
                }
                resultVector[i] = s;
            }
            if(max < epsilon || k == max_iter){
                return resultVector;
            }
            k++;
        } 
    }

// Exemple d'utilisation
const lowerTriangularmatrixA: number[][] = [
    [1, 0, 0],
    [2, 3, 0],
    [4, 5, 6]
];

const vector1: number[] = [3, 3, 5];

const solution1 = solveLowerTriangularSystem(lowerTriangularmatrixA, vector1);

const upperTriangularmatrixA: number[][] = [
    [1, 2, 3],
    [0, 4, 5],
    [0, 0, 6]
];

const vector2: number[] = [14, 20, 6];

const solution2 = solveUpperBandedTriangularSystem(upperTriangularmatrixA, vector2, 1);

const matrix: number[][] = [
    [-6, 1, -7],
    [9, 3, 5],
    [2, 0, 2]
];
const vector: number[] = [-14, 11, 4];

const matrixA: number[][] = [
    [1, -1, 2],
    [3, 2, 1],
    [2, -3, -2]
];
const vectorA: number[] = [5, 10, -10];

const matrixS: number[][] = [
    [1, 2, 2],
    [2, 5, 7],
    [2, 7, 14]
];
const vectorS: number[] = [1, 3, 7];

const solution = gauss_seidel(matrixA, vectorA);

console.log("Solution du système linéaire :");
console.log(solution);
//console.log(matrixA);
//console.log(vectorA);
