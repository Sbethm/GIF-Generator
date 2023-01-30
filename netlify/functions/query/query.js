import fetch from 'node-fetch';
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  console.log(event.queryStringParameters.input)
  try {
    const query = event.queryStringParameters.input.replaceAll(' ', '+');
    const gifyURL = `https://api.giphy.com/v1/gifs/search?api_key=${ process.env.GIFY_KEY }=${ query }&limit=25&offset=0&rating=g&lang=en`;
    
      return fetch(gifyURL)
      .then(data => data.json())
      .then(res =>  res.data)
      .then(data => {
        console.log(data[0].images.original.mp4)
        //reduce response to object with mp4 and title key value pairs 
        const resArr = data.map((obj) => {
            const { mp4 } = obj.images.original;
            return { mp4 };
        })
        return resArr;
      })
      .then(array => {
        return {
          statusCode: 200,
          body: JSON.stringify({ array: array }),
        }
      })
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
