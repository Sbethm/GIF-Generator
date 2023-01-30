import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

const gifControllers = {
    
    getQueriedGif: (req, res, next) => {
        //convert params to fit url fetch request specs
        const query = req.params.query.replaceAll(' ', '+');

        axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=${ process.env.GIFY_KEY }=${ query }&limit=25&offset=0&rating=g&lang=en`)
        .then((res) => {
            const data = res.data.data;
            //reduce response to object with mp4 and title key value pairs 
            const resArr = data.map((obj) => {
                const { mp4 } = obj.images.original;
                return { mp4 };
            })
            return resArr;
        })
        .then((array) => {
            //store response as an array of objects (25)
            res.locals.array = array;
            return next();
        })
    },

    getRandomGif: (req, res, next) => {

        axios
        .get(`https://api.giphy.com/v1/gifs/random?api_key=${ process.env.GIFY_KEY }=&rating=g`)
        .then((res) => {
            const data = res.data.data;
            const { mp4 } = data.images.original;
            const resArr = [{ mp4 }];
            return resArr;
        })
        .then((array) => {
            //store response as an array of objects
            res.locals.array = array;
            return next();
        })
    },

    addRandomGif: (req, res, next) => {

        axios
        .get(`https://api.giphy.com/v1/gifs/random?api_key=pjU0gj8bjFNq3pwK1DFC8Mk08GXlJ7Lz&tag=&rating=g`)
        .then((res) => {
            const data = res.data.data;
            const { mp4 } = data.images.original;
            return { mp4 };
        })
        .then((array) => {
            //store response as an array of objects
            res.locals.array.push(array);
            return next();
        })
    }

};


module.exports = gifControllers;