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

    
    
    
    
    
    
    
    
    


                       
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
