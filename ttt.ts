function gaussianElimination(matrix: number[][]): number[] | null {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        // Recherche de l'élément pivot
        let pivotRow = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(matrix[j][i]) > Math.abs(matrix[pivotRow][i])) {
                pivotRow = j;
            }
        }

        // Échange de lignes si nécessaire
        if (pivotRow !== i) {
            [matrix[i], matrix[pivotRow]] = [matrix[pivotRow], matrix[i]];
        }

        // Élimination de Gauss
        for (let j = i + 1; j < n; j++) {
            const factor = matrix[j][i] / matrix[i][i];
            for (let k = i; k < n + 1; k++) {
                matrix[j][k] -= factor * matrix[i][k];
            }
        }
    }

    // Rétro-substitution
    const solution: number[] = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        solution[i] = matrix[i][n] / matrix[i][i];
        for (let j = i - 1; j >= 0; j--) {
            matrix[j][n] -= matrix[j][i] * solution[i];
        }
    }
    console.log(matrix)
    return solution;
}

//Exemple d'utilisation
// const augmentedMatrix: number[][] = [
//     [2, -1, 1, 8],
//     [-3, -1, 2, -11],
//     [-2, 1, 2, -3]
// ];

// const solution = gaussianElimination(augmentedMatrix);

// if (solution !== null) {
//     console.log("Solution du système linéaire :");
//     console.log(solution);
// }



function estMatriceSymetrique(matrice: number[][]): boolean {
    const n = matrice.length;

    // Vérification de la symétrie
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (matrice[i][j] !== matrice[j][i]) {
                return false; // La matrice n'est pas symétrique
            }
        }
    }

    return true; // La matrice est symétrique
}

function estMatriceDefiniePositive(matrice: number[][]): boolean {
    const n = matrice.length;
    if(matrice[0][0] <= 0){
        return false;
    }
    for(let i = 2; i <= n; i++){
        if(determinant(matrice, i) <= 0){
            return false;
        }
    }
    return true;
}

function estMatriceDecomposable(matrice: number[][]): boolean {
    const n = matrice.length;
    if(matrice[0][0] == 0){
        return false;
    }
    for(let i = 2; i <= n; i++){
        if(determinant(matrice, i) == 0){
            return false;
        }
    }
    return true;
}

function minfon(matrice: number[][]) {
    const n = matrice.length;
    console.log(matrice[0][0]);
    for(let i = 2; i <= n; i++){
        console.log(determinant(matrice, i));
    }
}


function estMatriceDefiniePositiveee(matrice: number[][]): boolean {
    const n = matrice.length;

    // Vérification de la symétrie
    if (!estMatriceSymetrique(matrice)) {
        return false; // La matrice n'est pas définie positive si elle n'est pas symétrique
    }

    // Vérification des valeurs propres positives
    const valeursPropres = obtenirValeursPropres(matrice)/* Calcul des valeurs propres, par exemple en utilisant une bibliothèque comme 'eig' */;
    for (let i = 0; i < n; i++) {
        if (valeursPropres[i] <= 0) {
            return false; // La matrice n'est pas définie positive
        }
    }

    return true; // La matrice est symétrique et définie positive
}


function determinant(mat: number[][], n: number): number {
    if (n === 2) {
        return mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0];
    } else {
        let det = 0;
        for (let i = 0; i < n; i++) {
            const sign = i % 2 === 0 ? 1 : -1;
            const cofactor = determinant(mat.slice(1).map(row => row.slice(0, i).concat(row.slice(i + 1))),n - 1);
            det += sign * mat[0][i] * cofactor;
        }
        return det;
    }
}


import { Matrix, EigenvalueDecomposition } from 'ml-matrix';

function obtenirValeursPropres(matrice: number[][]): number[] {
    // Convertir la matrice en objet Matrix de ml-matrix
    const matriceML = new Matrix(matrice);

    // Obtenir la décomposition des valeurs propres
    const decomposition: EigenvalueDecomposition = new EigenvalueDecomposition(matriceML);

    // Obtenir les valeurs propres (réelles et imaginaires)
    const valeursPropres = decomposition.realEigenvalues;

    return valeursPropres;
}

const matrice: number[][] = [
    [1, 2, 3],
    [2, 6, 1],
    [3, 1, 1]
];

const matrixS: number[][] = [
    [1, 2, 0],
    [2, 5, 2],
    [0, 2, 14]
];

const matrixA: number[][] = [
    [1, -1, 0],
    [-1, 2, 1],
    [0, 1, 2]
];

const matrice5x5: number[][] = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

console.log(estMatriceSymetrique(matrixA));
const mineursFondamentaux = minfon(matrixA);
console.log(estMatriceDefiniePositive(matrixA));
console.log(estMatriceDecomposable(matrixA));


// Exemple d'utilisation
// const matriceSymetrique: number[][] = [
//     [1, 2, 3],
//     [2, 4, 5],
//     [3, 5, 6]
// ];

// const matriceNonSymetrique: number[][] = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(estMatriceSymetrique(matriceSymetrique)); // true
// console.log(estMatriceSymetrique(matriceNonSymetrique)); // false

// console.log(estMatriceDefiniePositive(matriceSymetrique)); // true (car elle est symétrique et les valeurs propres sont positives)
// console.log(estMatriceDefiniePositive(matriceNonSymetrique)); // false



















/*

function inverseGaussJordan(matrice: number[][]): number[][] | null {
    const n = matrice.length;

    // Créer une matrice identité
    const identite: number[][] = [];
    for (let i = 0; i < n; i++) {
        identite[i] = Array(n)
        for(let j = 0; j < n; j++){
            identite[i][j] = 0;
        }
        identite[i][i] = 1;

    }

    // Concaténer la matrice originale avec la matrice identité
    const matriceAugmentee = matrice.map((ligne, index) => [...ligne, ...identite[index]]);

    // Appliquer la méthode de Gauss-Jordan
    for (let i = 0; i < n; i++) {
        // Trouver le pivot non nul
        let pivotIndex = -1;
        for (let j = i; j < n; j++) {
            if (matriceAugmentee[j][i] !== 0) {
                pivotIndex = j;
                break;
            }
        }

        if (pivotIndex === -1) {
            console.error("La matrice n'est pas inversible.");
            return null;
        }

        // Échanger les lignes pour mettre le pivot sur la diagonale
        [matriceAugmentee[i], matriceAugmentee[pivotIndex]] = [matriceAugmentee[pivotIndex], matriceAugmentee[i]];

        // Mettre le pivot à 1
        const pivot = matriceAugmentee[i][i];
        for (let j = 0; j < 2 * n; j++) {
            matriceAugmentee[i][j] /= pivot;
        }

        // Élimination des autres lignes
        for (let k = 0; k < n; k++) {
            if (k !== i) {
                const facteur = matriceAugmentee[k][i];
                for (let j = 0; j < 2 * n; j++) {
                    matriceAugmentee[k][j] -= facteur * matriceAugmentee[i][j];
                }
            }
        }
    }

    // Extraire la partie droite (la matrice inverse)
    const inverse: number[][] = matriceAugmentee.map(ligne => ligne.slice(n));

    return inverse;
}

// Exemple d'utilisation
const matrice: number[][] = [
    [2, 1],
    [7, 4]
];
const matrix: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

const matriceInverse = inverseGaussJordan(matrix);

if (matriceInverse !== null) {
    console.log(matriceInverse);
}

*/