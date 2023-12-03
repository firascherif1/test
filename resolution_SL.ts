//Résolution d’un système linéaire triangulaire inferieur 
function solveLowerTriangularSystem(matrix: number[][], vector: number[]): number[] {
    const n = matrix.length;

    const solution: number[] = [];

    for (let i = 0; i < n; i++) {
        solution[i] = vector[i];
        for (let j = 0; j < i; j++) {
            solution[i] -= matrix[i][j] * solution[j];
        }
        solution[i] = solution[i] / matrix[i][i];
    }

    return solution;
}

//Résolution d’un système linéaire triangulaire superieur
function solveUpperTriangularSystem(matrix: number[][], vector: number[]): number[] {
    const n = matrix.length;

    const solution: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        solution[i] = vector[i];
        for (let j = i + 1; j < n; j++) {
            solution[i] -= matrix[i][j] * solution[j];
        }
        solution[i] = solution[i] / matrix[i][i];
    }

    return solution;
}

//Résolution d’un système linéaire triangulaire inferieur demi-bande
function solveLowerBandedTriangularSystem(matrix: number[][], vector: number[], m: number): number[] {
    const n = matrix.length;

    const solution: number[] = [];

    for (let i = 0; i < n; i++) {
        solution[i] = vector[i];
        for (let j = Math.max(0, i - m); j < i ; j++) {
            solution[i] -= matrix[i][j] * solution[j];
        }
        solution[i] = solution[i] / matrix[i][i];
    }

    return solution;
}

//Résolution d’un système linéaire triangulaire superieur demi-bande
function solveUpperBandedTriangularSystem(matrix: number[][], vector: number[], m: number): number[] {
    const n = matrix.length;

    const solution: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        solution[i] = vector[i];
        for (let j = i + 1; j < Math.min(i + m + 1, n); j++) {
            solution[i] -= matrix[i][j] * solution[j];
        }
        solution[i] = solution[i] / matrix[i][i];
    }

    return solution;
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// 
function resolDenseGaussSym(matrix: number[][], vector: number[]): number[] {
    const n = matrix.length;
    let cst:number;
    for(let k = 0; k < n-1; k++){
        for(let i = k+1; i < n; i++){
            cst= matrix[k][i]/matrix[k][k];
            for(let j = i; j < n; j++){
                matrix[i][j] -= cst*matrix[k][j];
            }
            vector[i] -= cst*vector[k];
        }
    }
    return solveUpperTriangularSystem(matrix, vector);
}


function resolBandeGauss(matrix: number[][], vector: number[],m:number): number[] {
    const n = matrix.length;
    for(let k = 0; k < n; k++){
        for(let i = k+1; i < Math.min(k+m+1,n); i++){
            matrix[i][k] /= matrix[k][k];
            for(let j =k+1; j < Math.min(k+m+1,n); j++){
                matrix[i][j] -= matrix[i][k]*matrix[k][j];
            }
            vector[i] -= matrix[i][k]*vector[k];
        }
    }
    return solveUpperTriangularSystem(matrix, vector);
}

function resolBandeGaussSym(matrix: number[][], vector: number[],m:number): number[] {
    const n = matrix.length;
    let cst:number;
    for(let k = 0; k < n; k++){
        for(let i = k+1; i < Math.min(k+m+1,n); i++){
            cst = matrix[k][i]/matrix[k][k];
            for(let j =i; j < Math.min(k+m+1,n); j++){
                matrix[i][j] -= cst*matrix[k][j];
            }
            vector[i] -= cst*vector[k];
        }
    }
    return solveUpperTriangularSystem(matrix, vector);
}

function resolDenseLUsym(matrix:number[][],vector:number[]): number[] {
    const n = matrix.length;
    const L: number[][] = new Array(n);
    const U: number[][] = new Array(n);    
    for (let k = 0; k < n; k++) {
        L[k] = new Array(n);
        U[k] = new Array(n);
        L[k][k] = 1;
        for (let j = k; j < n; j++) {
            let sum1 = 0;
            for (let i = 0; i < k; i++) {
                sum1 += L[k][i] * U[i][j];
            }
            U[k][j] = matrix[k][j] - sum1;
        }

        for (let i = k + 1; i < n; i++) {
            let sum2 = 0;
            for (let j = 0; j < k; j++) {
                sum2 += L[i][j] * U[j][k];
            }
            L[i][k] = (matrix [i][k] - sum2) / U[k][k];
        }
    }

    console.log(L)
    console.log(U)
    return solveUpperTriangularSystem(U,solveLowerTriangularSystem(L, vector));
}

