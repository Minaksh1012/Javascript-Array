// a=["minakshi",1,2,3,"monu"]
// b=[]
// for (i of a){
//     if (typeof(i)=='string'){
//         // console.log("true")
//         b.push("true")
//     }else{
//         b.push(i)

//     }
// }
// console.log(b)

a=[1,"2","",5,"",8]
b=[]
c=[]
for (i=0;i<a.length;i++){
    if(typeof(a[i])=='string'){
        b.push(a[i])
        // console.log(b)
    }else{
        c.push(a[i])
    }
}
console.log(c)