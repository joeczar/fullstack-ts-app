"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
function validateEnv() {
    envalid_1.cleanEnv(process.env, {
        POSTGRES_HOST: envalid_1.str(),
        POSTGRES_PORT: envalid_1.str(),
        POSTGRES_USER: envalid_1.str(),
        POSTGRES_PASSWORD: envalid_1.str(),
        POSTGRES_DB: envalid_1.str(),
        PORT: envalid_1.port()
    });
}
exports.default = validateEnv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVFbnYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvdmFsaWRhdGVFbnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBOEM7QUFFOUMsU0FBUyxXQUFXO0lBQ2xCLGtCQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUNwQixhQUFhLEVBQUUsYUFBRyxFQUFFO1FBQ3BCLGFBQWEsRUFBRSxhQUFHLEVBQUU7UUFDcEIsYUFBYSxFQUFFLGFBQUcsRUFBRTtRQUNwQixpQkFBaUIsRUFBRSxhQUFHLEVBQUU7UUFDeEIsV0FBVyxFQUFFLGFBQUcsRUFBRTtRQUNsQixJQUFJLEVBQUUsY0FBSSxFQUFFO0tBQ2IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELGtCQUFlLFdBQVcsQ0FBQyJ9