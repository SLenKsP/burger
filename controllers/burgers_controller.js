let express = require(`express`);
let burger = require(`../models/burger`);
let router = express.Router();
router.get(`/`, (req, res) => {
    res.redirect(`/burgers`);
});

router.get(`/burgers`, (req, res) => {
    burger.selectAll((burgerData) => {
        res.render(`index`, {
            burger_data: burgerData
        });
    });
});
router.post(`/burgers/create`, (req, res) => {
    burger.insertOne(req.body.burger_name, (result) => {
        res.redirect(`/`);
    })
});
router.put(`/burgers/:id`, (req, res) => {
    burger.updateOne(req.params.id, (result) => {
        res.sendStatus(200);
    });
});

module.exports = router;