# User API Spec

## Get User

Endpoint: GET /api/v1/user

Request Header :

- Authorization: "Bearer {{token}}"

Response Body (Success):

```json
{
  "data": {
    "email": "bas_ebuddy_test@gmail.com",
    "address": ""
  }
}
```

Response Body (Failed):

```json
{
  "message": "Reponse must be valid"
}
```

## Update User

Endpoint: PUT /api/v1/user

Request Header:

- Authorization: "Bearer {{token}}"

Request Body:

```json
{
  "email": "bas_ebuddy_test@gmail.com",
  "address": "kilang street, Singapore"
}
```

Response Body (Success):

```json
{
  "data": {
    "email": "bas_ebuddy_test@gmail.com",
    "address": "kilang street, Singapore"
  }
}
```

Response Body (Failed):

```json
{
  "message": "Reponse must be valid"
}
```
