const fastify = require('fastify')({
    logger: true
});

fastify.register(require('./routes.js'));

fastify.listen(3000, (err, add) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log('Routes:');
    console.log(fastify.printRoutes());
    fastify.log.info(`server listening on ${add}`);
});
