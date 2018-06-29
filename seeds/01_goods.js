
exports.seed = function(knex, Promise) {
  beds = [];
  for (var i = 100; i <= 600; i+=100) {
    beds.push({
      id: i,
      notes: ''
    })
  }
  // Deletes ALL existing entries
  return knex('beds').del()
    .then(function () {
      return knex.insert(beds).into('beds')
    });
};
