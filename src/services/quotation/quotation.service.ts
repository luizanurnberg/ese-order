import { addressMiddleware } from "../../middleware/tracking.middleware";
import {
    TCreateQuotationWithAddresses,
    TQuotationModel,
} from "../../models/quotation/interfaces/Quotation.model";
import Quotation from "../../models/quotation/Quotation";
import quotationRepository from "../../repositories/quotation/quotation.repository";
import itemService from "../item/item.service";

class QuotationService {
    async createQuotationWithAddressesUsecase(
        {
            quotation,
            destinationAddress,
            originAddress,
            itemRemittance,
        }: TCreateQuotationWithAddresses,
        token: any
    ) {
        try {
            const databaseOriginAddress: any = await addressMiddleware(originAddress, token);
            const databaseDestinationAddress: any = await addressMiddleware(
                destinationAddress,
                token
            );
            const databaseQuotation = await Quotation.create({
                ...quotation,
                originAddressId: databaseOriginAddress.address.id,
                destinationAddressId: databaseDestinationAddress.address.id,
            });
            await itemService.create({ ...itemRemittance, quotationId: databaseQuotation.id });
            return databaseQuotation;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        return quotationRepository.findAll();
    }

    async findAllWithoutApprovedOffers() {
        return quotationRepository.findAllWithoutApprovedOffers();
    }

    async findAllByCPF(cpf: string) {
        return quotationRepository.findAllByCPF({ cpf: cpf });
    }

    async findOne(id: string) {
        return quotationRepository.findOne({ id: id });
    }

    async create(data: TQuotationModel) {
        return quotationRepository.create({ data: data });
    }

    async update(data: TQuotationModel) {
        return quotationRepository.update({ data: data });
    }

    async deleteOne(id: string) {
        return quotationRepository.delete({ id: id });
    }
}
export default new QuotationService();
