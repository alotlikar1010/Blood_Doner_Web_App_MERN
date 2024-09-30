const express = require("express")

const app = express()


//port
const PORT =  8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In Aniket ModeOn Port ${PORT}`
      .bgBlue.white
  );
});