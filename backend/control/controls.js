const modelk = require('../models/modls')

exports.adddata = async (req, res) => {
    try {
        var data = new modelk({
            FirstName: req.body.firstname, LastName: req.body.lastname, Email: req.body.email, Address: req.body.adrs,
            City: req.body.city, State: req.body.state
        })
        var datak = await data.save()
        if (datak) {
            res.status(200).json({ statuscode: 1, udata: datak });
        } else {
            res.status(400).json({ statuscode: 0 })
        }
    } catch (e) {
        res.status(500).json({ statuscode: -1, msg: e.code })
    }
}

exports.delete = async (req, res) => {
    try {
        let del = await modelk.deleteOne({ _id: req.params.idk })
        if (del.deletedCount === 1) {
            res.status(200).json({ statuscode: 1 });
        }
        else {
            res.status(400).json({ statuscode: 0 });
        }
    } catch (e) {
        res.status(500).json({ statuscode: -1, msg: e.code })
    }
}

exports.update = async (req, res) => {
    try {
        let data = await modelk.updateOne({ _id: req.params.idk }, {
            $set: {
                FirstName: req.body.firstname, LastName: req.body.lastname, Email: req.body.email, Address: req.body.adrs,
                City: req.body.city, State: req.body.state
            }
        })
        if (data.modifiedCount === 1) {
            res.status(200).json({ statuscode: 1 });
        } else {
            res.status(400).json({ statuscode: 0 });
        }
    }
    catch (e) {
        res.status(500).json({ statuscode: -1, msg: e.code })
    }
}

exports.fetchdata = async (req, res) => {
    try {
        var data = await modelk.find()
        if (data !== null) {
            res.status(200).json({ statuscode: 1, udata: data })
        } else {
            res.status(600).json({ statuscode: 0 })
        }
    }
    catch (e) {
        res.status(500).json({ statuscode: -1, msg: e.code })
    }
}