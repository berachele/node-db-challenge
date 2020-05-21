
exports.up = function(knex) {
  return knex.schema
  .createTable("project", project => {
    project.increments()
    project.string("name").notNullable()
    project.string("description", 255)
    project.boolean("complete").defaultTo(false)
  })

  .createTable("task", task => {
    task.increments()
    task.integer("projectID")
        .unsigned()
        .notNullable()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
    task.string("description", 255).notNullable()
    task.string("notes")
    task.boolean("complete").defaultTo(false)
  })

  .createTable("resource", resource => {
    resource.increments()
    resource.string("name").notNullable().unique()
    resource.string("description", 255)
  })

  .createTable("project_resources", projRec => {
    projRec.increments()
    projRec.integer("projectID")
        .unsigned()
        .notNullable()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")

    projRec.integer("resourceID")
        .unsigned()
        .notNullable()
        .references("resource.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("project_resources")
  .dropTableIfExists("resource")
  .dropTableIfExists("task")
  .dropTableIfExists("project")
};
