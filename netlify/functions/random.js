import fetch from 'node-fetch';
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {

  try {

    return Promise.all([
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`),
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`),
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`)
    ]).then(res => Promise.all(res.map(r => r.json())))
    .then(data => {
        //reduce response to object with mp4 and title key value pairs 
        const resArr = data.map((obj) => {
            const { mp4 } = obj.data.images.original;
            return { mp4 };
        })
        return resArr;
      })
    .then(array => {
        return { 
            statusCode: 200,
            body: JSON.stringify({ array: array }),
        };
    })
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }