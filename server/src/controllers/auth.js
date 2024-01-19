exports.userAuth = (req, res) => {
    console.log(req.body);
    res.send({id: "1", name: "Bharath"});
}