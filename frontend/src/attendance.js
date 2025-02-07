const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/student/savestudent', (req, res) => {
  try {
    // Simulate handling the request
    const student = req.body;  // Assuming req.body contains the student data
    if (!student.name || !student.email) {
      throw new Error('Invalid student data');
    }
    // Handle the request logic here
    res.json({ message: 'Student saved successfully' });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: error.message });
  }
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
