Task Manager APP

//how to share functions across file,  Defined and creaated a new gunction in a new file.
console.log('utils.js')
const name='rahul'
const add=(a,b)=>{
    return a+b
}
module.exports=name


require('./utils.js')
const firstname='rahul'
console.log(firstname)
------------------------------------------------------------------

// Create a new file called note.js

//create getnotes funtions that return 'your notes...'

const getNotes=require('./notes.js');

const msg=getNotes()

console.log(msg)

---------
   const getNotes= function(){
    return 'Your notes...'
 }
module.exports=getNotes
 //export getnotes function
-----------------------------------------------------------------
 //Importing npm modules.
  
  //npm init
 
  //goinf to inititialize npm in our project
  
  //JSON- JS object notation 
    
    // npm i validator installs-> will get node modules directory now.
    
 
 //isEmail(str [, options])-> important one.
    
-----------------------------------------------------------------    
    
//In Node.js, you can use the "chalk" module to add color and styling to the output in the terminal
//npm i chalk@2.4.1
    
const chalk=require('chalk');
console.log(chalk.blue('rahul));
                       
const chalk=require('chalk');
const getNotes=require('./notes.js');

const msg=getNotes()

console.log(msg)
console.log(chalk.blue('rahul garg')); // it will print msg in blue color.

//use chalk library to prject
//use it to generate /success/messages of color greeen
// it will return true.


---------------------------------------------------------------
 //Global npm modules and nodemon.
 
    
    
    
    
 //File system and command line arguments.
    
    
    //Getting input from users.
    
    
    //console.log(process.argv[2]) //argument vector
    now if we pass node app.js rahul garg in terminal it will print rahul
// process is a big object
    
    const chalk=require('chalk');
// const getNotes=require('./notes.js');

// const msg=getNotes()
const greemsg=chalk.red('Welcome')
// console.log(msg)
console.log(chalk.blue('rahul garg'));
console.log(greemsg);
//use chalk library to prject
//use it to generate /success/messages of color greeen
// it will return true. 
console.log(process.argv) //argument vector


------------------------------------------------------------------

const command=process.argv[2]

if(command==='add'){
    console.log('adding notes')
}else if(command==='remove'){
    console.log('removing notes')
}

//if we print node app.js add then we will get adding notes else we will get removing notes

// in this i learnt getting input from users.
---------------------------------------------------------
//Argument Parsing with Yargs
 
npm i yargs@12.0.2

const chalk=require('chalk');
const yargs=require('yargs');
// const getNotes=require('./notes.js');

// // const msg=getNotes()
// const greemsg=chalk.red('Welcome')
// // console.log(msg)
// console.log(chalk.blue('rahul garg'));
// console.log(greemsg);
// //use chalk library to prject
// //use it to generate /success/messages of color greeen
// // it will return true. 
// console.log(process.argv) //argument vector
// const command=process.argv[2]

console.log(process.argv) //argument vector

// if(command==='add'){
//     console.log('adding notes')
// }else if(command==='remove'){
//     console.log('removing notes')
// }



yargs.version('1.1.0')
console.log(yargs.argv)
//customize yarg version
yargs.command({
    command:'add',  //string name of command    
    describe:'adding notes',  //string value
  handler:function(){
    console.log('adding notes')
  }
})
//create remove command

yargs.command({
    command:'remove',  //string name of command    
    describe:'removing notes',  //string value
  handler:function(){
    console.log('removing notes')
  }
})  

//IN this challenge was to add two new commands.
// setup command to support "list" command(print placegholder message for now)
//setup command to support "read" command(print placeholder message for now)


const chalk=require('chalk');
const yargs=require('yargs');
// const getNotes=require('./notes.js');

// // const msg=getNotes()
// const greemsg=chalk.red('Welcome')
// // console.log(msg)
// console.log(chalk.blue('rahul garg'));
// console.log(greemsg);
// //use chalk library to prject
// //use it to generate /success/messages of color greeen
// // it will return true. 
// console.log(process.argv) //argument vector
// const command=process.argv[2]

console.log(process.argv) //argument vector

// if(command==='add'){
//     console.log('adding notes')
// }else if(command==='remove'){
//     console.log('removing notes')
// }



yargs.version('1.1.0')
console.log(yargs.argv)
//customize yarg version
yargs.command({
    command:'add',  //string name of command    
    describe:'adding notes',  //string value
  handler:function(){
    console.log('adding notes')
  }
})
//create remove command

yargs.command({
    command:'remove',  //string name of command    
    describe:'removing notes',  //string value
  handler:function(){
    console.log('removing notes')
  }
})  

///////////////Final Code

//Create list command
yargs.command({
  command:'list',
  describe:'list of notes',
    handler:function(){
      console.log('list of notes')
    }
})

//Create read command 
yargs.command({
    command:'read',
    describe:'reading notes',
    handler:function(){
      console.log('reading notes')
    }
})


//Testing work by running both commands.

console.log(yargs.argv)



    
    
-------------------------------------------------------------------------

//Arguments Parsing with Yargs.
we can write  yargs.parse() also in place of    //parsing the arguments.
console.log(yargs.args)


const chalk=require('chalk');
const yargs=require('yargs');
// const getNotes=require('./notes.js');

// // const msg=getNotes()
// const greemsg=chalk.red('Welcome')
// // console.log(msg)
// console.log(chalk.blue('rahul garg'));
// console.log(greemsg);
// //use chalk library to prject
// //use it to generate /success/messages of color greeen
// // it will return true. 
// console.log(process.argv) //argument vector
// const command=process.argv[2]

console.log(process.argv) //argument vector

// if(command==='add'){
//     console.log('adding notes')
// }else if(command==='remove'){
//     console.log('removing notes')
// }



yargs.version('1.1.0')
console.log(yargs.argv)
//customize yarg version
yargs.command({
    command:'add',  //string name of command    
    describe:'adding notes',  //string value
    builder:{
    title:{
        describe:'title',
        demandOption:true,
        type: 'string'
    },
    body:{
        describe:' note body',
        demandOption:true, //default value is false
        type:'string'
    }

},
    handler:function(argv){
    console.log('Title: ' + argv.title)
    console.log('Body:'+ argv.body)
  }
})
//create remove command

yargs.command({
    command:'remove',  //string name of command    
    describe:'removing notes',  //string value
  handler:function(){
    console.log('removing notes')
  }
})  

//Create list command
yargs.command({
  command:'list',
  describe:'list of notes',
    handler:function(){
      console.log('list of notes')
    }
})

//Create read command 
yargs.command({
    command:'read',
    describe:'reading notes',
    handler:function(){
      console.log('reading notes',argv)
    }
})


//Testing work by running both commands.

// console.log(yargs.argv)  
yargs.parse()


//Setup a body option for the add cmd
//configure a decription, make it required, and for it be a string
//log the body value  in thr handler function
//test your working 

--------------------------------------------------------------------

//Storing data with JSON.
JS is single threaded, Non blocking....

Task Queue.

setTimeout(func1,0) can be used to defer a function until all the pending tasks have been executed.


setTimeout(function timeout){
    console.log("click the button");
},5000);     

The call stack is a data structure that stores the function calls and their corresponding execution contexts. The event queue, on the other hand, is a data structure that stores events and their corresponding callback functions.

//Very important.
     setTimeout(function timer(){
        console.log('i clicked the button');
    },10000);
    console.log("code with rahul");
    setTimeout(function timeout() {
     console.log('click with rahul');
    },5000);
    console.log("welcome to channel");


--------------------------------------------------------------

//storing data with JSON 
each object represents a NODE

//JSON -> JS object notation 
const book={
    title:"Harry Potter and the Philosopher's Stone",
    author:"J.K. Rowling"
  } // now data stored as JS object
// goal is to convert into JSON 

const bookJSON=JSON.stringify(book)
console.log(bookJSON)
//bookJSON is string not an object
----------------------------
//JSON -> JS object notation 
const fs=require("fs");  //This is a statement in JavaScript that imports the built-in Node.js module fs (which stands for "file system"). The fs module provides functionality for working with the file system, allowing you to read and write files, create and remove directories, and more. By using require(), you can make the module available in your code and access its methods and properties.
const book={
    title:"Harry Potter and the Philosopher's Stone",
    author:"J.K. Rowling"
  } // now data stored as JS object
// goal is to convert into JSON 

const bookJSON=JSON.stringify(book)
fs.writeFileSync('1-JSON.json', bookJSON) 
// console.log(bookJSON)  //takes JSON object and gives JSON string back

// const temp=JSON.parse(bookJSON)
// console.log(temp.author) // to get actual authorvalue
// //bookJSON is string not an obbject
//challenge was to work with JSON and file system 
// LOad and parse the JSON data
//Change the name and property usning ur info
// Stringify rhe changed object and overwrite the original data

--------------------------------------------------------------------------------------------------
//Asynchoronous

Ajax is Asynchronous Javascript and XML. Ajax is a user experience
we can communicate with server without page reload using Ajax.

Types of Ajax
//Asynchronous Ajax->doesnt wait. 
//Synchornous Ajax->wait until one task doesnt get completed.
Page reaload ni hota, URls ni banenge.
example-> facebook like and comments.
country state and ciy dropdown.


function click_here(){
    jQuery.ajax({
        url:'get.php',
        type:'post',
        success: funciton (result){
        alert(result);
}
}
});



<php
echo "Hello1";
?>
 
------------------------------------------------------------------
const request = require('request');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=d28f8181779e849afe31a5057723352e';
request({url:url, json:true}, (error,response) => {
  console.log(response.body.main)
})
-------------------------------------------------------
    const request = require('request');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=d28f8181779e849afe31a5057723352e';
request({url:url, json:true}, (error,response) => {
  console.log('it is currently'+response.body.currently.temperature+'degrees out.There is a'+response.body.currently.precipProbability+'%chance of rain')
})

------------------------------
JSON -> JavaScript object notation
text based format
Light wight
does not support commextns and namespaces

XML->extensible markup language
markup language
Heavier
supports cmnst and namespaces.

//Javascript Object.
var person ={firstname:"rahul",lastName:"garg:);
         alert(person.firstName+""+person.lastName);    
--------------------------------------
//String number boolean array object null datas are allowed in JSON
..JSON is language independent
Human Readable Format
Easy to organize and access.
light-weight.
//cannot use it for transfer video, audio, images.
//API 


//Mapbox.

const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}
add(1,4,(sum)=>{
    console.log(sum)
})
 








    
    




    




    



















    
    
    
    
    
    
    
    
    
    


                       
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
