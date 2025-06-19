# Comedy API Server 🎭

A hilarious Node.js Express server that serves random jokes, funny thoughts, puns, and dad jokes. Perfect for adding some humor to your day or integrating comedy content into your applications!

## Features

- 🎪 **Multiple Comedy Categories**: Jokes, thoughts, puns, and dad jokes
- 🚀 **RESTful API**: Clean JSON responses with metadata
- 📊 **Humor Metrics**: Each response includes fun ratings and timestamps
- 🎯 **Easy Integration**: Simple HTTP GET requests
- 😄 **Extensive Content**: Dozens of jokes and funny content
- 🔧 **Development Ready**: Includes nodemon for auto-reload

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
# Production mode
npm start

# Development mode (with auto-reload)
npm run dev
```

4. Visit `http://localhost:3100` to see the API in action!

## API Endpoints

### Base URL
```
http://localhost:3100
```

### Available Routes

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/` | GET | Welcome page with API info | API documentation |
| `/joke` | GET | Random joke | Classic one-liner jokes |
| `/thought` | GET | Random funny thought | Humorous observations |
| `/pun` | GET | Random pun | Groan-worthy wordplay |
| `/dad-joke` | GET | Random dad joke | Classic dad humor |

## Example Responses

### GET /joke
```json
{
  "type": "joke",
  "content": "Why don't scientists trust atoms? Because they make up everything!",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "laughLevel": 8,
  "message": "Hope this made you smile! 😊"
}
```

### GET /thought
```json
{
  "type": "funny thought",
  "content": "The early bird might get the worm, but the second mouse gets the cheese.",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "wisdomLevel": 7,
  "message": "Deep thoughts... or maybe not so deep! 🤔"
}
```

### GET /pun
```json
{
  "type": "pun",
  "content": "I wondered why the baseball kept getting bigger. Then it hit me.",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "groanLevel": 9,
  "message": "Warning: Puns may cause excessive eye-rolling! 🙄"
}
```

### GET /dad-joke
```json
{
  "type": "dad joke",
  "content": "Hi hungry, I'm Dad!",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "dadLevel": 11,
  "message": "Classic dad humor at its finest! 👨‍👧‍👦"
}
```

## Usage Examples

### Using curl
```bash
# Get a random joke
curl http://localhost:3100/joke

# Get a funny thought
curl http://localhost:3100/thought

# Get a pun
curl http://localhost:3100/pun

# Get a dad joke
curl http://localhost:3100/dad-joke
```

### Using JavaScript (fetch)
```javascript
// Get a random joke
fetch('http://localhost:3100/joke')
  .then(response => response.json())
  .then(data => console.log(data.content));

// Get a dad joke
fetch('http://localhost:3100/dad-joke')
  .then(response => response.json())
  .then(data => console.log(data.content));
```

### Using Python (requests)
```python
import requests

# Get a random pun
response = requests.get('http://localhost:3100/pun')
joke_data = response.json()
print(joke_data['content'])
```

## Project Structure

```
comedy-api-server/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── README.md         # This file
└── node_modules/     # Dependencies (after npm install)
```

## Configuration

The server runs on port **3100** by default. To change the port, modify the `PORT` constant in `server.js`:

```javascript
const PORT = 3100; // Change this to your desired port
```

## Development

### Adding New Content

To add more jokes, thoughts, puns, or dad jokes, edit the respective arrays in `server.js`:

```javascript
const jokes = [
  // Add your jokes here
  "Your new joke here!"
];

const thoughts = [
  // Add your funny thoughts here
  "Your funny observation here!"
];
```

### Adding New Routes

Follow the existing pattern to add new comedy categories:

```javascript
app.get('/your-new-route', (req, res) => {
  const randomContent = getRandomItem(yourContentArray);
  res.json({
    type: "your content type",
    content: randomContent,
    timestamp: new Date().toISOString(),
    // Add your custom metadata
  });
});
```

## Error Handling

The API includes a humorous 404 handler for undefined routes:

```json
{
  "error": "Route not found! 🤷‍♂️",
  "message": "Looks like you're lost! But hey, at least you found our 404 page!",
  "suggestion": "Try visiting our home page at '/' for available routes",
  "joke": "Why did the HTTP request go to therapy? Because it had too many issues! (Error 404: Humor not found)"
}
```

## Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server with nodemon for development

## Dependencies

- **express**: Web framework for Node.js
- **nodemon** (dev): Auto-restart server during development

## Contributing

Feel free to contribute more jokes, improve the API, or add new features! Some ideas:

- Add categories or tags for jokes
- Implement joke rating system
- Add joke search functionality
- Create joke of the day feature
- Add more comedy categories

## License

MIT License - Feel free to use this for your projects!

## Fun Facts

- 🎭 Contains over 40 pieces of comedy content
- 😂 Guaranteed to make you smile (results may vary)
- 🤖 Built with love and a sense of humor
- 📈 Humor levels are scientifically calculated (not really)

---

**Remember**: Laughter is the best medicine, but if you laugh for no reason, you might need actual medicine! 😄

Enjoy the laughs! 🎉
