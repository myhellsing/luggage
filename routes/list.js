
/*
 * GET list of bills.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};