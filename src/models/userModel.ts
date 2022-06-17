import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import Event from './eventModel.js';

@Table({tableName: "users"})
class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;

    @HasMany(() => Event)
    events!: Event[]
};

export default User;