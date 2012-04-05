module.exports = function(Bill, req, res){
    Bill.find({}, function(err,bills){
        res.render("list", {"bills": bills});
    })
};