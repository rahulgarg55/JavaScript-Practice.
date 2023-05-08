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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
