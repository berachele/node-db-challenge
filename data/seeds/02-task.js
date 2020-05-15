
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        //1. Complete Guided Project
        {projectID: 1, description: "TK Prep", notes: 'Watch videos or go over TK written notes', complete: 0},
        {projectID: 1, description: "Clone Guided Project", notes: 'Fork and clone project into your local server, then install needed dependencies', complete: 0},
        {projectID: 1, description: "Join Video Conference", notes: 'Zoom link will be posted, follow along with instructor', complete: 0},
        //2. Complete Daily Project
        {projectID: 2, description: "Take a Break!!", notes: 'Please take an hour lunch break. Take care of your body and your body will take care of you!', complete: 0},
        {projectID: 2, description: "Clone Daily Project", notes: 'Fork and clone the daily project. Add your Team Lead as a collaborator', complete: 0},
        {projectID: 2, description: "Finish MVP", notes: 'Make continual commits, go over material and complete MVP', complete: 0},
        {projectID: 2, description: "Submit Pull Request and Module Retro", notes: 'Sumbit Pull Request on Github, adding TL as a reviewer and submit your retro form by 5', complete: 0},
        //3. Finish Sprint Challenge
        {projectID: 3, description: "Clone Sprint Challenge", notes: 'Fork and clone repo', complete: 0},
        {projectID: 3, description: "Answer Self Study Questions", notes: "Don't forget!", complete: 0},
        {projectID: 3, description: "Finish Sprint MVP", notes: 'Make continual commits, go over material and complete MVP', complete: 0},
        {projectID: 3, description: "Submit Pull Request and Sprint Retro", notes: "Sumbit Pull Request on Github, adding TL as a reviewer and submit your retro form before time is up", complete: 0},
      ]);
    });
};

/*
DATA NEEDED

--PROJECTID
--DESCRIPTION(NAME)
--NOTES
--COMPLETE

*/