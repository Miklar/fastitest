const features = require('./features');

module.exports = async (fastify, opt) => {
    const feats = await features();
    feats.map(f => {
        f.map(ff => fastify.route(ff));
    });
};

