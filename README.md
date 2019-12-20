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

`POST /api/book/:id`

    curl -i --header "Content-Type: application/json" \
      --request POST \
      --data '{"title":"xyz","rating":"3"}' \
      http://localhost:8080/api/book

### Response

	HTTP/1.1 201 Created
	X-Powered-By: Express
	Content-Type: application/json; charset=utf-8
	Content-Length: 145
	Date: Fri, 20 Dec 2019 17:09:10 GMT
	Connection: keep-alive

{"status":"success","message":"Book Added","data":{"book_id":"387181ef-e19c-4f88-ae68-a9fcd248edc0","title":"xyz","rating":3,"description":null}}


## Get a specific Book

### Request

`GET /api/book/:id`

    curl -i -H 'Accept: application/json' http://localhost:8080/api/book/387181ef-e19c-4f88-ae68-a9fcd248edc0

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Content-Type: application/json; charset=utf-8
	Content-Length: 145
	Date: Fri, 20 Dec 2019 17:15:44 GMT
	Connection: keep-alive

{"status":"success","message":"Book Found","data":{"book_id":"387181ef-e19c-4f88-ae68-a9fcd248edc0","title":"xyz","description":null,"rating":3}}

## Change a Books's state

### Request

`PUT /api/book/:id`

    curl -i --header "Content-Type: application/json" \
      --request PUT \
      --data '{"title":"test"}' \
      http://localhost:8080/api/book/387181ef-e19c-4f88-ae68-a9fcd248edc0

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Content-Type: application/json; charset=utf-8
	Content-Length: 69
	Date: Fri, 20 Dec 2019 17:24:27 GMT
	Connection: keep-alive

	{"status":"success","message":"Book updated","data":{"title":"test"}}


## Delete a Book

### Request

`DELETE /api/book/:id`

    curl -i --header "Content-Type: application/json" \
      --request DELETE \
      http://localhost:8080/api/book/387181ef-e19c-4f88-ae68-a9fcd248edc0

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Content-Type: application/json; charset=utf-8
	Content-Length: 45
	Date: Fri, 20 Dec 2019 17:25:35 GMT
	Connection: keep-alive

	{"status":"success","message":"Book deleted"}