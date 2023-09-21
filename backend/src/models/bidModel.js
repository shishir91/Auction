import connection from "./index.js";
import { DataTypes } from "sequelize";

const bidModel = connection.define(
    "bids",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        item: {
            type: DataTypes.INTEGER,
            references: {
                model: 'items', 
                key: 'id', 
            },
            allowNull: false,
        },
        user:{
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
            allowNull: false,
        },
        bid:{
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    }
);

export default bidModel;
