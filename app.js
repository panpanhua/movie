var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views')
app.set('view engine','jade')
app.listen(port)

console.log('imooc started on port' + port)

// index page
app.get('/',function(req,res){
	res.render('index', {
		title:'微信看电影'
	})
})
//list page
app.get('/admin/list',function(req,res){
	res.render('list', {
		title:'微信看电影'
	})
})
//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail', {
		title:'微信看电影'
	})
})
//detail page
app.get('/admin/movie',function(req,res){
	res.render('admin', {
		title:'微信看电影'
	})
})