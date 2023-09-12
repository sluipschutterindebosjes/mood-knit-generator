npm install

npm start

docker build -t knitting-pattern-generator .
docker run -p 8080:8080 -d knitting-pattern-generator
