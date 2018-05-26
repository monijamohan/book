var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require ('mongoose');
 console.log(__dirname);
 app.use(bodyparser.json());
 app.use(express.static(__dirname+'/client'));

Genre = require('./models/genres');
Book = require('./models/books');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

 app.get('/',function(req,res){
     res.send('Hello monija ');
 });

 app.get('/api/genres',function(req, res){
    Genre.getGenres(function(err, genres){
    	if(err){
    		throw err;
           }
           res.json(genres);

    });
 });   
 app.post('/api/genres',function(req, res){
 	var genre = req.body;
    Genre.addGenres(genre,function(err, genre){
    	if(err){
    		throw err;
           }
           res.json(genre);

    });
 });   
 app.put('/api/genres/:_id',function(req, res){
 	var id= req.params._id;
 	var genre = req.body;
    Genre.updateGenre(id, genre,{}, function(err, genre){
    	if(err){
    		throw err;
           }
           res.json(genre);

    });
 });   
 app.delete('/api/genres/:_id',function(req, res){
 	var id= req.params._id;
 	
    Genre.deleteGenres(id, function(err, genre){
    	if(err){
    		throw err;
           }
           res.json(genre);

    });
 });   
    app.get('/api/books',function(req, res){
    Book.getBook(function(err,books){
    	if(err){
    		throw err;
           }
           res.json(books);

    });
 
});
      app.get('/api/books/:_id',function(req, res){
    Book.getBookById(req.params._id,function(err, book){
    	if(err){
    		throw err;
           }
           res.json(book);

    });
});
    app.post('/api/books',function(req, res){
 	var book= req.body;
    Book.addBook(book,function(err, book){
    	if(err){
    		throw err;
           }
           res.json(book);

    });
 
});
    app.put('/api/books/:_id',function(req, res){
  var id= req.params._id;
  var book= req.body;
    Book.updateBook(id, book,{}, function(err, book){
      if(err){
        throw err;
           }
           res.json(book);

    });
 });   

    app.delete('/api/books/:_id',function(req, res){
      var id= req.params._id;
  
    Book.deleteBook(id, function(err, book){
      if(err){
        throw err;
           }
           res.json(book);

    });
 });   

 app.listen(3000);
 console.log('Running on port 3000');