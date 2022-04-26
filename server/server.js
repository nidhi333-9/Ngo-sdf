const express = require('express');
const app = express();
const port = 3527;

app.get('/', (request, response) => {
    response.send('<h1>Hello SDF</h1>');
})
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})
