"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [
        __dirname + ("/../**/*.entity" + (__dirname === 'src' ? '.ts' : '.js')),
    ],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map