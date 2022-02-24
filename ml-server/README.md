# ML Server

`FastAPI` based **Recommendation** API Server

## Information

- Port Number `8080`
- Endpoint
  - `[POST] /recommend/{item_id}`
    - `item_id: int`

### Usage

```
user=user passwd=passwd host=host db=db charset=utf8 uvicorn main:app --reload
```

### Authors

- [김윤경](https://github.com/fpal95)
- [전지원](https://github.com/kworkbee)
