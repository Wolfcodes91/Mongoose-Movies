const Movie = require('../models/movie');

module.exports = {
    new: newMovie,
    create,
};

function create(req, res) {
    // convert nowShowing's checkbox of either undefind or on if checked to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove leading and trailing spaces 
    req.body.cast = req.body.cast.trim();
    if(req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    const movie = new Movie(req.body);
    movie.save(function(err) {
        // one way to handle errors
        if (err) return res.render('movies/new')
        console.log(movie);
        res.redirect('movies/new')
    })
    
}

function newMovie(req, res) {
    res.render('movies/new');
}


