
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {projectID: 1, resourceID: 1},
        {projectID: 1, resourceID: 2},
        {projectID: 1, resourceID: 3},
        {projectID: 1, resourceID: 4},
        {projectID: 1, resourceID: 7},
        {projectID: 1, resourceID: 8},
        {projectID: 1, resourceID: 9},
        {projectID: 2, resourceID: 1},
        {projectID: 2, resourceID: 3},
        {projectID: 2, resourceID: 5},
        {projectID: 2, resourceID: 7},
        {projectID: 2, resourceID: 8},
        {projectID: 2, resourceID: 9},
        {projectID: 2, resourceID: 10},
        {projectID: 3, resourceID: 1},
        {projectID: 3, resourceID: 3},
        {projectID: 3, resourceID: 6},
        {projectID: 3, resourceID: 7},
        {projectID: 3, resourceID: 8},
        {projectID: 3, resourceID: 10},
      ]);
    });
};


/*
DATA NEEDED

--PROJECTID
--RESOURCEID

*/