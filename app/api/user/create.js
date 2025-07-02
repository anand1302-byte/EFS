export default function handler(req, res) {

    if (req.method === 'POST') {
        try {
            const data = req.body.json();
            res.status(200).json({ message: 'User created successfully', data });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }

}