var fs = require('fs');
var path = require('path');

module.exports = function (request, response){
	fs.exists('.'+request.url, function(exists) {
		if(exists) {
			if(request.url === '/') {
				fs.readFile('./views/index.html', 'utf8', function(errors, contents) {
					response.write(contents);
					response.end();
				})}
            else {
				fs.readFile('.'+path.dirname(request.url)+'/'+path.basename(request.url), function(errors, contents) {
					response.write(contents);
					response.end();
				})
			}
		} else {
            response.writeHead(404);
			response.end('File not Found!!!');
		}
	})
};


// module.exports = function(request, response){
//     fs.exists('.'+request.url, function(exists) {
//     if(exists) {
//         switch (request.url) {
//         case "/":
//           file = 'index.html'
//           break;
//         case "/ninjas":
//           file = 'ninjas.html'
//           break;
//         case "/dojos/new":
//           file = 'dojos.html'
//           break;
//         default:
//           file = null;
//           break;
//         }
//         if (file !== null) {
//             fs.readFile(`static/${file}`, 'utf8', function(err, contents){
//                 if (err) { console.log(err); }
//                 response.writeHead(200, {'Content-Type': 'text/html'});
//                 response.write(contents);
//                 response.end();
//             });
//         } else {
//             response.writeHead(404);
//             response.end("File not found!")
//         }
//     }
// })
//
// };
