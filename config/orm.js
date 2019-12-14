let connection = require(`./connection`);

let printQuestionMarks = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(`?`);
    }
    return arr.toString();
}


let objToSql = (ob) => {
    let arr = [];
        for (let key in ob) {
            let value = ob[key];
            if (Object.hasOwnProperty.call(ob, key)) {
                if (typeof value === `string` && value.indexOf(` `) > 0) {
                    value;
                }
                arr.push(`${ key } = ${ value }`);
            }
        }
    return arr.toString();
}

let orm = {
    selectAll: (tableInput, cb) => {
        let query = `SELECT * FROM ${ tableInput };`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        let query = `INSERT INTO ${ table }(${ cols.toString() })
                     VALUES(${ printQuestionMarks(vals.length) })`;
        console.log(query);
        connection.query(query, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table, condition, cb) => {
        let query = `UPDATE ${ table }
                     SET devoured=true
                     WHERE ${condition }`;
        console.log(query);
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;