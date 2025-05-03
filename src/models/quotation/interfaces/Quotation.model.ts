import TBaseModel from "../../Base.model";
import TOfferModel from "../../offer/interfaces/Offer.model";

export type TQuotationModel = {
    id?: number;
    cpf: string;
    email: string;
    currentDate: Date;
    originAddressId?: number;
    destinationAddressId?: number;
    originAddress?: any;
    destinationAddress?: any;
    itemRemittances?: any[];
    offers?: TOfferModel[];
} & TBaseModel;

export type TCreateQuotationWithAddresses = {
    quotation: TQuotationModel;
    destinationAddress: any;
    originAddress: any;
    itemRemittance: any;
};
