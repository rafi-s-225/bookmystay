# BookMyStay

BookMyStay is a simple full-stack web application where users can explore travel stay listings, add their own listings, and post reviews.

## Features

- View all stay listings
- Add new listings
- Edit and delete listings
- Add reviews to listings
- Delete reviews
- Responsive UI using Bootstrap
- MongoDB database integration

## Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

## Installation

1. Clone the repository

```bash
git clone https://github.com/rafi-s-225/bookmystay.git
```

2. Move into the project directory

```bash
cd bookmystay
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file and add the required environment variables

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
```

5. Start the server

```bash
node app.js
```

6. Open in browser

```bash
http://localhost:8080
```

## Project Structure

```bash
bookmystay/
│
├── models/
├── routes/
├── views/
├── public/
├── controllers/
├── utils/
├── app.js
└── package.json
```

## Future Improvements

- Booking functionality
- Search and filters
- Image upload improvements
- Payment integration
