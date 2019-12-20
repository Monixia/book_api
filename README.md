# Book API test


# Installation

## Requirements
- NodeJS
- npm

## Installing
```bash
git clone https://github.com/Monixia/book_api.git
cd book_api
npm install
npm install -g nodemon

```

# Usage

set database configuration in ```/api/server/src/config/config.js```

## Development

Run
```
npm run dev
```


# REST API

The REST API to the book_api server

## Get list of Books

### Request

`GET /api/book/`

    curl -i -H 'Accept: application/json' http://localhost:8080/api/book/

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Content-Type: application/json; charset=utf-8
	Content-Length: 46
	Date: Fri, 20 Dec 2019 17:00:52 GMT
	Connection: keep-alive

{"status":"success","message":"No Book found"}

## Create a new Book

### Request

`POST /api/book/`

    curl -i --header "Content-Type: application/json" \
      --request POST \
      --data '{"title":"xyz","rating":"3"}' \
      http://localhost:8080/api/book

### Response

	HTTP/1.1 201 Created
	X-Powered-By: Express
	Content-Type: application/json; charset=utf-8
	Content-Length: 145
	ETag: W/"91-igZavyqm/A9yuruzBR2BKD9XghU"
	Date: Fri, 20 Dec 2019 17:09:10 GMT
	Connection: keep-alive

{"status":"success","message":"Book Added","data":{"book_id":"387181ef-e19c-4f88-ae68-a9fcd248edc0","title":"xyz","rating":3,"description":null}}
