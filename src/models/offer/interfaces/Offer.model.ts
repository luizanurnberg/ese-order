import TBaseModel from "../../Base.model";
import { TQuotationModel } from "../../quotation/interfaces/Quotation.model";

type TOfferModel = {
    id?: number;
    status: string;
    subtotal: number;
    taxes?: number;
    total: number;
    deliveryForecast: Date;

    fleetVehicleId?: number;
    fleetId?: any;

    quotationId: number;
    quotation?: TQuotationModel;
    paymentType?: string;
} & TBaseModel;

export default TOfferModel;
