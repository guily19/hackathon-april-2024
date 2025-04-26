const { OpenAI } = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.handler = async (event) => {
  try {
    // Parse the incoming request
    const { model, messages } = JSON.parse(event.body);

    // Validate required parameters
    if (!model || !messages) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Missing required parameters: model and messages are required'
        })
      };
    }

    // Make the OpenAI API call
    const completion = await openai.chat.completions.create({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 1000
    });

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify({
        response: completion.choices[0].message.content
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        details: error.message
      })
    };
  }
}; 