'use strict';

const invent = require('../models/inventory');
var total,cuquantity;
exports.fetchinventory = (itemname,quantity,number) => {
  return new Promise((resolve, reject) => {

    invent.find(
        {
            itemname:itemname
        }
    )
    .then((requests) => {
     
        console.log("requests ----inventoru data",requests)
         cuquantity =requests[0]._doc.cuquantity;
        if(number === 1){
                total =quantity +cuquantity;
                console.log("total===========>",total)
          return  resolve({status: 201, total: total})
         }
        })
        
    .catch(err => {

        if (1===1) {
            total =cuquantity- quantity;
          return  reject({status: 200, total: total});

        } else {

          return  1;
        }
    });
 
});
}