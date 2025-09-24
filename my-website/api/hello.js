// This function will be executed when someone visits /api/hello
export default function handler(request, response) {
  // Get data from the request (if any)
  const yourName = request.query.name || 'Guest';

  // Send a response back to the frontend
  response.status(200).json({
    message: `Hello, ${yourName}! This response came from your new backend.`
  });
}