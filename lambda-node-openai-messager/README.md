# Lambda Node OpenAI Messager

This AWS Lambda function allows you to interact with OpenAI models through a simple API endpoint.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
- `OPENAI_API_KEY`: Your OpenAI API key

## Deployment

1. Package the function:
```bash
zip -r function.zip index.js node_modules package.json
```

2. Upload the zip file to AWS Lambda

## Usage

Send a POST request to your Lambda function with the following JSON body:

```json
{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Your message here"
    }
  ]
}
```

### Response Format

```json
{
  "response": "OpenAI model's response"
}
```

## Error Handling

The function returns appropriate HTTP status codes:
- 200: Success
- 400: Bad Request (missing parameters)
- 500: Internal Server Error

## Security

Make sure to:
1. Store your OpenAI API key securely in AWS Lambda environment variables
2. Configure appropriate IAM roles and permissions
3. Set up API Gateway with proper authentication if needed 