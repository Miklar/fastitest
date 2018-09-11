module.exports = [
    {
        method: 'GET',
        url: '/dog',
        handler: function getDog (request, reply) {
            reply.send({ msg: 'Yes, this is dog' })
        }
    },
    {
        method: 'POST',
        url: '/dog',
        handler: function postDog (request, reply) {
            reply.send({ msg: 'Yes, this is post' })
        }
    }
];

