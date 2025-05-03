import TBaseModel from "../../Base.model";
import { TQuotationModel } from "../../quotation/interfaces/Quotation.model";

type TOfferModel = {
    id?: number;
    status: string;
    subtotal: number;
    taxes?: number;
    total: number;
    deliveryForecast: Date;

    fleetVehicleId: number;
    fleetVehicle?: any;

    quotationId: number;
    quotation?: TQuotationModel;
} & TBaseModel;

export default TOfferModel;
