const db = require('../data/db-config')

module.exports = {
    addResource,
    getResource,
    addProject,
    getProject,
    addTask,
    getTask,
    getResourceByID,
    getProjectByID,
    getTaskByID
}

function addResource(newResource) {
    return db("resource").insert(newResource)
    .then(show => {
        return getResourceByID(show[0])
    })
}

function getResource() {
    return db("resource")
}

function getResourceByID(id) {
    return db("resource").where({id}).first()
}

function addProject(newProject) {
    return db("project").insert(newProject)
    .then(show => {
        return getProjectByID(show[0])
    })
}

function getProject() {
    return db("project")
}

function getProjectByID(id) {
    return db("project").where({id}).first()
}

function addTask(newTask) {
    return db("task").insert(newTask)
    .then(show => {
        return getTaskByID(show[0])
    })
}

function getTask() {
//get list of tasks showing BOTH project name and description
// select t.id, p.name as project_name, p.description as project_description, t.description, t.notes, t.complete
// from task as t
// join project as p on p.id = t.projectID;
    return db.select("t.id", "p.name as project_name", "p.description as project_description", "t.description", "t.notes", "t.complete")
    .from("task as t")
    .join("project as p", "p.id", "=", "t.projectID")
}

function getTaskByID(id) {
    return db("task").where({id}).first()
}