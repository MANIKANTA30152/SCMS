const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.8jalnto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect(async (err) => {
    if (err) {
        console.error('Error connecting to the database', err);
        return;
    }
    console.log('Connected to MongoDB');
});

const db = client.db('Sec32db');
const col = db.collection('details');

app.get('/home', (req, res) => {
    res.send("Home Page");
});

app.post('/insert', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const result = await col.insertOne({ fn: req.body.fn, password: hashedPassword });
        console.log('Inserted document with id:', result.insertedId);
        res.send("Successfully submitted");
    } catch (error) {
        console.error('Error during sign up:', error);
        res.status(500).send("Error submitting data");
    }
});

app.post('/delete', async (req, res) => {
    try {
        const usernameToDelete = req.body.un;
        const result = await col.deleteOne({ fn: usernameToDelete });

        if (result.deletedCount === 1) {
            res.send("User deleted successfully");
        } else {
            res.send("No user found to delete");
        }
    } catch (error) {
        console.error('Error during deletion:', error);
        res.status(500).send("Error during deletion");
    }
});

app.post('/check', async (req, res) => {
    try {
        const user = await col.findOne({ 'fn': req.body.un });
        if (user) {
            const passwordMatch = await bcrypt.compare(req.body.pw, user.password);
            if (passwordMatch) {
                res.send("Login Success");
            } else {
                res.send("Login Failed");
            }
        } else {
            res.send("Login Failed");
        }
    } catch (error) {
        console.error('Error checking login:', error);
        res.status(500).send("Error checking login");
    }
});

app.get('/showall', async (req, res) => {
    try {
        const result = await col.find().toArray();
        res.send(result);
    } catch (error) {
        console.error('Error retrieving records:', error);
        res.status(500).send("Error retrieving records");
    }
});

app.post('/update', async (req, res) => {
    try {
        const { un, pw, new_pw } = req.body;
        const user = await col.findOne({ 'fn': un, 'password': pw });

        if (user) {
            const result = await col.updateOne(
                { 'fn': un },
                { $set: { 'password': new_pw } }
            );

            if (result.modifiedCount === 1) {
                res.send("Password updated successfully");
            } else {
                res.send("Failed to update password");
            }
        } else {
            res.send("Invalid username or password");
        }
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).send("Error updating password");
    }
});

const PORT = process.env.PORT || 8081 ;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});