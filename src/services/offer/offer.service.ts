import OfferRepository from "../../repositories/offer/offer.repository";
import Offer from "../../models/offer/Offer";
import { OFFER_STATUS } from "../../models/offer/interfaces/enum";

class OfferService {
    async findAll() {
        return OfferRepository.findAll();
    }

    async findOne(id: string) {
        return OfferRepository.findOne({ id });
    }

    async findOfferByQuotationId(quotationId: string) {
        return OfferRepository.findAllByQuotation(quotationId);
    }

    async create(data: any) {
        return OfferRepository.create({ data });
    }

    async approveOfferUsecase(offer: Offer) {
        try {
            const updatedOffer = await OfferRepository.update({
                data: { ...offer, status: OFFER_STATUS.APPROVED },
            });
    
            if (!(updatedOffer?.status == OFFER_STATUS.APPROVED)) throw Error("erro");
    
            // TO DO: integrar com o microsserviço do schork
            // const deliveryProcess = await deliveryProcessRepository.create({
            //     data: {
            //         offerId: offer.id,
            //         createdBy: "",
            //         createdAt: new Date(),
            //         status: DELIVERY_PROCESS_STATUS.CREATED,
            //     },
            // });
    
            return {
                offerId: offer.id,
                deliveryProcessId: null,
            };
        } catch (error) {
            throw error;
        }
    }

    async update(data: any) {
        return OfferRepository.update({ data });
    }

    async deleteOne(id: string) {
        return OfferRepository.delete({ id });
    }
}

export default new OfferService();
