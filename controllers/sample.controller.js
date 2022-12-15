exports.get = async (req, res, next) => {
    const { myparam } = req.params;

    return res.json({ hello: 'world' });
};

exports.post = async (req, res, next) => {
    const { mybody } = req.body;

    return res.json({ body: myBody });
};
