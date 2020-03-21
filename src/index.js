const express = require("express");
const app = express();

//Configuración
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () =>{
    console.log('El servidor está iniciado en el puerto', app.get('port'));
});