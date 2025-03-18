function transporMatriz(A){

    console.log('Matriz Inicial');
    for(let i = 0; i < A.length; i++){
        let linha = "";

        for(let j = 0; j < A[i].length; j++){
           linha += A[i][j] + "\t"; 
        }

        console.log(linha);
    }

    console.log('\nMatriz Transposta\n');
    for(let j = 0; j < A[0].length; j++){
        let linha = "";

        for(let i = 0; i < A.length; i++){
            linha += A[i][j] + "\t";
        }

        console.log(linha);
    }

}


let matriz = [
    [2, 3],
    [5, 6],
    [8, 9],
];

transporMatriz(matriz);