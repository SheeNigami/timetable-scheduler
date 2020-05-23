# API Documentation

This document allows you to define your API schema.

Each API should include

1. HTTP Method
2. Endpoint
3. Request body/Parameters
4. Response body
5. Error Body
6. Sample Request
7. Sample Response
8. Sample Error

> Errors and it's corresponding code can be defined by yourself. You need not follow HTTP errors.

## Get All Data (Lectures)

| attribute   | value       |
| ----------- | ----------- |
| HTTP Method | GET         |
| Endpoint    | /basic/data |

### Parameters

| parameter | datatype        | example   |
| --------- | --------------- | --------- |
| NIL       | NIL             | NIL       |

### Response Body

```json
[
    {
        "lectureId": "1234567894",
        "facultyId": "1234567890",
        "semesterId": "1234567890",
        "dayOfWeek": "2",
        "startTime": "1000",
        "endTime": "1030"
    },
    {
        "lectureId": "2234567893",
        "facultyId": "1234567890",
        "semesterId": "1234567890",
        "dayOfWeek": "3",
        "startTime": "1000",
        "endTime": "1030"
    }
]
```

### Error

```json
{
	"error": string,
	"code": number
}
```

### Sample Request

```http
GET /basic/data?id=1234567890
```

### Sample Response

```json
{
    "result": [
        {
            "id": 1234567890,
            "property1": 1234567890,
            "property2": "haha",
            ...
        }
    ]
}
```

### Sample Error

```json
{
	"error": "Server Error",
	"code": 500
}
```
