const axios = require('axios');

const gifControllers = {
    
    getGIF: (req, res, next) => {
        //convert params to fit url fetch request specs
        const query = req.params.query.replaceAll(' ', '+');

        axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=pjU0gj8bjFNq3pwK1DFC8Mk08GXlJ7Lz&q=${ query }&limit=25&offset=0&rating=g&lang=en`)
        .then((res) => {
            const data = res.data.data;
            //reduce response to object with mp4 and title key value pairs 
            const resArr = data.map((obj) => {
                const { title } = obj;
                const { mp4 } = obj.images.original;
                return {title, mp4 };
            })
            return resArr;
        })
        .then((array) => {
            //store response as an array of objects (25)
            res.locals.array = array;
            return next();
        })
    }

};


module.exports = gifControllers;