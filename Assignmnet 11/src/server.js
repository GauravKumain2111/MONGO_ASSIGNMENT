const app = require('./app');
const db = require('./utils/db');
require('dotenv').config();

// Connect to database
db.connect('mongodb+srv://gauravkashish96:gokukumar123@cluster0.bst52.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
