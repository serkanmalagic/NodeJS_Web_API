const express = require('express');

const app = express();

app.use((req, res, next) => {

    res.status(200).json({
        message : 'serkan',
        id : "s00670124",
        name : "serkan",
        subobject : {
            tc : "asdasd"
        }
        
    });

});

module.exports=app;