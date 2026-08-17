//===========#VIMP for interview===============

/* 
JavaScript ExecutionContext -
-{} ----> Global EC 
-Fuctional execution context 
-Eval execution context 

{code}--->Memory creation phase 
      --->Execution phase


    ==========================Repeted=================================
    Time line 5:55 -->
JacaScript Execution context
|
---> Globale execution context 
     Fuction execution context 
     Eval execution context 

"{}" this is memory creation phase    
 
@Example :-

let val1 = 10
let val2 = 5
function addNum(num1 + num2){
let total = num1 + num2
return total 
}
let result1 = addNum(val1 , val2)
let result2 = addNum ( 10,2) 


Step1 - Globle execution ---> this 
step2 - Memory creation ---> val1 = undefined
                             val2 = undefined
                             addNum = defination 
                             result1 = undefined
                             result2 = undefined
step3 = Execution phase    val1 <--10
                            val2 <--2
                            addNum ---->|______________________________
                                        |new variable environment      |
                                        |         +                    |
                                        | Execution thread             | --->memory phase + execution phase
                                        |                              |
                                        ________________________________
                                        (ye kam ke bad delet hota hai)

                                        



*/