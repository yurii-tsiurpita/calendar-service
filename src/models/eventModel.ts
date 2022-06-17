import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import User from './userModel.js';

@Table({tableName: "events"})
class Event extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description!: string;
    
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    date!: Date;

    @Column({
        type: DataType.ENUM('none', 'day', 'week', '2 weeks', 'month'),
        allowNull: false
    })
    repeat!: 'none'|'day'|'week'|'2 weeks'|'month';

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number
};

export default Event;