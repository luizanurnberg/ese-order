import { Model, DataType, Table, Column } from "sequelize-typescript";
import TOfferModel from "../offer/interfaces/Offer.model";

@Table({
    tableName: "offer",
    modelName: "Offer",
})
class Offer extends Model<TOfferModel> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "pk_offer",
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        field: "of_status",
    })
    status!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        field: "of_subtotal",
    })
    subtotal!: number;

    @Column({
        type: DataType.FLOAT,
        field: "of_taxes",
    })
    taxes?: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        field: "of_total",
    })
    total!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: "of_delivery_forecast",
    })
    deliveryForecast!: Date;

    @Column({
        type: DataType.INTEGER,
        field: "fk_quotation",
    })
    quotationId!: number;

    @Column({
        type: DataType.INTEGER,
        field: "fk_fleet_vehicle",
    })
    fleetVehicleId!: number;

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

export default Offer;
