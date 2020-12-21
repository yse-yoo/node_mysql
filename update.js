//カスタムモジュール読み込み
const db = require('./lib/db');

//DB接続 （カスタムモジュールを利用）
const con = db.connect();

//SELECT
let sql = 'UPDATE users SET ? WHERE ?;'
let params = [
    { email: 'test@yokohama.com' },
    { id: 1 },
]
//UPDATE users SET email = 'xxxx' WHERE id = 'xx';
con.query(sql, params, (err, results) => {
    console.log(sql);
    console.log(results);
});

con.end();