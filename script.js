console.log('iniciou')

function cleanString(str) {
    let cleanedStr = str.replace(/[{}\[\]+()]/g, ' ').replace(/\s+/g, ' ').trim();
    return cleanedStr
}

function transformInArray(editString) {
    let array = editString.split(' ').filter(Boolean)
    return array
}

function processArray(arr) {
     // Função auxiliar para remover um número específico do array
    function removeNumber(arr, num) {
        const index = arr.indexOf(num);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }

    // Verificação do número 1
    while (arr.includes("1")) {
        let index1 = arr.indexOf("1");
        if (index1 !== -1) {
            arr.splice(index1, 1); // Remove o número 1 encontrado
            if (arr.includes("10")) {
                removeNumber(arr, "10");
            } else if (arr.includes("9")) {
                removeNumber(arr, "9");
            } else {
                arr.splice(index1, 0, "1"); // Reinsere o número 1 se não houver 10 ou 9
                break;
            }
        }
    }

    // Verificação do número 2
    while (arr.includes("2")) {
        let index2 = arr.indexOf("2");
        if (index2 !== -1) {
            arr.splice(index2, 1); // Remove o número 2 encontrado
            if (arr.includes("8")) {
                removeNumber(arr, "8");
            } else if (arr.includes("7")) {
                removeNumber(arr, "7");
            } else {
                arr.splice(index2, 0, "2"); // Reinsere o número 2 se não houver 8 ou 7
                break;
            }
        }
    }

    return arr;
}

function calcularMedia(array) {
    let somaTotal = 0;
    let numeroDeItens = array.length;

    // Soma os elementos do array
    somaTotal = array.reduce((acc, num) => acc + parseInt(num), 0);

    // Calcula a média
    let media = somaTotal / numeroDeItens;
    return media.toFixed(1);
}


function sendString() {
    const inputString = document.getElementById('inputString').value;
    console.log(inputString);
    let editString = cleanString(inputString)
    console.log(editString)
    let array = transformInArray(editString)
    console.log(array)
    document.getElementById("findNumbs").innerHTML = array;
    let editArray = processArray(array)
    console.log(editArray)
    document.getElementById("arrayEdit").innerHTML = editArray;
    let media = calcularMedia(editArray)
    console.log(media)

    document.getElementById("result").innerHTML = media;
}

