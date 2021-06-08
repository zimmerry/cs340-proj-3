var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_zimmerry',
  password        : '1718',
  database        : 'cs340_zimmerry'
});
module.exports.pool = pool;
