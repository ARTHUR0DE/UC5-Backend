import { axios } from axios;
import { DataTypes } from 'sequelize';
import  sequelize  from '../../../config/database.js';

const EndereçoModel = sequelize.define(
    "Profile", 
    {
        id: {
            type: DataTypes.UUID,
            defaultvalue: DataTypes.UUiDV4,
            primarykey: true,
        },

    }
)