// src/api/huggingFaceApi.ts
const API_URL = 'https://api-inference.huggingface.co/models/<your-model-name>'; // Replace with the model URL

/**
 * Makes a request to the Hugging Face API to generate a response.
 * @param {string} input - The input text to send to the model.
 * @returns {Promise<string>} - The model's generated response.
 */
export const getModelResponse = async (input: string): Promise<string> => {
  const API_KEY = process.env.HUGGINGFACE_API_KEY;

  if (!API_KEY) {
    throw new Error('Hugging Face API key is missing in environment variables');
  }

  const headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify({
    inputs: input,
  });

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.generated_text || 'No response generated';
  } catch (error) {
    console.error('Error fetching model response:', error);
    throw new Error('Failed to interact with the model');
  }
};
