var marks = Array(12,21,22,28)
console.log(marks)
console.log(marks[2])
marks.push(30)
console.log(marks)
console.log(marks.indexOf(100))
console.log(marks.includes(29))

var sum = 0
for (let i=0;i<marks.length;i++)
{
 sum = sum + marks[i]; 
}
console.log(sum)