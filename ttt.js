"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gaussianElimination(matrix) {
    var _a;
    var n = matrix.length;
    for (var i = 0; i < n; i++) {
        // Recherche de l'élément pivot
        var pivotRow = i;
        for (var j = i + 1; j < n; j++) {
            if (Math.abs(matrix[j][i]) > Math.abs(matrix[pivotRow][i])) {
                pivotRow = j;
            }
        }
        // Échange de lignes si nécessaire
        if (pivotRow !== i) {
            _a = [matrix[pivotRow], matrix[i]], matrix[i] = _a[0], matrix[pivotRow] = _a[1];
        }
        // Élimination de Gauss
        for (var j = i + 1; j < n; j++) {
            var factor = matrix[j][i] / matrix[i][i];
            for (var k = i; k < n + 1; k++) {
                matrix[j][k] -= factor * matrix[i][k];
            }
        }
    }
    // Rétro-substitution
    var solution = new Array(n);
    for (var i = n - 1; i >= 0; i--) {
        solution[i] = matrix[i][n] / matrix[i][i];
        for (var j = i - 1; j >= 0; j--) {
            matrix[j][n] -= matrix[j][i] * solution[i];
        }
    }
    console.log(matrix);
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
function estMatriceSymetrique(matrice) {
    var n = matrice.length;
    // Vérification de la symétrie
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if (matrice[i][j] !== matrice[j][i]) {
                return false; // La matrice n'est pas symétrique
            }
        }
    }
    return true; // La matrice est symétrique
}
function estMatriceDefiniePositive(matrice) {
    var n = matrice.length;
    if (matrice[0][0] <= 0) {
        return false;
    }
    for (var i = 2; i <= n; i++) {
        if (determinant(matrice, i) <= 0) {
            return false;
        }
    }
    return true;
}
function estMatriceDecomposable(matrice) {
    var n = matrice.length;
    if (matrice[0][0] == 0) {
        return false;
    }
    for (var i = 2; i <= n; i++) {
        if (determinant(matrice, i) == 0) {
            return false;
        }
    }
    return true;
}
function minfon(matrice) {
    var n = matrice.length;
    console.log(matrice[0][0]);
    for (var i = 2; i <= n; i++) {
        console.log(determinant(matrice, i));
    }
}
function estMatriceDefiniePositiveee(matrice) {
    var n = matrice.length;
    // Vérification de la symétrie
    if (!estMatriceSymetrique(matrice)) {
        return false; // La matrice n'est pas définie positive si elle n'est pas symétrique
    }
    // Vérification des valeurs propres positives
    var valeursPropres = obtenirValeursPropres(matrice) /* Calcul des valeurs propres, par exemple en utilisant une bibliothèque comme 'eig' */;
    for (var i = 0; i < n; i++) {
        if (valeursPropres[i] <= 0) {
            return false; // La matrice n'est pas définie positive
        }
    }
    return true; // La matrice est symétrique et définie positive
}
function determinant(mat, n) {
    if (n === 2) {
        return mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0];
    }
    else {
        var det = 0;
        var _loop_1 = function (i) {
            var sign = i % 2 === 0 ? 1 : -1;
            var cofactor = determinant(mat.slice(1).map(function (row) { return row.slice(0, i).concat(row.slice(i + 1)); }), n - 1);
            det += sign * mat[0][i] * cofactor;
        };
        for (var i = 0; i < n; i++) {
            _loop_1(i);
        }
        return det;
    }
}
var ml_matrix_1 = require("ml-matrix");
function obtenirValeursPropres(matrice) {
    // Convertir la matrice en objet Matrix de ml-matrix
    var matriceML = new ml_matrix_1.Matrix(matrice);
    // Obtenir la décomposition des valeurs propres
    var decomposition = new ml_matrix_1.EigenvalueDecomposition(matriceML);
    // Obtenir les valeurs propres (réelles et imaginaires)
    var valeursPropres = decomposition.realEigenvalues;
    return valeursPropres;
}
var matrice = [
    [1, 2, 3],
    [2, 6, 1],
    [3, 1, 1]
];
var matrixS = [
    [1, 2, 0],
    [2, 5, 2],
    [0, 2, 14]
];
var matrixA = [
    [1, -1, 0],
    [-1, 2, 1],
    [0, 1, 2]
];
var matrice5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
console.log(estMatriceSymetrique(matrixA));
var mineursFondamentaux = minfon(matrixA);
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
