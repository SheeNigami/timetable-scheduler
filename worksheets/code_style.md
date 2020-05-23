# Code Style

This documents helps to guide the look and feel of the code so that even when there are multiple developer, the style remains consistent. You may read more about it [here](https://javascript.info/coding-style).

## Style Guide

| Rules             | Choices                         |
| ----------------- | ------------------------------- |
| Case Styles       | camelCase                       |
| Acronym Case      | Ibm                             |
| Indentation Style | 1TBS                            |
| Indentation       | Space                           |
| Indentation Space | 4 spaces                        |
| Semicolon         | Mandatory                       |

## Examples

Based on your chosen rules, give an example of a code that follows the code style and an example of a code that does not follow the code style. The examples you give should cover all the above defined rule.

### Good Example

- Case Style

```js
var camelCase;
```

- Acronym Case

```js
var Id;
```

- Indentation

```js
{
    "Foo": bar
}
```

- Indentation Space

```js
{
    "foo": "bar"
}
```

- Semicolon

```js
var id;
```

### Bad Example


- Case Style

```js
var not_camel_case;
```

- Acronym Case

```js
var ID;
```

- Indentation

```js
{
  "Foo": bar,
  "Foo": bar
}
```

- Indentation Space

```js
{
	"foo": "bar",
	"foo": "bar"
}
```

- Semicolon

```js
var id
```