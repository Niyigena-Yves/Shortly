# Run start command for the client folder
cd client
npm start 

# Run start command for the server folder
cd server
npm run dev 

#Using POST in Postman to create short URL
http://localhost:4000/api/uri

{
    "destination": "https://example.com"
}

#Using GET in Postman to view destination of created short URL
http://localhost:4000/short_url_created


#Using GET in Postman to view analytics of clicked short URLs
http://localhost:4000/api/analytics

#Test the application using docker 

docker-compose up -d --build




