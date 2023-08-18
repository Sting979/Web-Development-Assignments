//1. Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array
/*
a=[1,3,8,9,5,7,26,29,45,13,17,21,34,40,44]
//Anonymus Function
b=function(){
    for(i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i])
        }
    }
}
b();
//IIFE
(function(){
    for(i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i])
        }
    }
})();
*/

//b. Convert all the strings to title caps in a string array
/*
var arr = ["guvi", "geek", "zen", "fullstack"];
//Anonymus Function
a=function(){
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
        }
}
a();


//IIFE
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();
*/

// c. Sum of all numbers in an array
/*
a=[1,3,8,9,5,7,26,29,45,13,17,21,34,40,44]
// Anonymus Function
sum=0
b=function(){
    for(i=0;i<a.length;i++){
        sum=sum+a[i]
}
console.log(sum)
}
b();
//IIFE
(function(){
        sum=0
        for(i=0;i<a.length;i++){
            sum=sum+a[i]
    }
    console.log(sum)
})();
*/

//d. Return all the prime numbers in an array
/*
a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
f=true
b=[];
/*
// Anonymus Function
c=function(a){
for(i=0;i<a.length;i++){
    if(a[i]>2){
        for(j=2;j<a[i];j++){
            if(a[i]%j==0){
                f=false
                break;
            }
        }
    if(f)
    {b.push(a[i])
    }
    }
    else if(a[i]==2)
    {b.push(a[i])}
    f=true
}
console.log(b)
}
c(a);
*/
//IIFE
/*
(function(){
        for(i=0;i<a.length;i++){
            if(a[i]>2){
                for(j=2;j<a[i];j++){
                    if(a[i]%j==0){
                        f=false
                        break;
                    }
                }
            if(f)
            {b.push(a[i])
            }
            }
            else if(a[i]==2)
            {b.push(a[i])}
            f=true
        }
        console.log(b)
})();
*/

// e. Return all the palindromes in an array

/*
a=["eye","civic","sun","level","moon","bus","madam","rotator","tractor","anna","bingo","pool"]
pdr=[];
//Anonymus Function
/*
p=function(a){
for(i=0;i<a.length;i++){
    b=a[i]
    c=b.split("")
    f=true
    if(c.length%2==0)
    {
    while(c.length>0)
    {
    t1=c.pop()
    t2=c.shift()
    if(t1!=t2)
    {f=false}
    }
    }
    else
    {
    while(c.length>1)
    {
    t1=c.pop()
    t2=c.shift()
    if(t1!=t2)
    {f=false}
    }
    }
    if(f)
    {pdr.push(a[i])}
}
console.log(pdr)
}
p(a)
*/


//IIFE
/*
(function(){
    for(i=0;i<a.length;i++){
        b=a[i]
        c=b.split("")
        f=true
        if(c.length%2==0)
        {
        while(c.length>0)
        {
        t1=c.pop()
        t2=c.shift()
        if(t1!=t2)
        {f=false}
        }
        }
        else
        {
        while(c.length>1)
        {
        t1=c.pop()
        t2=c.shift()
        if(t1!=t2)
        {f=false}
        }
        }
        if(f)
        {pdr.push(a[i])}
    }
    console.log(pdr)
})();
*/

// f. Return median of two sorted arrays of the same size.
/*
a=[1,2,3,4,5,6,7,8,11,12,13]
b=[6,7,8,9,10]

//Anonumus Function

med=function(a,b){
c=[]
c=b
for(i=0;i<a.length;i++)
{  
for(j=0;j<c.length;j++)
{
    if(a[i]<c[j])
    {c.splice(j,0,a[i])
        break;}
    if(a[i]>c[(c.length)-1])
    {c.push(a[i])}
}
}
l=c.length
if(l%2==0)
{console.log(0.5*(c[l/2]+c[(l/2)+1]))}
else
{console.log(c[(l+1)/2])}
}
med(a,b);

//IIFE
a=[1,2,3,4,5,6,7,8,11,12,13]
b=[6,7,8,9,10];

(function(){
    c=[]
    c=b
    for(i=0;i<a.length;i++)
    {  
    for(j=0;j<c.length;j++)
    {
        if(a[i]<c[j])
        {c.splice(j,0,a[i])
            break;}
        if(a[i]>c[(c.length)-1])
        {c.push(a[i])}
    }
    }
    l=c.length
    if(l%2==0)
    {console.log(0.5*(c[l/2]+c[(l/2)+1]))}
    else
    {console.log(c[(l+1)/2])}
})();
*/

// g. Remove duplicates from an array
/*

// Anonymus Function
var dupl = function(arr){
    newArr=[]
 for(var i=0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i])
    } }
    console.log(newArr)
   }
   dupl(["guvi","geek","guvi","duplicate","geeK"])

//IIFE

(function(arr){
        newArr=[]
     for(var i=0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i])
        } }
        console.log(newArr)
       
})(["guvi","geek","guvi","duplicate","geeK"]);

*/

// h. Rotate an array by k times
/*
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13]
var k = 3;
// Anonymus Function
rot=function(){
    k = (arr.length) % k;
out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);
}
rot()

//IIFE
(function() {
k = (arr.length) % k;
out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();
 */

 //--------------------------------------------------------------------------------------------------------------------------------------------------------

 // 2. Do the below programs in arrow functions.

// a. Print odd numbers in an array 
/*
a=[1,3,8,9,5,7,26,29,45,13,17,21,34,40,44]

b=()=>{
    for(i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i])
        }
    }
}
b();
*/

//b. Convert all the strings to title caps in a string array
/*
var arr = ["guvi", "geek", "zen", "fullstack"];

a=()=>{
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
        }
}
a()

c. Sum of all numbers in an array

a=[1,3,8,9,5,7,26,29,45,13,17,21,34,40,44]

b=()=>{
    sum=0
    for(i=0;i<a.length;i++){
        sum=sum+a[i]
}
console.log(sum)
}
b()
*/

//d. Return all the prime numbers in an array
/*
a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

c=(a)=>{
f=true
b=[];
for(i=0;i<a.length;i++){
    if(a[i]>2){
        for(j=2;j<a[i];j++){
            if(a[i]%j==0){
                f=false
                break;
            }
        }
    if(f)
    {b.push(a[i])
    }
    }
    else if(a[i]==2)
    {b.push(a[i])}
    f=true
}
console.log(b)
}
c(a)
*/

//e. Return all the palindromes in an array
/*
a=["eye","civic","sun","level","moon","bus","madam","rotator","tractor","anna","bingo","pool"]
pdr=[];

p=(a)=>{
    for(i=0;i<a.length;i++){
        b=a[i]
        c=b.split("")
        f=true
        if(c.length%2==0)
        {
        while(c.length>0)
        {
        t1=c.pop()
        t2=c.shift()
        if(t1!=t2)
        {f=false}
        }
        }
        else
        {
        while(c.length>1)
        {
        t1=c.pop()
        t2=c.shift()
        if(t1!=t2)
        {f=false}
        }
        }
        if(f)
        {pdr.push(a[i])}
    }
    console.log(pdr)
    }
    p(a)
    */