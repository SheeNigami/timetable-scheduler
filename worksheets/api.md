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

## Reset Database

| attribute   | value       |
| ----------- | ----------- |
| HTTP Method | GET         |
| Endpoint    | /reset      |

### Parameters

| parameter | datatype        | example   |
| --------- | --------------- | --------- |
| NIL       | NIL             | NIL       |

### Response Body

```json
{
    "results": "success"
}
```

### Error

```json
{
    "error": "There was a server error",
    "code" : code
}
```

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
    "error": "There was a server error",
    "code" : code
}
```

## Basic Insert API

| attribute   | value         |
| ----------- | -----------   |
| HTTP Method | POST          |
| Endpoint    | /basic/insert |

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
}
```

### Error

```json
{
    "error": "Key (\"lectureId\")=(4192650317) already exists.",
    "code": "23505"
}
```

## Get All Data (Technicians)

| attribute   | value         |
| ----------- | -----------   |
| HTTP Method | GET           |
| Endpoint    | /advance/data |

### Parameters

| parameter | datatype        | example   |
| --------- | --------------- | --------- |
| NIL       | NIL             | NIL       |

### Response Body

```json
[
    {
        "technicianId": "9000000001",
        "semesterId": "9990000007",
        "facultyId": "9900000001",
        "dayOfWeek": "1",
        "startTime": "1000",
        "endTime": "1100"
    },
    {
        "technicianId": "9000000002",
        "semesterId": "9990000007",
        "facultyId": "9900000001",
        "dayOfWeek": "1",
        "startTime": "1000",
        "endTime": "1130"
    }
]
```

### Error

```json
{
    "error": "There was a server error",
    "code" : code
}
```

## Advance Insert API

| attribute   | value           |
| ----------- | -----------     |
| HTTP Method | POST            |
| Endpoint    | /advance/insert |

### Parameters

| parameter | datatype        | example   |
| --------- | --------------- | --------- |
| NIL       | NIL             | NIL       |

### Request Body
```json
{
    "data": [
        {
            "technicianId": 1234567890,
            "semesterId": 9999999991,
            "facultyId": 9999999991,
            "dayOfWeek": 1,
            "startTime": "1200",
            "endTime": "1430"
        },
        {
            "technicianId": 1234567891,
            "semesterId": 9999999992,
            "facultyId": 9999999991,
            "dayOfWeek": 2,
            "startTime": "0900",
            "endTime": "1030"
        },
        {
            "technicianId": 1234567892,
            "semesterId": 9999999991,
            "facultyId": 9999999991,
            "dayOfWeek": 3,
            "startTime": "1200",
            "endTime": "1830"
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

