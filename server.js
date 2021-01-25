const express = require('express')
const { resolve } = require('path'); 
const { execFile } = require('child_process');

const app = express()

app.get('/:com/:lang/:test', function (req, res) {

    const { com, lang, test} = req.params;
    const testScript = resolve(`${com}/${lang}/${test}.sh`);

    console.log(`Running ${com}-${lang}: ${test}`);
    console.log(`  script: ${testScript}`);
    
    execFile(testScript, function(error, stdout, stderr){
        if(error) {
            res.status(400).json({ stdout, stderr })
        } else {
            res.json({ stdout, stderr })
        }
    });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))