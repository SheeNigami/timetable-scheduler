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
  length: 207,
  name: 'error',
  severity: 'ERROR',
  code: code,
  detail: details,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'lectures',
  column: undefined,
  dataType: undefined,
  constraint: constraint,
  file: file,
  line: line,
  routine: routine
}
```

## Basic Insert API

| attribute   | value       |
| ----------- | ----------- |
| HTTP Method | POST        |
| Endpoint    | /basic/data |

### Parameters

| parameter | datatype        | example   |
| --------- | --------------- | --------- |
| NIL       | NIL             | NIL       |

### Request Body
```json
{
    "data": [
        {
            "lectureId": 1234467893,
            "semesterId": 2234567890,
            "facultyId": 2234567890,
            "dayOfWeek": 3,
            "startTime": "1100",
            "endTime": "1230"
        },     
        {
            "lectureId": 1234517893,
            "semesterId": 2234567890,
            "facultyId": 2234567890,
            "dayOfWeek": 2,
            "startTime": "1500",
            "endTime": "1830"
        },      
        {
            "lectureId": 1234563893,
            "semesterId": 2234567890,
            "facultyId": 2234567890,
            "dayOfWeek": 1,
            "startTime": "1100",
            "endTime": "1430"
        },      
        {
            "lectureId": 1234568893,
            "semesterId": 1234567890,
            "facultyId": 1234567890,
            "dayOfWeek": 6,
            "startTime": "1500",
            "endTime": "1730"
        }
    ]
}
```

### Response Body

```json
{
    "results": "success"
}}
```

### Error

```json
{
    "error": "Key (\"lectureId\")=(4192650317) already exists.",
    "code": "23505"
}
```
