module.exports.list = function(Bill, req, res){
    var bill = new Bill({title: "some bill", date: new Date()});
    bill.save();
    Bill.find({}, function(err,docs){
        res.send(docs.length);    
    })
//  res.render('index', { title: 'Express' })
};