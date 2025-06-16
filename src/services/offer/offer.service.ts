import OfferRepository from "../../repositories/offer/offer.repository";
import { OFFER_STATUS } from "../../models/offer/interfaces/enum";
import { deliveryProcessMiddleware } from "../../middleware/tracking.middleware";
import TOfferModel from "../../models/offer/interfaces/Offer.model";
import { paymentMiddlware } from "../../middleware/payment.middleware";
import QuotationService from "../quotation/quotation.service";

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
            await OfferRepository.updateOfferStatus({
                data: {
                    id: offer.id ? offer.id : 0,
                    status: OFFER_STATUS.APPROVED
                }
            });

            const delivery = {
                fleetId: offer.fleetId,
                fleetVehicleId: offer.fleetId,
                statusId: "c7097e4e-2077-4b2b-9c2d-74b1c4aa14bb",
                startedAt: new Date(),
                endedAt: null
            }

            const deliveryProcess: any = await deliveryProcessMiddleware(delivery, token);
            const quotation: any = await QuotationService.findOne(offer.quotationId.toString());
            
            const payment = {
                paymentType: offer.paymentType,
                deliveryProcessId: deliveryProcess.process.id,
                quotationEmail: quotation.email
            }
            await paymentMiddlware(payment, token);

            return {
                offerId: offer.id,
                deliveryProcessId: deliveryProcess.process.id,
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
