# APLI REST

Este proyecto se basa en crear una **API REST** con diferentes tecnologías como pueden ser **Sequelize** y  **Express**. Utilizamos los endpoint para recuperar información.

## Tecnologías

 - [NODEJS](https://nodejs.org/es/)
 - [SEQUELIZE](https://sequelize.org/)
 - [EXPRESS](https://www.express.com/)
 - [JAVASCRIPT](https://developer.mozilla.org/es/docs/Web/JavaScript)
 - [MYSQL2](https://www.npmjs.com/package/mysql2)

## INSTALACIÓN

A continuación detallamos la instalación de los componentes **NECESARIOS**.

|Tecnologías| Instalación |
|--|--|
| Nodejs | `npm init` |
| Express | `npm install express` |
| Sequelize| `npm install sequelize` |
| Sequelize-cli| `npm install -g sequelize-cli` |
| Mysql2| `npm install mysql2` |



## SEQUELIZE /SEQUELIZE-CLI

La librería sequelize-cli es utilizada para generar las carpetas y archivos necesarios para generar la **API REST**.

|Función| Comandos |
|--|--|
| Generar  | `sequelize init` |
| Generar DB  | `sequelize db:create` |
| Crear tablas| `sequelize model:generate --name 'NombreTabla' --attributes 'Atributos'` |
| Migrar tablas  | `sequelize db:migrate` |


## EXPRESS

De esta manera, con  la ayuda de **EXPRESS** levantamos el servidor.

    const express = require('express');
    const app = express();
    const PORT = 3000;
    app.listen(PORT, () => console.log('Server running on port' + PORT));

## TEST
Con `node index.js` ejecutamos la prueba.

## Autor
**DAVID MORENO CAPEL**