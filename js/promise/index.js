// const cart =["shoes", "pants","kurta"]

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId, function(paymentInfo){
//         showOrderSummary(paymentInfo, function(){
//             updateWalletBalance();
//         });
//     });
// });

// // const promise = createOrder(cart);
// createOrder(cart)
//     .then((orderId) => proceedToPayment(orderId))
//     .then((paymentInfo)=> showOrderSummary(paymentInfo))
//     .then((paymentInfo)=>updateWalletBalance(paymentInfo));
// createOrder(cart)
//     .then(function(orderId){
//       return  proceedToPayment(orderId);
//     })
//     .then(function(paymentInfo){
//         return showOrderSummary(paymentInfo);
//     })
//     .then(function(paymentInfo){
//        return updateWalletBalance(paymentInfo);
//     });
// createOrder(cart)
//     .then(function(orderId){
//       return  proceedToPayment(orderId);
//     })
//     .then(function(paymentInfo){
//         return showOrderSummary(paymentInfo);
//     })
//     .then(function(paymentInfo){
//        return updateWalletBalance(paymentInfo);
//     });

// promise is an object repersenting the eventual completion or failure of
// an asynchronus operation

// // {data : undefined} after execute some line it will fill the data
// // {data : orderDetails}

// // we attach then function to promise
// promise.than(function(orderId){
//     proceedToPayment(orderId);
// });

// const GITHUB_API = "https://api.github.com/users/arvindkr123";

// const user = fetch(GITHUB_API);
// console.log(user);
// user.then(function(data){
//     console.log(data);
// })

const cart = ['shoes', "pants", "kurta"]

const promise = createOrder(cart); // order id
console.log(promise);

promise
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .catch(function (err){
        console.log(err.message);
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })

// producer part

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // create oreder
        // validate cart
        // order id

        if(!ValidateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }

    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment successfull")
    });
}

function ValidateCart(cart){
    return true;
    // return false;
}
