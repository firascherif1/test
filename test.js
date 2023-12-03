// multiplication matrice-matrice
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// matrice dense * matrice :
//dense
function multiplicationMatriceDense_Dense(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = 0; k < n; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_inf
function multiplicationMatriceDense_TI(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = j; k < n; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_sup
function multiplicationMatriceDense_TS(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = 0; k <= j; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//bande 
function multiplicationMatriceDense_Bande(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, j - m); k < Math.min(j + m + 1, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bane_inf
function multiplicationMatriceDense_DBI(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = j; k < Math.min(j + m + 1, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_sup
function multiplicationMatriceDense_DBS(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, j - m); k <= j; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
// matrice tri_inf * matrice :
//dense
function multiplicationMatriceTI_dense(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = 0; k <= i; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_inf
function multiplicationMatriceTI_TI(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = j; k <= i; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_sup
function multiplicationMatriceTI_TS(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = 0; k <= j; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        for (var j = i + 1; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = 0; k <= i; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//bande  
function multiplicationMatriceTI_Bande(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < Math.min(i + m + 1, n); j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, j - m); k <= Math.min(j + m, i); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_inf 
function multiplicationMatriceTI_DBI(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = j; k <= Math.min(j + m, i); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_superieur
function multiplicationMatriceTI_DBS(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, j - m); k <= j; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        for (var j = i + 1; j < Math.min(i + m + 1, n); j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, j - m); k <= i; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//matrice tri_sup * matrice :
//dense
function multiplicationMatriceTS_dense(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = i; k < n; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_inf
function multiplicationMatriceTS_TI(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = i; k < n; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        for (var j = i + 1; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = j; k < n; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_sup
function multiplicationMatriceTS_TS(matrixA, matrixB) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = i; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = i; k <= j; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//bande   
function multiplicationMatriceTS_bande(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = Math.max(0, i - m); j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(i, j - m); k < Math.min(j + m + 1, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_inf
function multiplicationMatriceTS_DBI(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = Math.max(0, i - m); j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = i; k < Math.min(j + m + 1, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        for (var j = i + 1; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = j; k < Math.min(j + m + 1, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_sup
function multiplicationMatriceTS_DBS(matrixA, matrixB, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = i; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(i, j - m); k <= j; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//// matrice bande * matrice :
//dense
function multiplicationMatriceBande_Dense(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, i - s); k < Math.min(i + s + 1, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_inf
function multiplicationMatriceBande_TI(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(j, i - s); k < Math.min(i + s + 1, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_sup
function multiplicationMatriceBande_TS(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, i - s); k <= Math.min(i + s, j); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//bande  
function multiplicationMatriceBande_Bande(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(0, i - r), Math.max(0, i - s)); k < Math.max(Math.min(i + r + 1, n), Math.min(i + s + 1, n)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_inf
function multiplicationMatriceBande_DBI(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < Math.min(i + s + 1, n); j++) {
            resultMatrix[i][j] = 0;
            for (var k = j; k < Math.max(Math.min(j + s + 1, n), Math.min(j + r + 1, n)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_sup
function multiplicationMatriceBande_DBS(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = Math.max(0, i - s); j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(0, j - s), Math.max(0, j - r)); k <= j; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
// matrice demi_bande_inferieur * matrice :
// Dense
function multiplicationMatriceDBI_Dense(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, i - s); k <= i; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_inf
function multiplicationMatriceDBI_TI(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(j, i - s); k <= i; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_sup
function multiplicationMatriceDBI_TS(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = Math.max(0, i - s); j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, i - s); k <= j; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        for (var j = i + 1; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(0, i - s); k <= i; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//bande
function multiplicationMatriceDBI_bande(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < Math.max(Math.min(i + s + 1, n), Math.min(i + r + 1, n)); j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(0, j - s), Math.max(0, j - r)); k <= Math.max(Math.min(j + s, i), Math.min(j + r, i)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_inf
function multiplicationMatriceDBI_DBI(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(0, i - s), Math.max(0, i - r)); k <= Math.max(Math.min(j + s, i), Math.min(j + r, i)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_sup
function multiplicationMatriceDBI_DBS(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    // if(s == r){
    //     return false;
    // }
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = Math.max(0, i - s); j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(0, j - r), Math.max(0, j - s)); k <= Math.max(Math.min(i + s, j), Math.min(i + r, j)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        for (var j = i + 1; j < Math.min(i + r + 1, n); j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(0, j - r), Math.max(0, j - s)); k <= Math.max(Math.min(j + s, i), Math.min(j + r, i)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
// matrice demi_bande_supérieur * matrice :
//Dense
function multiplicationMatriceDBS_Dense(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = i; k < Math.min(i + s, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_inf
function multiplicationMatriceDBS_TI(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = i; k < Math.min(i + s, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        for (var j = i + 1; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = j; k < Math.min(i + s, n); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//tri_sup
function multiplicationMatriceDBS_TS(matrixA, matrixB, s) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = i; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = i; k <= Math.min(i + s, j); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//bande
function multiplicationMatriceDBS_bande(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = Math.min(Math.max(i - s, 0), Math.max(i - r, 0)); j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(j - s, i), Math.max(j - r, i)); k < Math.max(Math.min(i + s + 1, n), Math.min(i + r + 1, n)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_inf
function multiplicationMatriceDBS_DBI(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = Math.max(0, i - r); j <= i; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(i, j - r), Math.max(i, j - s)); k < Math.max(Math.min(j + s + 1, n), Math.min(j + r + 1, n)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        for (var j = i + 1; j < Math.min(i + s + 1, n); j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(j, i - r), Math.max(j, i - s)); k < Math.max(Math.min(i + s + 1, n), Math.min(i + r + 1, n)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
//demi_bande_sup
function multiplicationMatriceDBS_DBS(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = i; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.min(Math.max(j - s, i), Math.max(j - r, i)); k <= Math.max(Math.min(i + s, j), Math.min(i + r, j)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
// bande * transpose
function multiplicationMatriceBande_Transpose(matrixA, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(Math.max(0, i - m), Math.max(0, j - m)); k < Math.min(Math.min(n, i + m + 1), Math.min(n, j + m + 1)); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixA[j][k];
            }
        }
    }
    return resultMatrix;
}
// bande * inverse
function multiplicationMatriceBande_Inverse(matrixA, m) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    var matrixB = inverseGaussJordan(matrixA);
    if (matrixB != null) {
        for (var i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (var j = 0; j < n; j++) {
                resultMatrix[i][j] = 0;
                for (var k = Math.max(0, i - m); k < Math.min(i + m + 1, n); k++) {
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }
    return null;
}
function inverseGaussJordan(matrice) {
    var _a;
    var n = matrice.length;
    // Créer une matrice identité
    var identite = [];
    for (var i = 0; i < n; i++) {
        identite[i] = Array(n);
        for (var j = 0; j < n; j++) {
            identite[i][j] = 0;
        }
        identite[i][i] = 1;
    }
    // Concaténer la matrice originale avec la matrice identité
    var matriceAugmentee = matrice.map(function (ligne, index) { return __spreadArray(__spreadArray([], ligne, true), identite[index], true); });
    // Appliquer la méthode de Gauss-Jordan
    for (var i = 0; i < n; i++) {
        // Trouver le pivot non nul
        var pivotIndex = -1;
        for (var j = i; j < n; j++) {
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
        _a = [matriceAugmentee[pivotIndex], matriceAugmentee[i]], matriceAugmentee[i] = _a[0], matriceAugmentee[pivotIndex] = _a[1];
        // Mettre le pivot à 1
        var pivot = matriceAugmentee[i][i];
        for (var j = 0; j < 2 * n; j++) {
            matriceAugmentee[i][j] /= pivot;
        }
        // Élimination des autres lignes
        for (var k = 0; k < n; k++) {
            if (k !== i) {
                var facteur = matriceAugmentee[k][i];
                for (var j = 0; j < 2 * n; j++) {
                    matriceAugmentee[k][j] -= facteur * matriceAugmentee[i][j];
                }
            }
        }
    }
    // Extraire la partie droite (la matrice inverse)
    var inverse = matriceAugmentee.map(function (ligne) { return ligne.slice(n); });
    return inverse;
}
function test(matrixA, matrixB, s, r) {
    var n = matrixA.length;
    var resultMatrix = new Array(n);
    for (var i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (var j = Math.max(0, i - s); j < Math.min(n, r + i + 1); j++) {
            resultMatrix[i][j] = 0;
            for (var k = Math.max(Math.max(0, j - s), Math.max(0, j - r)); k <= Math.min(i, j); k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}
// multiplication matrice-vecteur
function multiplicationmatriceTI_Vecteur(matrixA, vectorB, n) {
    var resultVector = new Array(n);
    for (var i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (var j = 0; j <= i; j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}
function multiplicationmatriceTS_Vecteur(matrixA, vectorB, n) {
    var resultVector = new Array(n);
    for (var i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (var j = i; j < n; j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}
function multiplicationMatriceDense_Vecteur(m, v, n) {
    var y = new Array(n);
    for (var i = 0; i < n; i++) {
        y[i] = 0;
        for (var j = 0; j < n; j++) {
            y[i] += m[i][j] * v[j];
        }
    }
    return y;
}
function multiplicationmatriceDBI_Vecteur(matrixA, vectorB, n, m) {
    var resultVector = new Array(n);
    for (var i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (var j = Math.max(0, i - m); j <= i; j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}
function multiplicationmatriceDBS_Vecteur(matrixA, vectorB, n, m) {
    var resultVector = new Array(n);
    for (var i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (var j = i; j < Math.min(i + m + 1, n); j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}
function multiplicationmatriceBande_Vecteur(matrixA, vectorB, n, m) {
    var resultVector = new Array(n);
    for (var i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (var j = Math.max(0, i - m); j < Math.min(i + m + 1, n); j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}
var matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var matrixB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
var matrixx = [
    [1, 2, 3, 0],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [0, 14, 15, 16],
];
var matrixw = [
    [1, 2, 0, 0],
    [5, 6, 7, 0],
    [0, 10, 11, 12],
    [0, 0, 15, 16],
];
var matrixC = [
    [1, 2, 3, 2, 1],
    [3, 4, 5, 2, 1],
    [1, 2, 6, 2, 1],
    [3, 4, 5, 2, 1],
    [1, 2, 3, 2, 1],
];
var vecteur = [1, 1, 1];
var vector = [1, 1, 1, 1, 1];
var resultvector = multiplicationmatriceTS_Vecteur(matrixB, vecteur, 3);
var resultMatrix = multiplicationMatriceDBI_DBS(matrix, matrix, 1, 1);
var matrice = [
    [2, 1],
    [7, 4]
];
var matri = [
    [1, 1, 0],
    [4, 4, 4],
    [0, 3, 3]
];
var result = multiplicationMatriceBande_Transpose(matri, 1);
//const resultMatri = test(matrix,matrix, 1, 2);
// const resultVectorBande = multiplicationmatriceBande_Vecteur(matrixC, vector, 5, 1);
// const resultMatrixBande = multiplyMatriceDBI_DBS(matrixC, matrixC, 5, 2, 1);
console.log("Résultat du produit des matrices :");
console.log(result);
