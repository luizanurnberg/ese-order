import TAddressModel from "../../models/address/interfaces/Address.model";
import TQuotationModel from "../../models/quotation/interfaces/Quotation.model";
import Address from "../../models/address/Address";
import Quotation from "../../models/quotation/Quotation";
import TItemRemittanceModel from "../../models/item-remittance/interface/ItemRemittance.model";
import ItemRemittance from "../../models/item-remittance/ItemRemittance";

export type TCreateQuotationWithAddresses = {
    quotation: TQuotationModel;
    destinationAddress: TAddressModel;
    originAddress: TAddressModel;
    itemRemittance: TItemRemittanceModel;
};

async function createQuotationWithAddressesUsecase({
    quotation,
    destinationAddress,
    originAddress,
    itemRemittance,
}: TCreateQuotationWithAddresses) {
    try {
        const databaseOriginAddress = await Address.create(originAddress);

        const databaseDestinationAddress = await Address.create(destinationAddress);

        const databaseQuotation = await Quotation.create({
            ...quotation,
            originAddressId: databaseOriginAddress.id,
            destinationAddressId: databaseDestinationAddress.id,
        });

        await ItemRemittance.create({
            ...itemRemittance,
            quotationId: databaseQuotation.id,
        });

        return databaseQuotation;
    } catch (error) {
        throw error;
    }
}

export default createQuotationWithAddressesUsecase;
