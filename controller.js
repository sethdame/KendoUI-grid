// NOT WORKING
// DONT USE
app.get('/index', function (req,res) {
    var lock = 2;
    var user_array = [];
    var title_array = [];

    var finishRequest = function() {
        res.render('index.html', {layout: false, locals: { name_id: user_array, title: title_array }});
    }

    // first query
    var sql = 'select name_id from users';
    db.execute(sql)
        .addListener('row', function(r) {
            user_array.push( { name_id: r.name_id } );
        })
        .addListener('result', function(r) {
            req.session.user_array = user_array;
            lock -= 1;

            if (lock === 0) {
              finishRequest();
            }
        });

    // second query
    var sql = 'select title from code_samples';
    db.execute(sql)
        .addListener('row', function(r) {
            title_array.push( { title: r.title } );
        })
        .addListener('result', function(r) {
            req.session.title_array = title_array;
            lock -= 1;

            if (lock === 0) {
              finishRequest();
            }
        });
});