const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mern:12345@cluster0.jnluj.mongodb.net/sparks?retryWrites=true&w=majority",
{useNewUrlParser:true}).then(() => {
  console.log('Database connection successful');
}).catch( (e) => {
  console.log(e);
});
