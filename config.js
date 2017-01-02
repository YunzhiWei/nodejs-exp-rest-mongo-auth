module.exports = {
  'secretKey': '12345-67890-09876-54321',
  'mongoUrl' : 'mongodb://localhost:27017/conFusion',
  'privilige': {
    '/users': {
      'GET': true
    },
    '/dishes': {
      'POST':   true,
      'DELETE': true,
    }
  }
}
