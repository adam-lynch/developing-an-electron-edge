app.setUserTasks([{
  title: 'Hello world',
  arguments: '--hello-world',
  program: process.execPath
}, {
  title: 'Another task',
  program: process.execPath,
  arguments: '--another'
}]);