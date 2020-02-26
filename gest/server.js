var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
const {MongoClient, ObjectID} = require('mongodb')
  
var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
//  var Schema = mongo.Schema;  
  
// var UsersSchema = new Schema({      
//  name: { type: String   },       
//  address: { type: String   },   
//  range:{type:Number},
//  description:{type:String}
// },{ versionKey: false });  


// var model = mongo.model('users', UsersSchema, 'users');

  
// app.post("/api/SaveUser",function(req,res){   
//  var mod = new model(req.body);  
//  if(req.body.mode =="Save")  
//  {  
//     mod.save(function(err,data){  
//       if(err){  
//          res.send(err);                
//       }  
//       else{        
//           res.send({data:"Record has been Inserted..!!"});  
//       }  
//  });  
// }  
// else   
// {  
//  model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address, range: req.body.range, description: req.body.description},  
//    function(err,data) {  
//    if (err) {  
//    res.send(err);         
//    }  
//    else{        
//           res.send({data:"Record has been Updated..!!"});  
//      }  
//  });  
  
  
// }  
//  }) 

//  app.post("/api/deleteUser",function(req,res){      
//     model.remove({ _id: req.body.id }, function(err) {    
//      if(err){    
//          res.send(err);    
//      }    
//      else{      
//             res.send({data:"Record has been Deleted..!!"});               
//         }    
//  });    
//    })  

//  app.get("/api/getUser",function(req,res){  
//     model.find({},function(err,data){  
//               if(err){  
//                   res.send(err);  
//               }  
//               else{                
//                   res.send(data);  
//                   }  
//           });  
//   }) 
 
// app.listen(8080, function () {  
    
//  console.log('Example app listening on port 8080!')  
// }) 


 var Schema = mongo.Schema;  
 var Schema1 = mongo.Schema;

var UsersSchema = new Schema({      
 name: { type: String   },       
 address: { type: String   },   
 range:{type:Number},
 description:{type:String}
},{ versionKey: false });  

var EntitySchema = new Schema1({
  class : {type: String},
  property : {type: String},
  entity:{type:String}, 
  data:{type:Number}
});

var model1 = mongo.model('entity', EntitySchema,'entity');  
var model = mongo.model('users', UsersSchema, 'users');

  
app.post("/api/SaveUser",function(req,res){   
 var mod = new model(req.body);  
 if(req.body.mode =="Save")  
 {  
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });  
}  
else   
{  
 model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address, range: req.body.range, description: req.body.description},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send({data:"Record has been Updated..!!"});  
     }  
 });  
  
  
}  
 }) 
 
 app.post("/api/SaveUser1",function(req,res){   
  var mode = new model1(req.body);  
  if(req.body.mode =="Save")  
  {  
     mode.save(function(err,data){  
       if(err){  
          res.send(err);                
       }  
       else{        
           res.send({data:"Record has been Inserted..!!"});  
       }  
  });  
 }  
 else   
 {  
  model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address, range: req.body.range, description: req.body.description},  
    function(err,data) {  
    if (err) {  
    res.send(err);         
    }  
    else{        
           res.send({data:"Record has been Updated..!!"});  
      }  
  });  
   
   
 }  
  })
  
 app.post("/api/deleteUser",function(req,res){      
    model.remove({ _id: req.body.id }, function(err) {    
     if(err){    
         res.send(err);    
     }    
     else{      
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })  

   app.post("/api/deleteUser1",function(req,res){      
    model1.remove({ _id: req.body.id }, function(err) {    
     if(err){    
         res.send(err);    
     }    
     else{      
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })
  
  
  
 app.get("/api/getUser",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  }) 
  
  app.get("/api/getUser1",function(req,res){  
    model1.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
}) 
