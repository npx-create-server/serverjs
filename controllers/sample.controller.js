exports.getFunction = async (req, res, next) => {
    const { myparam } = req.params;

    return res.status(200).json({ hello: 'world' });
};

exports.postFunction = async (req, res, next) => {
    const { mybody } = req.body;

    return res.status(200).json({ body: mybody });
};
