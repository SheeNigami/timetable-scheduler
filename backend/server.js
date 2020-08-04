var app = require('./app.js');
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log("App hosted at localhost: " + 3000);
});