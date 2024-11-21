let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "89.117.7.154",
    database:"u553439813_serte",
    user: "u553439813_sopor",
    password:"9KX$2mnh"
})

conexion.connect(function (err) {
    if(err){
        throw err
    } else{
        console.log("Conexion Existosa")
    }
    
});

conexion.end();