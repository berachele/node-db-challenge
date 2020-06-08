
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: "Complete Guided Project", description: 'Must be done be noon', complete: 0},
        {name: "Complete Daily Project", description: 'Must be done by 5pm', complete: 0},
        {name: "Finish Sprint Challenge", description: 'Must be complete in a 3 hour window', complete: 0},
      ]);
    });
};

/*
DATA NEEDED

--NAME
--DESCRIPTION
--COMPLETE

*/