function resolBandeLUsym(matrix:number[][],vector:number[],m:number): number[] {
    const n = matrix.length;
    const L: number[][] = new Array(n);
    const U: number[][] = new Array(n);    
    for (let k = 0; k < n; k++) {
        L[k] = new Array(n);
        U[k] = new Array(n);
        L[k][k] = 1;
        for (let j = Math.max(0, k - m); j < n; j++) {
            let sum1 = 0;
            for (let i = 0; i < k; i++) {
                sum1 += L[k][i] * U[i][j];
            }
            U[k][j] = matrix[k][j] - sum1;
        }

        for (let i = k + 1; i < n; i++) {
            let sum2 = 0;
            for (let j = 0; j < k; j++) {
                sum2 += L[i][j] * U[j][k];
            }
            L[i][k] = (matrix[i][k] - sum2) / U[k][k];
        }
    }

    console.log(L)
    console.log(U)
    return solveUpperBandedTriangularSystem(U,solveLowerBandedTriangularSystem(L, vector,m),m);
}


function resolBandeGaussJordan(matrix:number[][],vector:number[],m:number):number[]{
    const n = matrix.length;
    const resultVector: number[] = new Array(n);
    for(let i = 0; i < n; i++){
        resultVector[i] = vector[i];
    }
    for(let k = 0; k < n; k++)
    {
        for(let j = k + 1;j < Math.min(k + m + 1, n); j++)
        {
            matrix[k][j] /= matrix[k][k];
        }
        resultVector[k] /= matrix[k][k];
        for(let i = Math.max(0, k - m); i < k; i++)
        {
            for(let j = k+1; j < Math.min(k + m + 1, n); j++)
            {
                matrix[i][j] -= matrix[i][k]*matrix[k][j];
            }
            resultVector[i] -= matrix[i][k]*resultVector[k];
        }
        for(let i = k + 1; i < Math.min(k + m + 1, n); i++)
        {
            for(let j=k + 1;j < Math.min(k + m + 1, n);j++)
            {
                matrix[i][j] -= matrix[i][k]*matrix[k][j];
            }
            resultVector[i] -= matrix[i][k]*resultVector[k];
        }
    }
    return resultVector;
}

function resolBandeCholesky(matrix:number[][],vector:number[],m:number): number[] {
    const n=matrix.length;
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
    for (let j=0;j<n;j++)
    {
        // L[j] = new Array(n);
        // T[j] = new Array(n);
        L[j][j]=matrix[j][j];
        for (let k=0;k<=j-1; k++)
        {
            L[j][j]=L[j][j]-L[j][k]*L[j] [k];
        }
        L[j][j]=Math.sqrt(L[j][j]);
        for (let i = j + 1; i < Math.min(j + m + 1,n); i++)
        {
            L[i][j]=matrix[i][j];
            for (let k=0;k<=j-1;k++)
            {
                L[i][j]=L[i][j]-L[i][k]*L[j] [k];
            }
            L[i][j]=L[i][j]/L[j][j];
        }
    }
    T=matrice_transpose(L);
    console.log(L);
    console.log(T);
    return solveUpperBandedTriangularSystem(T,solveLowerBandedTriangularSystem(L, vector,m),m);
}
function matrice_transpose(matrix:number[][]):number[][]{
    const n=matrix.length;
    let T: number[][] = new Array(n);
    for(let j=0;j<n;j++){
        T[j] = new Array(n);
        for(let i=0;i<n;i++){
                T[j][i]=matrix[i][j];
        }
    }
    return T;
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

// Exemple d'utilisation
const lowerTriangularMatrix: number[][] = [
    [1, 0, 0],
    [2, 3, 0],
    [4, 5, 6]
];

const vector1: number[] = [3, 3, 5];

const solution1 = solveLowerBandedTriangularSystem(lowerTriangularMatrix, vector1, 1);

const upperTriangularMatrix: number[][] = [
    [1, 2, 3],
    [0, 4, 5],
    [0, 0, 6]
];

const vector2: number[] = [14, 20, 6];

const solution2 = solveUpperBandedTriangularSystem(upperTriangularMatrix, vector2, 1);


const matrixA: number[][] = [
    [1, -1, 0],
    [-1, 2, 1],
    [0, 1, 2]
];
const vectorA: number[] = [5, 10, -10];

const matrixS: number[][] = [
    [1, 2, 2],
    [2, 5, 2],
    [2, 2, 14]
];
const vectorS: number[] = [1, 3, 7];

const matrix: number[][] = [
    [-6, 1, -7],
    [9, 3, 5],
    [2, 0, 2]
];
const vector: number[] = [-14, 11, 4];

const solution = resolDenseGaussSym(matrixS, vectorS);

console.log("Solution du système linéaire :");
console.log(solution);
