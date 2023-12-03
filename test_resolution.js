function resolDenseGauss(matrixA, vectorB) {
    var n = matrixA.length;
    for (var k = 0; k < n - 1; k++) {
        for (var i = k + 1; i < n; i++) {
            matrixA[i][k] /= matrixA[k][k];
            for (var j = k + 1; j < n; j++) {
                matrixA[i][j] -= matrixA[i][k] * matrixA[k][j];
            }
            vectorB[i] -= matrixA[i][k] * vectorB[k];
        }
    }
    console.log(matrixA);
    return solveUpperTriangularSystem(matrixA, vectorB);
}
function resolDenseLU(matrixA, vectorB) {
    var n = matrixA.length;
    var L = new Array(n);
    var U = new Array(n);
    for (var i = 0; i < n; i++) {
        L[i] = new Array(n);
        U[i] = new Array(n);
        L[i][i] = 1;
        for (var j = 0; j <= i - 1; j++) {
            L[i][j] = matrixA[i][j];
            for (var k = 0; k < j; k++) {
                L[i][j] = L[i][j] - L[i][k] * U[k][j];
            }
            L[i][j] = L[i][j] / U[j][j];
        }
        for (var j = i; j < n; j++) {
            U[i][j] = matrixA[i][j];
            for (var k = 0; k < i; k++) {
                U[i][j] = U[i][j] - L[i][k] * U[k][j];
            }
        }
    }
    console.log(L);
    console.log(U);
    return solveUpperTriangularSystem(U, solveLowerTriangularSystem(L, vectorB));
}
function resolDenseGaussJordan(matrixA, vectorB) {
    var n = matrixA.length;
    var resultvectorB = new Array(n);
    for (var i = 0; i < n; i++) {
        resultvectorB[i] = vectorB[i];
    }
    for (var k = 0; k < n; k++) {
        for (var j = k + 1; j < n; j++) {
            matrixA[k][j] /= matrixA[k][k];
        }
        resultvectorB[k] /= matrixA[k][k];
        for (var i = 0; i < k; i++) {
            for (var j = k + 1; j < n; j++) {
                matrixA[i][j] -= matrixA[i][k] * matrixA[k][j];
            }
            resultvectorB[i] -= matrixA[i][k] * resultvectorB[k];
        }
        for (var i = k + 1; i < n; i++) {
            for (var j = k + 1; j < n; j++) {
                matrixA[i][j] -= matrixA[i][k] * matrixA[k][j];
            }
            resultvectorB[i] -= matrixA[i][k] * resultvectorB[k];
        }
    }
    console.log(matrixA);
    return resultvectorB;
}
function resolDenseCholesky(matrixA, vectorB) {
    var n = matrixA.length;
    var L = new Array(n);
    var T = new Array(n);
    for (var i = 0; i < n; i++) {
        L[i] = new Array(n);
        T[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            L[i][j] = 0;
            T[i][j] = 0;
        }
    }
    for (var j = 0; j < n; j++) {
        // L[j] = new Array(n);
        // T[j] = new Array(n);
        L[j][j] = matrixA[j][j];
        for (var k = 0; k <= j - 1; k++) {
            L[j][j] = L[j][j] - L[j][k] * L[j][k];
        }
        L[j][j] = Math.sqrt(L[j][j]);
        for (var i = j + 1; i < n; i++) {
            L[i][j] = matrixA[i][j];
            for (var k = 0; k <= j - 1; k++) {
                L[i][j] = L[i][j] - L[i][k] * L[j][k];
            }
            L[i][j] = L[i][j] / L[j][j];
        }
    }
    T = matrice_transpose(L);
    console.log(L);
    console.log(T);
    return solveUpperTriangularSystem(T, solveLowerTriangularSystem(L, vectorB));
}
function matrice_transpose(matrixA) {
    var n = matrixA.length;
    var T = new Array(n);
    for (var j = 0; j < n; j++) {
        T[j] = new Array(n);
        for (var i = 0; i < n; i++) {
            T[j][i] = matrixA[i][j];
        }
    }
    return T;
}
//resolution par Méthode d’élimination de Gauss avec pivotage partiel
function resolDenseGauss_AvecPP(matrixA, vectorB) {
    var _a;
    var n = matrixA.length;
    //ajouter le vecteur a la matrice
    for (var i = 0; i < n; i++) {
        matrixA[i].push(vectorB[i]);
    }
    for (var i = 0; i < n; i++) {
        // Recherche de l'élément pivot
        var pivotRow = i;
        for (var j = i + 1; j < n; j++) {
            if (Math.abs(matrixA[j][i]) > Math.abs(matrixA[pivotRow][i])) {
                pivotRow = j;
            }
        }
        // Échange de lignes si nécessaire
        if (pivotRow !== i) {
            _a = [matrixA[pivotRow], matrixA[i]], matrixA[i] = _a[0], matrixA[pivotRow] = _a[1];
        }
        // Élimination de Gauss
        for (var j = i + 1; j < n; j++) {
            var factor = matrixA[j][i] / matrixA[i][i];
            for (var k = i; k < n + 1; k++) {
                matrixA[j][k] -= factor * matrixA[i][k];
            }
        }
    }
    //vecteur apres les changement
    for (var i = 0; i < n; i++) {
        vectorB[i] = matrixA[i][n];
    }
    //résolution
    var resultVector = solveUpperTriangularSystem(matrixA, vectorB);
    console.log(matrixA);
    return resultVector;
}
//Résolution d’un système linéaire triangulaire inferieur 
function solveLowerTriangularSystem(matrixA, vectorB) {
    var n = matrixA.length;
    var resultVector = [];
    for (var i = 0; i < n; i++) {
        resultVector[i] = vectorB[i];
        for (var j = 0; j < i; j++) {
            resultVector[i] -= matrixA[i][j] * resultVector[j];
        }
        resultVector[i] = resultVector[i] / matrixA[i][i];
    }
    return resultVector;
}
//Résolution d’un système linéaire triangulaire superieur
function solveUpperTriangularSystem(matrixA, vectorB) {
    var n = matrixA.length;
    var resultVector = [];
    for (var i = n - 1; i >= 0; i--) {
        resultVector[i] = vectorB[i];
        for (var j = i + 1; j < n; j++) {
            resultVector[i] -= matrixA[i][j] * resultVector[j];
        }
        resultVector[i] = resultVector[i] / matrixA[i][i];
    }
    return resultVector;
}
//Résolution d’un système linéaire triangulaire inferieur demi-bande
function solveLowerBandedTriangularSystem(matrixA, vectorB, m) {
    var n = matrixA.length;
    var resultVector = [];
    for (var i = 0; i < n; i++) {
        resultVector[i] = vectorB[i];
        for (var j = Math.max(0, i - m); j < i; j++) {
            resultVector[i] -= matrixA[i][j] * resultVector[j];
        }
        resultVector[i] = resultVector[i] / matrixA[i][i];
    }
    return resultVector;
}
//Résolution d’un système linéaire triangulaire superieur demi-bande
function solveUpperBandedTriangularSystem(matrixA, vectorB, m) {
    var n = matrixA.length;
    var resultVector = [];
    for (var i = n - 1; i >= 0; i--) {
        resultVector[i] = vectorB[i];
        for (var j = i + 1; j < Math.min(i + m + 1, n); j++) {
            resultVector[i] -= matrixA[i][j] * resultVector[j];
        }
        resultVector[i] = resultVector[i] / matrixA[i][i];
    }
    return resultVector;
}
//Méthodes itérative 
//methode de jocobi
function jacobi(matrixA, vectorB, max_iter, epsilon) {
    if (max_iter === void 0) { max_iter = 1000; }
    if (epsilon === void 0) { epsilon = 1e-6; }
    var n = matrixA.length;
    var resultVector = [];
    var x = [];
    var max = 0;
    var k = 0;
    for (var i = 0; i < n; i++) {
        resultVector[i] = 0;
    }
    while (true) {
        for (var i = 0; i < n; i++) {
            x[i] = resultVector[i];
        }
        for (var i = 0; i < n; i++) {
            var s = vectorB[i];
            for (var j = 0; j < i; j++) {
                s = s - matrixA[i][j] * x[j];
            }
            for (var j = i + 1; j < n; j++) {
                s = s - matrixA[i][j] * x[j];
            }
            resultVector[i] = s / matrixA[i][i];
            if (max < Math.abs(x[i] - resultVector[i])) {
                max = Math.abs(x[i] - resultVector[i]);
            }
            if (max < epsilon || k == max_iter) {
                return resultVector;
            }
            k++;
        }
    }
}
//methode de Gauss-Seidel
function gauss_seidel(matrixA, vectorB, max_iter, epsilon) {
    if (max_iter === void 0) { max_iter = 1000; }
    if (epsilon === void 0) { epsilon = 1e-6; }
    var n = matrixA.length;
    var resultVector = [];
    var max = 0;
    var k = 0;
    for (var i = 0; i < n; i++) {
        resultVector[i] = 0;
    }
    while (true) {
        for (var i = 0; i < n; i++) {
            var s = 0;
            for (var j = 0; j < i; j++) {
                s = s + matrixA[i][j] * resultVector[j];
            }
            for (var j = i + 1; j < n; j++) {
                s = s + matrixA[i][j] * resultVector[j];
            }
            s = (vectorB[i] - s) / matrixA[i][i];
            if (max < Math.abs(s - resultVector[i])) {
                max = Math.abs(s - resultVector[i]);
            }
            resultVector[i] = s;
        }
        if (max < epsilon || k == max_iter) {
            return resultVector;
        }
        k++;
    }
}
// Exemple d'utilisation
var lowerTriangularmatrixA = [
    [1, 0, 0],
    [2, 3, 0],
    [4, 5, 6]
];
var vector1 = [3, 3, 5];
var solution1 = solveLowerTriangularSystem(lowerTriangularmatrixA, vector1);
var upperTriangularmatrixA = [
    [1, 2, 3],
    [0, 4, 5],
    [0, 0, 6]
];
var vector2 = [14, 20, 6];
var solution2 = solveUpperBandedTriangularSystem(upperTriangularmatrixA, vector2, 1);
var matrix = [
    [-6, 1, -7],
    [9, 3, 5],
    [2, 0, 2]
];
var vector = [-14, 11, 4];
var matrixA = [
    [1, -1, 2],
    [3, 2, 1],
    [2, -3, -2]
];
var vectorA = [5, 10, -10];
var matrixS = [
    [1, 2, 2],
    [2, 5, 7],
    [2, 7, 14]
];
var vectorS = [1, 3, 7];
var solution = gauss_seidel(matrixA, vectorA);
console.log("Solution du système linéaire :");
console.log(solution);
//console.log(matrixA);
//console.log(vectorA);
