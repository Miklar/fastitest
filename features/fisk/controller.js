module.exports = [
    {
        method: 'GET',
        url: '/fisk',
        handler: function getDog (request, reply) {
            reply.send({ msg: 'Yes, this is fisk' })
        }
    },
    {
        method: 'POST',
        url: '/fisk',
        handler: function postDog (request, reply) {
            reply.send({ msg: 'Yes, fisk is post' })
        }
    }
];

