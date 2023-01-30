import fetch from 'node-fetch';
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  console.log(event)
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
        console.log("THIS IS RESOPNSE", array)
        return { 
            statusCode: 200,
            body: JSON.stringify({ array: array }),
        };
    })

    // return fetch('https://api.giphy.com/v1/gifs/random?api_key=pjU0gj8bjFNq3pwK1DFC8Mk08GXlJ7Lz&tag=&rating=g')
    //     .then(res => res.json())
    //     .then(res =>  res.data)
    //     .then(data => {
    //         console.log("THIS IS RESOPNSE", data)
    //         const { mp4 } = data.images.original;
    //         console.log("THIS IS OBJ", mp4)
    //         return { 
    //             statusCode: 200,
    //             body: JSON.stringify({ array: [ { mp4 } ] }),
    //         };
    //     })

  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }