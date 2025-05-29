import OfferRepository from "../../repositories/offer/offer.repository";
import { OFFER_STATUS } from "../../models/offer/interfaces/enum";
import { deliveryProcessMiddleware } from "../../middleware/tracking.middleware";
import TOfferModel from "../../models/offer/interfaces/Offer.model";

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

    async create(data: TOfferModel) {
        return OfferRepository.create({ data });
    }

    async approveOfferUsecase(offer: TOfferModel, token: string) {
        try {
            const updatedOffer = await OfferRepository.updateOfferStatus({
                data: {
                    id: offer.id ? offer.id : 0,
                    status: OFFER_STATUS.APPROVED
                }
            });

            const delivery = {
                fleetId: offer.fleetId,
                fleetVehicleId: offer.fleetId,
                statusId: 2,
                startedAt: new Date(),
                endedAt: null
            }

            const deliveryProcess: any = await deliveryProcessMiddleware(delivery, token);
            console.log(deliveryProcess)
            return {
                offerId: offer.id,
                deliveryProcessId: null,
            };
        } catch (error) {
            throw error;
        }
    }

    async update(data: TOfferModel) {
        return OfferRepository.update({ data });
    }

    async deleteOne(id: string) {
        return OfferRepository.delete({ id });
    }
}

export default new OfferService();
