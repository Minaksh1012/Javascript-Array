
// List product excluding duplicates.
List = [6,1,3,5,6,3,1]
// Output: 60
var list1=[]
var product=1
var j=1
for (i of List){
    if(!list1.includes(i)){
        list1.push(i)}
}
console.log(list1)
var product=1
for(var j of list1){
product*=j
}console.log(product)
