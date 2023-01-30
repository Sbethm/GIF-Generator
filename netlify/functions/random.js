import axios from 'axios';
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
      //respond with three random gifs
      const response1 = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`);
      const response2 = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`);
      const response3 = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`);
      //break down gif response to mp4 url
      const resArr = [response1, response2, response3].map((obj) => {
        const { mp4 } = obj.data.data.images.original;
        return { mp4 };
      })

      return { statusCode: 200, body: JSON.stringify({ array: resArr })};
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }