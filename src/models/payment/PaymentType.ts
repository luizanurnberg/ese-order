import { Model, DataType, Table, Column } from "sequelize-typescript";
import TPaymentTypeModel from "./interfaces/PaymentType.model";

@Table({
    tableName: "payment_type",
    modelName: "PaymentType",
})

class PaymentType extends Model<TPaymentTypeModel> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        field: "type",
    })
    type!: string;
}

export default PaymentType;
