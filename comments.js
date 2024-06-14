// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a router
const router = express.Router();
// Create a path
router.get('/comments', (req, res) => {
    res.send('Comments page');
});
// Use the router
app.use('/admin', router);
// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
// Open http://localhost:3000/admin/comments in your browser 
