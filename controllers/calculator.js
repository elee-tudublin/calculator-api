// Import router package 
const router = require('express').Router(); 


/* Hand get requests for '/' 
/* this is the index or home page 
*/ 
router.get('/', (req, res) => { 

    // set content type of response body in the headers 
    res.setHeader('Content-Type', 'application/json'); 

    // Send a JSON response - this app will be a web api so no need to send HTML 
    //res.end(JSON.stringify({message: 'This is the home page'})); 
    res.json({content: 'This is the default route for calculator.'}); 

});

router.get('/add', (req, res) => { 

    let numA = Number(req.query.a);
    let numB = Number(req.query.b);

    const answer = numA + numB;

    const addResult = {
        a: numA,
        b: numB,
        operator: "+",
        answer: answer
    }
        // Send a JSON response - this app will be a web api so no need to send HTML 
        //res.end(JSON.stringify({message: 'This is the home page'})); 
        res.json(addResult); 
    });

    router.get('/subtract', (req, res) => { 

        let numA = Number(req.query.a);
        let numB = Number(req.query.b);
    
        const answer = numA - numB;
    
        const Result = {
            a: numA,
            b: numB,
            operator: "-",
            answer: answer
        }
            // Send a JSON response - this app will be a web api so no need to send HTML 
            //res.end(JSON.stringify({message: 'This is the home page'})); 
            res.json(Result); 
        }); 

// export
module.exports = router; 