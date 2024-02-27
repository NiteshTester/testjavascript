console.log('Hello World')

var a = 8 ;
var b = 'test';
let c = 'kia'

console.log(a);
console.log(b);
console.log(typeof(c));

var flag = true
if(!flag)
{
 console.log("If bloh")
}
else
{
    console.log("else bloh")
}

let i = 0
while(flag)
{
     i = i+1;
    console.log(i)
    if(i>30)
    break
}

var marks = new Array(20,22,23,25)
var marks = [1,2,3,4,5]
marks.push(9)
marks.unshift(0)
console.log(marks)
console.log(marks.indexOf(4))