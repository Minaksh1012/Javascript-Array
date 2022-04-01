// Count unique values inside a list.
// input_list = [1, 2, 2, 5, 8, 4, 4, 8]
// Count = 5 #because [1,2,5,8,4] are unique values


input_list=[1,2,2,5,8,4,4,8]
l=[]
c=0
for(var j of input_list){
if(!l.includes(j)){
    l.push(j)
    c++
    // console.log(l)
}
}console.log(l,"count",c)