# Be The Hero

This project was developed for studies. It should not be used in production

## Installation

Clone repository

```bash
git clone https://github.com/votanruchel/be-the-hero/ <folder>
```
and install dependencies

If use Yarn
```bash
yarn
```
else use npm
```bash
npm install
```

## API Usage

Register a new ONG

Method: POST<br/>
Send for Route: '/ongs'<br/>
```javascript
  body: {
	"name": "APAD3",
	"email": "contact@contato.com",
	"whatsapp": "54545454544",
	"city": "Rio do Sul",
	"uf": "SC"
}
```
Register a new Incident
Method: POST<br/>
Send for Route: '/incident'<br/>
```javascript
  headers:{
    Authorization: <ong_id>
  }
  body: {
	"title": "Test Incident",
	"description": "Description of test incident",
	"value": 440
}
```

Delete Incident
Method: DELETE<br/>
Send for Route: '/incident/:incident_id'<br/>
```javascript
  headers:{
    Authorization: <ong_id>
  },
  params: {
	"id": <incident_id>,
}
```

List ONGS<br/>
Method: GET 
```javascript
http://127.0.0.1:3333/ongs
```

List Incidents<br/>
Method: GET 
```javascript
http://127.0.0.1:3333/incidents
```
If use pagination
```javascript
http://127.0.0.1:3333/incidents?page=<page_number>
```

Basic Login<br/>
Method: POST
```javascript
body:{
  "id": "cef3fda8"
}
```

See all incidents of logged ONG
Method: GET<br/>
Send for Route: '/profile'<br/>
```javascript
headers:{
  Authorization: <ong_id>
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. Thanks

## Author

[**Votan Ruchel**](https://github.com/votanruchel/)

**Mobile Screen Home** <br/>
![ ](/screens/Home-MOBILE.png) <br/>

**Desktop Version Home (After login)** <br/>
![ ](/screens/Profile-WEB.png)
