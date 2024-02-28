function calculator(choice,x,y){
    let answer;
    switch (choice){
        case '+': 
            answer = x + y;
        break;
        case "-":
            answer = x  - y;
        break;


        case "*":
            answer = x * y;
            break;

        case "/":
            if(y!== 0){
                answer = x / y;
            }
            else{
                console.log("number can't be divide by 0");
            }
            break;
        default: 
        answer = "invalid option";
    }
    return answer;
}

console.log(calculator("+", 2, 3));
console.log(calculator('-', 2, 3));
console.log(calculator('*', 2, 3));
console.log(calculator('/', 2, 3));
console.log(calculator('%', 2, 3));