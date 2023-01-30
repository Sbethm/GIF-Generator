import axios from 'axios';
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {

  try {
      const response1 = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`);
      const response2 = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`);
      const response3 = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`);
      console.log("LOOK", response1.data.data.images.original.mp4)
      const link1 = response1.data.data.images.original.mp4;
      const link2 = response2.data.data.images.original.mp4;
      const link3 = response3.data.data.images.original.mp4;

      return { statusCode: 200, body: JSON.stringify({ array: [link1, link2, link3]})};

    // Promise.all([
        // axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`),
        // axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`)
        // fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`),
        // fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`),
        // fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`)
    // ])
    // .then(res => Promise.all(res.map(r => r)))
    // .then(data => {
    //     console.log("THIS IS DATA", data)
    //     //reduce response to object with mp4 and title key value pairs 
    //     const resArr = data.map((obj) => {
    //         const { mp4 } = obj.data.images.original;
    //         return { mp4 };
    //     })
    //     return resArr;
    //   })
    // .then(array => {
    //     return { 
    //         statusCode: 200,
    //         body: JSON.stringify({ array: array }),
    //     };
    // })
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }