exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('cards').insert({
          name: 'Bonjour Paris!',
        }),
        knex('cards').insert({
          name: 'Hola Mexico',
        }),
        knex('cards').insert({
          name: 'Howdy Texas',
        })
      ]);
    });
};
