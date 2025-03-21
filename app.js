function calculator(num1, num2, operator){
   switch(operator){
      case "*":
         console.log(num1 * num2);
         break;
      case "+":
         console.log(num1 + num2);
         break;
      case "/":
         console.log(num1 / num2);
         break;
      case "-":
         console.log(num1 - num2);
         break;
      default:
         console.log('There is a issue')
   }
}
calculator(2,2,'*')
calculator(4,4,'+')
calculator(3,6,'-')
calculator(2,2,'/')
calculator(2,2)