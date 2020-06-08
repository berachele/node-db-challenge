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
    getTaskByID,
    resourceList,
    taskList,
    updateResource,
    removeResource,
    updateProject,
    removeProject,
    updateTask,
    removeTask,
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

function addProject(newProject) {
    return db("project").insert(newProject)
    .then(show => {
        return getProjectByID(show[0])
    })
}

function getProject() {
    return db("project")
}

function addTask(newTask) {
    return db("task").insert(newTask)
    .then(show => {
        return getTaskByID(show[0])
    })
}

function getTask() {
//get list of tasks showing BOTH project name and description
    return db.select("t.id", "p.name as project_name", "p.description as project_description", "t.description", "t.notes", "t.complete")
    .from("task as t")
    .join("project as p", "p.id", "=", "t.projectID")
}

//stretch endpoints

function getResourceByID(id) {
    return db("resource").where({id}).first()
}

function getProjectByID(id) {
    return db("project").where({id}).first()
}

function getTaskByID(id) {
    return db("task").where({id}).first()
}

function resourceList(id) {
//given project id and returns resources list for that project:
    return db.select("r.id", "PR.projectID", "p.name as product_name", "r.name", "r.description")
    .from("resource as r")
    .join("project as p", "p.id", "=", "PR.projectID")
    .join("project_resources as PR", "r.id", "=", "PR.resourceID")
    .where({projectID: id})
}

function taskList(id) {
//given project id and returns tasks list for that project:
    return db.select("t.id", "t.projectID", "p.name as product_name", "p.description as project_description", "t.description", "t.notes", "t.complete")
    .from("task as t")
    .join("project as p", "p.id" ,"=", "t.projectID")
    .where({projectID: id})
}

function updateResource(id, changes) {
    return db("resource").where({id})
    .update(changes)
    .then(ids => {
        return getResourceByID(ids[0])
    })
}

function removeResource(id) {
    return db("resource").where({id}).del()
}

function updateProject(id, changes) {
    return db("project").where({id})
    .update(changes)
    .then(ids => {
        return getProjectByID(ids[0])
    })
}

function removeProject(id) {
    return db("project").where({id}).del()
}

function updateTask(id, changes) {
    return db("task").where({id})
    .update(changes)
    .then(ids => {
        return getTaskByID(ids[0])
    })
}

function removeTask(id) {
    return db("task").where({id}).del()
}