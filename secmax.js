var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=numbers[0];
var second_max=0;
for (var i =0;i<numbers.length;i++){
    if (numbers[i]>max){
        max=numbers[i]
        // console.log(max)
    }
    // second_max!=max  
    else if(second_max==0 || numbers[i]>second_max){
        second_max=numbers[i]
        // console.log(second_max)
    }  
}
   console.log(max,"maximum number")
   console.log(second_max,"second maximum number")