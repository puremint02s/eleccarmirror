const app = require("./src/app");
require("./src/db");

app.listen(3000, () => {
    console.log("✅Server is running on port 3000");
});