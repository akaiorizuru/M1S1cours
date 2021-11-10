function consoletest(a){
    if(Number.isInteger(a)){
        if(a%2==0){
            return 'pair'
        }else{
            return 'impair'
        }
    }else{
        return "entrer un nombre entier"
    }
};
let $test = consoletest(3);


