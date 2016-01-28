var child = require('child_process');
var path = require('path')

exports.handle = function(e, ctx) {
  console.log('before helloworld')

  var exe = path.join(__dirname, 'helloworld')
  var proc = child.spawn('exe')

  proc.stdout.on('data', function(data) {
    console.log('data callback')
    ctx.succeed({ thanksFor: 'nothing'})
  });

  proc.stderr.on('data', function(error) {
    console.log('ooops ' + error)
  })
}
