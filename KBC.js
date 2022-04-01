var question_list = [
    "How many continents are there?",              //first question
    "What is the capital of India?",            //second question
    "NG mei kaun se course padhaya jaata hai?"    //third question
]

var options_list = [
    // options for first questions
    ["Four", "Nine", "Seven", "Eight"],
    //  options  for second questions 
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    //  options  for third question 
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]

//  har ek question ke liye, uski solution key (yeh index nahi hai)
var solution_list = [3, 4, 1] 
var answer_list=[
    ["(1)four","(3)seven"],
    ["(4)Delhi","(2)Bhopal"],
    ["(4)Agricultue","(1)Software Engineering"]
]
console.log("kaun Banega codepati (KBC)")
i=0
s=0
count=0
const q=require("readline-sync")
while(i<question_list.length){
    console.log(question_list[i])
    var j=0
    var b=i
    while(j<options_list[i].length){
        k=options_list[b][j]
        console.log(j+1,k)
        j++
    }
        const number=q.question("do you want 50 50 life line")
            if(number=="yes"){
                console.log("50 50 life line")
            
                if (count<1){
                    console.log(answer_list[b]);
                    const num2=q.questionInt("enter the answer")
                
                    if(num2==solution_list[i]){

                        s+=10000
                        console.log("your answer is correct");
                        console.log("you win Rs/",s);
                        count=count+1
                    }
                    else{
                        console.log("incorrect answer");
                        console.log("you can't Rs/",s);
                        console.log("you can't play")
                        count=count+1
                        break
                    }
                }
                else{
                    console.log("you already use life");
                    const z=q.questionInt("enter the answer")
                    if (z==solution_list[i]){
                    console.log("right answer");
                    s+=10000
                    console.log("you win Rs/",s);
                    }
                    else{
                        console.log("no chance");
                        console.log("your answer is wrong");
                        console.log("you win Rs/",s);
                        break
                    }
                }
            }
            else{ 
                var p=q.questionInt("enter the answer")
                if(p==solution_list[i]){
                console.log("your ans is correct");
                s=s+10000
                console.log("you win Rs/",s);
            }
            else{
                console.log("your answer is wrong");
                console.log("you won Rs/");
                console.log("no longer participant")
                break
            }
        }i++
        
                            
}
// console.log("congrulation you are a part of_KON BANAYGA CODEPATI_")
console.log("you win Rs/",s)
console.log("THANK YOU BEING PART OF KBC")