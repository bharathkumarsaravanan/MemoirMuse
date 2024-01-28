exports.days = (req, res) => {
    console.log(req.body);
    var { currentDate } = req.body;
    var lastTenDays = [];
    var date = new Date(currentDate);

    for (var i = 0; i < 15; i++) {
        var previousDate = new Date(currentDate);
        previousDate.setDate(date.getDate() - i);

        lastTenDays.push(previousDate.toISOString().split('T')[0])
    }
    res.send({dates: lastTenDays});
}