//Create web server
localhost:27017/'comments';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Create schema
var Schema = mongoose.Schema;
var commentSchema = new Schema({
    name: String,
    comment: String
});
var Comment = mongoose.model('Comment', commentSchema);

//Create body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Create routes
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/comments', function(req, res) {
    Comment.find(function(err, comments) {
        if (err) return console.error(err);
        console.log(comments);
        res.json(comments);
    })
});

app.post('/comments', function(req, res) {
    console.log(req.body);
    var newComment = new Comment(req.body);
    newComment.save(function(err, doc) {
        if (err) return console.error(err);
        res.json(doc);
    });
});

//Start server
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});