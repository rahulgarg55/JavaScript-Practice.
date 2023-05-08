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
we can write  yargs.parse() also in place of  
console.log(yargs.args)

    
    

    



















    
    
    
    
    
    
    
    
    
    


                       
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
