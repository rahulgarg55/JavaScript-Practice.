var average = function(salary) {
      const max = Math.max(...salary)
    const min = Math.min(...salary)
    let average = 0;
    for(let i =0;i < salary.length;i++){
      if((salary[i] === max)|| (salary[i] === min)){
         continue
      } 
      else {
         average += salary[i]
      }
    }

    return average/(salary.length-2)

};

-------------------------------------------------------------------------------------
      
      
      
      
      
      
      <html>
  <body>
<script>
var ary=new Array();
ary[0]=10;
ary[1]=true;
ary[2]="rahul";
  for(var a=0;a<3;a++){
    document.write("<li>"+ary[a]+"</li>");
  }
  </script>
  </body>
  </html>








We can print all values using for in loop means all the properities
<html>
  <body>
<script>
var obj={
firstname:"rahul",
lastname:"garg",
age:25,
email:"gargr0109@gmail.com"
};
for(var key in obj){
document.write(obj[key]+"<br>");
}
  </script>
  </body>
  </html>=
  
  
  
  
  
  
  
  
  includes is a case sensititve function 
  
  
  var a=str.includes("ipt");
  
  var a=str.endswith("age");
  
  
  var str="javascript is a great language";
  var a=str.search("is");   // 11
  var a=str.search("great");   //16
  
  
  
  
  
  
  match()   javascript string method
  var a = str.match(/is/g);  g means globally will search again and again
  







indexof() // return index and works like search of first occurence
lastindexof()  //returns index from last 







replace()  //replaces word
var a=str.replace("javascript", "php");
to replace globally
var a=str.replace(/is/g,"are"); // it will replace is globally with are










trim()
var a=str.trim();
alert(a); // that removes whitespace characters from both the beginning and the end of a string.








var str=("javaxecript");
alert(str)







charAt()
var a=str.charAt(3); //it will return character at index we have passed.







charCodeAt()
var a=str.charCodeAt(1);  //it will return ASCII code of char at index 1


fromCharCode(110);




concat() // to concat more than one strings.
var str="rahul";
var str1="garg";
var ans=str.concat(str1);
document.write(ans);






split()
var a=str.split(" "); //it will split words at every space.(means whatever we will pass)




repeat()
var a=str.repeat(2);  //string will get repeated 2 times now




slice()
var a=str.slice(3); it will return  string from character 3




var a=str.slice(-2) //it will return 2 indexes from last.



substr()
var a=str.substr(2);  it will also return string from index 2




tostring()  //it will convert anything to string 
var str=50;
var a=str.tostring();  will conver
document.write(a+20);   // OUTPUT will be 5020





valueof()




Number Methods.
var a="99";
var num=Number(a);
document.write(num);  //now 99 will be integer






parseint()

var a="99 88 77";
var num=parseInt(a);
document.write(num);  //will return first integer value   

var a="10.00";
var num=parseInt(a);
document.write(num);  //will return value without decimal




parsefloat()
var num=parseFloat(a); // it will also return vlaue after dots.



isFinite() //will return true if num is finite
var a=100;
var num=isfinite(a);  //true





var a=10.50;
var num=isInteger(a); //false



var num=a.toFixed(num);  
var num=a.toPrecision(num); 
-------------------------------------------------------------------------------------


Math.ceil(1.2); //2
Math.floor(1.2); //1
Math.round(0.60);
Math.trunc(2.49);  //it will simply remove value after dot.
Math.sqrt(64); //8
pow(x,y);   pow(4,3);   //64
random();      // will return random values everytime we refresh
var a=math.abs(-5.25);
var a=Math.PI;   
----------------------------------------------------------------------------------------

JS Date Object
toDateString()
var now = new Date();
document.write(now.toDateString());  // to get in readable form
document.write(now.getFullYear()); 
document.write(now.getDay()); 
document.write(now.getMonth());
getHours();
getMinutes();
getSeconds();
getMilliSeconds();

setDate();
now.setDate(20);
now.setFullYear();
now.setMonth();
now.setHours();
---------------------------------------------------------------------------------------------
Document Object Model


Targeting Dom object.

ID      -> document.getElementbyId(id);
Class     -> document.getElementByClassNmae(name)
Tag Name    ->document.getElementByTagName(name)


var element;
element=document.all;   //it will return all tags in array type of the page.
console.log(element);



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            




------------------------------------------------------------------------------------------------------
DOM is a programming API for HTML and XML.



---------------------------------------------------------------------------------
     //error in this
      var findLeastNumOfUniqueInts = function(nums, k) {
      const m=new Map(); 
        for(const i of nums){
            m.set(i,(m.get(i)||0)+1);
        }
        
        const pq=new PriorityQueue();
        for(const [key,value] of m){
            pq.push(value);
        }
           while(k>0){
               k-=pq.top();
               if(k>=0)pq.pop();
           }
           return pq.size();
};

-------------------------------------------------------------------------------------------------------------------


Arrow function in JS
// no need to write function now.
let hello=()=> console.log("hello");
//to call the function 
hello();

// OLD WAY
let welcome=function(name){
      return `hello & welcome ${name}`;
}
console.log(welcome());        


//NEW WAY 
let welcome=(name,age) => {
  return `hello & welcome ${name}-${age}`;
}
console.log(welcome("rahul garg", 23));



----------------------------------------------------------------------------------------------------------------
2215. Find the Difference of Two Arrays

var findDifference = function(nums1, nums2) {
let temp1=[] 
let temp2=[]
let s1=new Set(nums1)
let s2=new Set(nums2)
for(let i of s1){
    if(!s2.has(i)){
        temp1.push(i)
    }
}
for(let i of s2){
    if(!s1.has(i)){
        temp2.push(i)
    }
}
return [temp1,temp2];   

    
};


-------------------------------------------------------------------------------------------------------














