function sumMultiples(input) {
    let multi = "";
    let sum = 0;
    for (let i = 1; multi < 100; i++) {

        multi = String(input * i);
        // debugger;
        for (let j = 0; j <= multi.length - 1; j++) {
            sum += Number(multi[j]);

        }

    }
    return sum;
}