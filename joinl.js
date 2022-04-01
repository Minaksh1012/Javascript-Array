// Convert Character Matrix to single String;
//     The original list is: [ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
// The String after join: gfgisbest

// var list1=[['g','f','g'],['i','s'],['b','e','s','t']]
// s=[]
// for (i of list1){
//     for(j of i ){
//     s.push(j)
//     }
//     // console.log(s)
// } 
// console.log(s)



var list1=[['g','f','g'],['i','s'],['b','e','s','t']]
s=[]
for (i of list1){
    for(j of i ){
    console.log(s+=j)
    }
    // console.log(s)
} 
// console.log(s)