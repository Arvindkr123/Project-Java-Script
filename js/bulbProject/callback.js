// Scenario
/*
    User Register
    Send email welcome
    login
    Get User Data
    display user data
 */

// function waitforThreeSeconds(){
//     let ms = 3000+new Date().getTime();
//     while(new Date() < ms){

//     }
// }

// function Register(){
//     waitforThreeSeconds();
//     console.log("Register end");
// }

// function sendEmail(){
//     waitforThreeSeconds();
//     console.log("Email end");
// }

// function login(){
//     waitforThreeSeconds();
//     console.log("Login End");
// }

// function getUserData(){
//     waitforThreeSeconds();
//     console.log("Got user Data");
// }

// function displayUserData(){
//     console.log("User data displayed");
// }

// Register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("Other application work");


// function waitforThreeSeconds(){
//     let ms = 3000+new Date().getTime();
//     while(new Date() < ms){

//     }
// }

// function Register(callback){
//     setTimeout(()=>{
//         console.log("Register end");
//         callback();
//     },1000)
// }

// function sendEmail(callback){
//     setTimeout(()=>{
//         console.log("Email end");
//         callback();
//     },2000)
// }

// function login(callback){
//     setTimeout(()=>{
//         console.log("Login End");
//         callback();
//     },3000)
// }

// function getUserData(callback){
//     setTimeout(()=>{
//         console.log("Got user Data");
//         callback();
//     },4000)
// }

// function displayUserData(){
//     setTimeout(()=>{
//         console.log("User data displayed");
//     },1000)
// }


// Register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             });
//         });
//     });
// });

// console.log("Other application work");
function Register(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // return reject('while registering')
            console.log("Register end");
            resolve('Success');
        },1000);
    });
}

function sendEmail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Email end");
            resolve();
        },2000)
    })
}

function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Login End");
            resolve();
        },3000)
    })
}

function getUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Got user Data");
            resolve();
        },4000)
    })
}

function displayUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("User data displayed");
            resolve();
        },1000)
    })
}


// Register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             });
//         });
//     });
// });

// Register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err)=>{
//         console.log('Error',err);
//     })

async function authenticate(){
   try{
        const ans = await Register();
                    await sendEmail();
                    await login();
                    await getUserData();
                    await  displayUserData();
                    console.log(ans);
    }catch(err){
        console.log('Error',err);
        throw new Error(); 
   }
}

authenticate().then(()=>{
    console.log("All set");
})
.catch((err)=>{
    console.log("Error". err);
})

console.log("Other application work");
