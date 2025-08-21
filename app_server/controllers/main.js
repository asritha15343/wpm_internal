/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'inventory management system'});
};

module.exports = {
index
};