import { Model, DataType, Table, Column } from "sequelize-typescript";
import { TQuotationModel } from "../quotation/interfaces/Quotation.model";

@Table({
    tableName: "quotation",
    modelName: "Quotation",
})
class Quotation extends Model<TQuotationModel> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "pk_quotation",
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        field: "qu_cpf",
    })
    cpf!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        field: "qu_email",
    })
    email!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: "qu_current_date",
    })
    currentDate!: Date;

    @Column({
        type: DataType.INTEGER,
        field: "fk_origin_address",
    })
    originAddressId!: number;

    @Column({
        type: DataType.INTEGER,
        field: "fk_destination_address",
    })
    destinationAddressId!: number;

    @Column({
        type: DataType.DATE,
        field: "created_at",
    })
    createdAt!: Date;

    @Column({
        type: DataType.STRING(255),
        field: "created_by",
    })
    createdBy!: string;

    @Column({
        type: DataType.DATE,
        field: "updated_at",
    })
    updatedAt!: Date;

    @Column({
        type: DataType.STRING(255),
        field: "updated_by",
    })
    updatedBy!: string;

    @Column({
        type: DataType.DATE,
        field: "deleted_at",
    })
    deletedAt!: Date;

    @Column({
        type: DataType.STRING(255),
        field: "deleted_by",
    })
    deletedBy!: string;
}

export default Quotation;
