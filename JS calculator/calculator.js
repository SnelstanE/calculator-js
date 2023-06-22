const OPERATIONS = {
    sum: '+',
    minus: '-',
    delit: '/',
    ymnozh: '*'
};

function calculate({a, b, operation }){
    let result = null;

    switch(operation) {
        case OPERATIONS.sum:
            result = sum(a,b);
            break;

        case OPERATIONS.minus:
            result = minus(a,b);

            break;
        case OPERATIONS.delit:
            result = delit(a,b);

            break;

        case OPERATIONS.ymnozh:
            result = ymnozh(a,b);

            break;
    }

    return result;
}