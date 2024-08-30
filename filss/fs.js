
const fs=require("fs");

// write file

// fs.writeFile("message.txt","have a good day",(error)=>{
//     if(error) {
//         console.log("unable tp conect")
//     }
// })



// appendFile

// fs.appendFile("message.txt","hello team",(error)=>{
// if(error){
//     console.log("error")
// }
// })

// read file

// fs.readFile("message.txt","utf-8",(error,data)=>{
//     if (error){
//         console.log("unable to conect");
//     }
//     else{
//         console.log("data")
//     }
// })


// delete data

// fs.unlink("message.txt",(error)=>{
//     if(error){
//         console.log("unable to conect")
//     }
// })


// createfolder

// fs.mkdir("squee",(error)=>{
//     if(error){
//         console.log("unable to connect")
//     }
// })




// fetch data from folder

fs.readdir("squee",(error,data)=>{
    if(error){
        console.log("unable to connect")
    }
    else{
        console.log(data)
    }
})