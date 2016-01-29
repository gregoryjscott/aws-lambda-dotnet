var child = require('child_process');
var path = require('path')

exports.handle = function(e, ctx) {
  var exe = path.join(__dirname, 'helloworld')
  var proc = child.spawn('ls')

  proc.stdout.on('data', function(data) {
    ctx.succeed({ didItWork: data})
    console.log('IT WORKED!')
  });

  proc.stderr.on('data', function(error) {
    console.log('ooops ' + error)
  })
}
