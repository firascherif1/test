
// multiplication matrice-matrice

// matrice dense * matrice :

    //dense
function multiplicationMatriceDense_Dense(matrixA: number[][], matrixB: number[][]): number[][]{
    const n = matrixA.length;
    const resultMatrix: number[][] = new Array(n);
    for(let i = 0; i < n; i++){    
        resultMatrix[i] = new Array(n);
        for(let j = 0; j < n; j++){
            resultMatrix[i][j] = 0;
            for(let k = 0; k < n; k++){
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}

    //tri_inf
function multiplicationMatriceDense_TI(matrixA: number[][], matrixB: number[][]): number[][]{
    const n = matrixA.length;
    const resultMatrix: number[][] = new Array(n);
    for(let i = 0; i < n; i++){    
        resultMatrix[i] = new Array(n);
        for(let j = 0; j < n; j++){
            resultMatrix[i][j] = 0;
            for(let k = j; k < n ; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}

    //tri_sup
function multiplicationMatriceDense_TS(matrixA: number[][], matrixB: number[][]): number[][]{
    const n = matrixA.length;
    const resultMatrix: number[][] = new Array(n);
    for(let i = 0; i < n; i++){    
        resultMatrix[i] = new Array(n);
        for(let j = 0; j < n; j++){
            resultMatrix[i][j] = 0;
            for(let k = 0; k <= j; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}

    //bande 
function multiplicationMatriceDense_Bande(matrixA: number[][], matrixB: number[][], m: number): number[][]{
    const n = matrixA.length;
    const resultMatrix: number[][] = new Array(n);
    for(let i = 0; i < n; i++){    
        resultMatrix[i] = new Array(n);
        for(let j = 0; j < n; j++){
            resultMatrix[i][j] = 0;
            for(let k = Math.max(0, j - m); k < Math.min(j + m + 1, n) ; k++){
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}

    //demi_bane_inf
function multiplicationMatriceDense_DBI(matrixA: number[][], matrixB: number[][], m: number): number[][]{
    const n = matrixA.length;
    const resultMatrix: number[][] = new Array(n);
    for(let i = 0; i < n; i++){    
        resultMatrix[i] = new Array(n);
        for(let j = 0; j < n; j++){
            resultMatrix[i][j] = 0;
            for(let k = j; k < Math.min(j + m + 1, n); k++){
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}

    //demi_bande_sup
function multiplicationMatriceDense_DBS(matrixA: number[][], matrixB: number[][], m: number): number[][]{
    const n = matrixA.length;
    const resultMatrix: number[][] = new Array(n);
    for(let i = 0; i < n; i++){    
        resultMatrix[i] = new Array(n);
        for(let j = 0; j < n; j++){
            resultMatrix[i][j] = 0;
            for(let k = Math.max(0, j - m); k <= j ; k++){
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}



// matrice tri_inf * matrice :

    //dense
    function multiplicationMatriceTI_dense(matrixA: number[][], matrixB: number[][]): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
    for (let i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (let k = 0; k <= i; k++){
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
    }

    //tri_inf
    function multiplicationMatriceTI_TI(matrixA: number[][], matrixB: number[][]): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j <= i; j++){
                resultMatrix[i][j] = 0;
                for(let k = j; k <= i ; k++){
                        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //tri_sup
    function multiplicationMatriceTI_TS(matrixA: number[][], matrixB: number[][]): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = 0; k <= j; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
           for(let j = i + 1; j < n; j++){
                resultMatrix[i][j] = 0;
                for (let k = 0; k <= i; k++){
                   resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //bande  
    function multiplicationMatriceTI_Bande(matrixA: number[][], matrixB: number[][], m: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j < Math.min(i + m + 1, n); j++) {
             resultMatrix[i][j] = 0;
              for (let k = Math.max(0, j - m); k <= Math.min(j + m, i); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_inf 
    function multiplicationMatriceTI_DBI(matrixA: number[][], matrixB: number[][], m: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = j; k <= Math.min(j + m, i); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_superieur
    function multiplicationMatriceTI_DBS(matrixA: number[][], matrixB: number[][], m: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = Math.max(0, j - m); k <= j; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
           for(let j = i + 1; j < Math.min(i + m + 1, n); j++){
                resultMatrix[i][j] = 0;
                for (let k = Math.max(0, j - m); k <= i; k++){
                   resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }



//matrice tri_sup * matrice :
    
    //dense
    function multiplicationMatriceTS_dense(matrixA: number[][], matrixB: number[][]): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
    for (let i = 0; i < n; i++) {
        resultMatrix[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            resultMatrix[i][j] = 0;
            for (let k = i; k < n; k++){
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
    }

    //tri_inf
    function multiplicationMatriceTS_TI(matrixA: number[][], matrixB: number[][]): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = i; k < n; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
           for(let j = i + 1; j < n; j++){
                resultMatrix[i][j] = 0;
                for (let k = j; k < n; k++){
                   resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //tri_sup
    function multiplicationMatriceTS_TS(matrixA: number[][], matrixB: number[][]): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = i; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = i; k <= j; k++){
                        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //bande   
    function multiplicationMatriceTS_bande(matrixA: number[][], matrixB: number[][], m: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = Math.max(0, i - m); j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(i, j - m); k < Math.min(j + m + 1, n); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_inf
    function multiplicationMatriceTS_DBI(matrixA: number[][], matrixB: number[][], m: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = Math.max(0, i - m); j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = i; k < Math.min(j + m + 1, n); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
           for(let j = i + 1; j < n; j++){
                resultMatrix[i][j] = 0;
                for (let k = j; k < Math.min(j + m + 1, n); k++){
                   resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_sup
    function multiplicationMatriceTS_DBS(matrixA: number[][], matrixB: number[][], m: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = i; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(i, j - m); k <= j; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }


//// matrice bande * matrice :

    //dense
    function multiplicationMatriceBande_Dense(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(0, i - s); k < Math.min(i + s + 1, n); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //tri_inf
    function multiplicationMatriceBande_TI(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(j, i - s); k < Math.min(i + s + 1, n); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //tri_sup
    function multiplicationMatriceBande_TS(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(0, i - s); k <= Math.min(i + s, j); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //bande  
    function multiplicationMatriceBande_Bande(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.min(Math.max(0, i - r),Math.max(0, i - s)); k < Math.max(Math.min(i + r + 1, n),Math.min(i + s + 1, n)); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_inf
    function multiplicationMatriceBande_DBI(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j < Math.min(i + s +1 , n) ; j++) {
                resultMatrix[i][j] = 0;
                for (let k = j; k < Math.max(Math.min(j + s + 1, n),Math.min(j + r + 1, n)); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_sup
    function multiplicationMatriceBande_DBS(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = Math.max(0, i - s); j < n ; j++) {
                resultMatrix[i][j] = 0;
                for (let k = Math.min(Math.max(0, j - s),Math.max(0, j - r)); k <= j; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }



    
// matrice demi_bande_inferieur * matrice :

    // Dense
    function multiplicationMatriceDBI_Dense(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(0, i - s); k <= i; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //tri_inf
    function multiplicationMatriceDBI_TI(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j <= i; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(j, i - s); k <= i; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //tri_sup
    function multiplicationMatriceDBI_TS(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = Math.max(0, i - s); j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = Math.max(0, i - s); k <= j; k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
           for(let j = i + 1; j < n; j++){
                resultMatrix[i][j] = 0;
                for (let k = Math.max(0, i - s); k <= i; k++){
                   resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //bande
    function multiplicationMatriceDBI_bande(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
    const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j < Math.max(Math.min(i + s + 1, n),Math.min(i + r + 1, n)); j++) {
             resultMatrix[i][j] = 0;
              for (let k = Math.min(Math.max(0, j - s),Math.max(0, j - r)); k <= Math.max(Math.min(j + s, i),Math.min(j + r, i)); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_inf
    function multiplicationMatriceDBI_DBI(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = Math.min(Math.max(0, i - s),Math.max(0, i - r)); k <= Math.max(Math.min(j + s, i),Math.min(j + r, i)); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }
    //demi_bande_sup
    function multiplicationMatriceDBI_DBS(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][] | boolean{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        // if(s == r){
        //     return false;
        // }
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = Math.max(0, i - s); j <= i; j++) {
                resultMatrix[i][j] = 0;
                for (let k = Math.min(Math.max(0, j - r),Math.max(0, j - s)); k <= Math.max(Math.min(i + s, j),Math.min(i + r, j)); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
            for(let j = i + 1; j < Math.min(i + r + 1, n); j++){
                resultMatrix[i][j] = 0;
                for (let k = Math.min(Math.max(0, j - r),Math.max(0, j - s)); k <= Math.max(Math.min(j + s, i),Math.min(j + r, i)); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
           return resultMatrix;
    }


// matrice demi_bande_supérieur * matrice :

    //Dense
    function multiplicationMatriceDBS_Dense(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = i; k < Math.min(i + s, n); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //tri_inf
    function multiplicationMatriceDBS_TI(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = 0; j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = i; k < Math.min(i + s, n); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
           for(let j = i + 1; j < n; j++){
                resultMatrix[i][j] = 0;
                for (let k = j; k < Math.min(i + s, n); k++){
                   resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //tri_sup
    function multiplicationMatriceDBS_TS(matrixA: number[][], matrixB: number[][], s: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = i; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = i; k <= Math.min(i + s, j); k++){
                        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //bande
    function multiplicationMatriceDBS_bande(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = Math.min(Math.max(i - s, 0),Math.max(i - r, 0)); j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.min(Math.max(j - s, i),Math.max(j - r, i)); k < Math.max(Math.min(i + s + 1, n),Math.min(i + r + 1, n)); k++){
                        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_inf
    function multiplicationMatriceDBS_DBI(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = Math.max(0, i - r); j <= i; j++) {
             resultMatrix[i][j] = 0;
              for (let k = Math.min(Math.max(i, j - r),Math.max(i, j - s)); k < Math.max(Math.min(j + s + 1, n),Math.min(j + r + 1, n)); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
           for(let j = i + 1; j < Math.min(i + s + 1, n); j++){
                resultMatrix[i][j] = 0;
                for (let k = Math.min(Math.max(j, i - r),Math.max(j, i - s)); k < Math.max(Math.min(i + s + 1, n),Math.min(i + r + 1, n)); k++){
                   resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }

    //demi_bande_sup
    function multiplicationMatriceDBS_DBS(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = i; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.min(Math.max(j - s, i),Math.max(j - r, i)); k <= Math.max(Math.min(i + s, j),Math.min(i + r, j)); k++){
                        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }


// bande * transpose
    function multiplicationMatriceBande_Transpose(matrixA: number[][], m: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(Math.max(0, i - m),Math.max(0, j - m)) ; k < Math.min(Math.min(n, i + m + 1),Math.min(n, j + m + 1)); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixA[j][k];
                }
            }
        }
        return resultMatrix;
    }

// bande * inverse
function multiplicationMatriceBande_Inverse(matrixA: number[][], m: number): number[][] | null{
    const n = matrixA.length;
    const resultMatrix: number[][] = new Array(n);
    const matrixB = inverseGaussJordan(matrixA);
    if(matrixB != null){
        for(let i = 0; i < n; i++){    
            resultMatrix[i] = new Array(n);
            for(let j = 0; j < n; j++){
                resultMatrix[i][j] = 0;
                for(let k = Math.max(0, i - m); k < Math.min(i + m + 1, n); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }
    return null
}
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


















    function test(matrixA: number[][], matrixB: number[][], s: number, r: number): number[][]{
        const n = matrixA.length;
        const resultMatrix: number[][] = new Array(n);
        for (let i = 0; i < n; i++) {
            resultMatrix[i] = new Array(n);
            for (let j = Math.max(0, i - s); j < Math.min(n, r+i+1); j++) {
                resultMatrix[i][j] = 0;
                for (let k = Math.max(Math.max(0, j - s), Math.max(0, j - r)); k <= Math.min(i, j); k++){
                    resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return resultMatrix;
    }






// multiplication matrice-vecteur
function multiplicationmatriceTI_Vecteur(matrixA: number[][], vectorB: number[], n: number): number[]{
    const resultVector: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (let j = 0; j <= i ; j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}

function multiplicationmatriceTS_Vecteur(matrixA: number[][], vectorB: number[], n: number): number[]{
    const resultVector: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (let j = i; j < n ; j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}


function multiplicationMatriceDense_Vecteur(m: number[][], v: number[], n: number): number[]{
    const y: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        y[i] = 0;
        for (let j = 0; j < n; j++) {
            y[i] += m[i][j] * v[j];
        }
    }
    return y;
}

function multiplicationmatriceDBI_Vecteur(matrixA: number[][], vectorB: number[], n: number, m: number): number[]{
    const resultVector: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (let j = Math.max(0, i - m); j <= i ; j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}

function multiplicationmatriceDBS_Vecteur(matrixA: number[][], vectorB: number[], n: number, m: number): number[]{
    const resultVector: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (let j = i; j < Math.min(i + m + 1, n) ; j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}

function multiplicationmatriceBande_Vecteur(matrixA: number[][], vectorB: number[], n: number, m: number): number[]{
    const resultVector: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        resultVector[i] = 0;
        for (let j = Math.max(0, i - m); j < Math.min(i + m + 1, n) ; j++) {
            resultVector[i] += matrixA[i][j] * vectorB[j];
        }
    }
    return resultVector;
}



const matrixA: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrixB: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]
const matrixx: number[][] = [
    [1, 2, 3, 0],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [0, 14, 15, 16],
]
const matrixw: number[][] = [
    [1, 2, 0, 0],
    [5, 6, 7, 0],
    [0, 10, 11, 12],
    [0, 0, 15, 16],
]

const matrixC: number[][] = [
    [1, 2, 3, 2, 1],
    [3, 4, 5, 2, 1],
    [1, 2, 6, 2, 1],
    [3, 4, 5, 2, 1],
    [1, 2, 3, 2, 1],
];

const vecteur: number[] = [1, 1, 1];

const vector: number[] = [1, 1, 1, 1, 1];

const resultvector = multiplicationmatriceTS_Vecteur(matrixB, vecteur, 3);

const resultMatrix = multiplicationMatriceDBI_DBS(matrix, matrix, 1, 1);

const matrice: number[][] = [
    [2, 1],
    [7, 4]
];


const matri: number[][] = [
    [1, 1, 0],
    [4, 4, 4],
    [0, 3, 3]
];

const result = multiplicationMatriceBande_Transpose(matri, 1);

//const resultMatri = test(matrix,matrix, 1, 2);

// const resultVectorBande = multiplicationmatriceBande_Vecteur(matrixC, vector, 5, 1);

// const resultMatrixBande = multiplyMatriceDBI_DBS(matrixC, matrixC, 5, 2, 1);

console.log("Résultat du produit des matrices :");
    console.log(result);