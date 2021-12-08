////LATIHAN 7.9 - BODY PARSER
// var http = require('http');
// var express = require('express');
// var app = express()
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// var persons = []
// app.post('/person', (req, res)=>{
//     persons.push(req.body)
//     res.json(req.body)
// })
// app.get('/person', (req, res)=>{
//     res.json(persons) 
// })
// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 







////BODY PARSER
var http = require('http');
var express = require('express');
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var cars = ['Toyota', 'Honda']

//routing url
app.get('/', (req,res)=>{
    res.end('Konten dari method GET')
})

app.get('/home', (req,res)=>{
    res.end('Ini Route URL Home')
})
  
app.get('/data', (req, res)=>{
    res.json(cars) 
    // res.status(200).json(cars) 
    // res.status(400).json(cars) //status 400/404 = error 
})

app.post('/data', (req, res)=>{
    var mobil = req.body.mobil
    cars.push(mobil)
    res.end("Data Berhasil Ditambahkan") 
})


app.get('/data/:id', (req,res)=>{
    var index = req.params.id
    res.end(cars[index])
}) 

app.listen(8000, ()=>{
    console.log('Server is running on port 8000')
}); 















////LATIHAN 7.8 - JSON
// var data = [];
// app.get('/data', (req, res)=>{
//     res.json(data) 
// })

// app.post('/data', (req, res)=>{
//     data.push(Date.now())
//     res.json(data) 
// })






////JSON
// var express = require('express');
// var app = express()

// var cars = ['Toyota', 'Honda']

// //routing url
// app.get('/', (req,res)=>{
//     res.end('Konten dari method GET')
// })

// app.get('/home', (req,res)=>{
//     res.end('Ini Route URL Home')
// })
  
// app.get('/data', (req, res)=>{
//     res.json(cars) 
//     // res.status(200).json(cars) 
//     // res.status(400).json(cars) //status 400/404 = error 
// })

// app.post('/data', (req, res)=>{
//     cars.push("New Car")
//     res.end("Data Berhasil Ditambahkan") 
// })
    

// app.listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 








// ////LATIHAN 7.7 - ROUTE PARAMETERS
// app.get('/users/:userId/books/:bookId', (req, res)=>{
//     res.end('req.params') //res.send
// })





// ////LATIHAN 7.6 - GET
// app.get('/home', (req, res)=>{
//     res.end('Home')
// })

// app.get('/about', (req,res)=>{
//     res.end('About')
// })







// ////LATIHAN 7.5 - METHOD ROUTE
// var http = require('http');
// var express = require('express');
// var app = express()

// app.get('/', (req,res)=>{
//     res.end('Konten dari method GET')
// })

// app.post('/', (req,res)=>{
//     res.end('Konten dari method POST')
// })
    
// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 







////LATIHAN 7.4 - EXPRESS DENGAN MENYEMATKANNYA KE DALAM MODULE HTTP
// var http = require('http');
// var express = require('express');
// var app = express()

// app.get('/', (req,res)=>{
//     res.end('Konten dari method GET')
// })
    
// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 








// ////LATIHAN 7.3 - EXPRESS
// var express = require('express');
// var app = express()

// //routing url
// app.get('/', (req,res)=>{
//     res.end('Konten dari method GET')
// })

// app.get('/home', (req,res)=>{
//     res.end('Ini Route URL Home')
// })
    
// app.listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 










// ////LATIHAN 7.2 - ATTRIBUTE URL PADA REQUEST HTTP
// var http = require('http');

// http.createServer( (req, res) => {
//     if(req.url == '/home')
//         res.write('<p>Konten Home</p>')
//     else if(req.url =='/product')
//         res.write('<p>Konten Product</p>')    
//     else if(req.url =='/order')
//         res.write('<p>Konten Order</p>')  
//     else if(req.url =='/order')              
//         res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>');
//     else
//         res.write('<h1>404</h1>')
//     res.end();//kalau dimatikan, yg terjadi adalah prosesnya loading terus (msih merequest) dan gak akan selesai. 

// }).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); 







////LATIHAN 7.1 - HTTP
// var http = require('http');

// //create a server object:
// http.createServer( (req, res) => {
//     res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>');
// //write a response to the client
//     res.end(); //end the response
// }).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// }); //the server object listens on port 8000





////CONTOH
// var http = require('http');

// http.createServer( (req, res) => {
//     res.write('Hello World');
//     res.end(); 
// }).listen(8000, ()=>{
//     console.log('Server is running on port 8000') //pemberitahuan kalau udh jln
// });