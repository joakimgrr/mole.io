const Project = require('../models/project');

module.exports = (app, db) => {
    app.get('/projects', (req, res) => {
        Project.find({}, (err, projects) => {
            res.json(projects);
        });
    });

    app.post('/projects', (req, res) => {
        let newProject = req.body;

        //TODO: add validations
        let project = new Project(newProject);

        project.save((err, project) => {
            res.json(project);
        })
    });
}
