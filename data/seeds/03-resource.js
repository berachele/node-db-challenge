
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: "computer", description: 'for daily use'},
        {name: "Zoom", description: 'for video conference'},
        {name: "Github", description: 'for all projects and Sprint Challenges'},
        {name: "Training Kit, or 'TK'", description: 'for Guided Project'},
        {name: "Module Retro Form", description: 'for Daily Projects'},
        {name: "Sprint Retro Form", description: 'for Sprint Challenges'},
        {name: "Terminal", description: 'for all VSCode commands'},
        {name: "VSCode", description: 'for all coding'},
        {name: "Slack", description: 'communcating with your teams and instructors'},
        {name: "Notes", description: 'from past projects for reference'},
      ]);
    });
};

/*
DATA NEEDED

--NAME
--DESCRIPTION

*/