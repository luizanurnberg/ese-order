import TBaseModel from "../../Base.model";
import TFeedbackModel from "../../feedback/interfaces/Feedback.model";
import TOfferModel from "../../offer/interfaces/Offer.model";

type TDeliveryProcessModel = {
    id?: number;
    status: string;

    feedbackId?: number;
    feedback?: TFeedbackModel;

    offerId: number;
    offer?: TOfferModel;
} & TBaseModel;

export default TDeliveryProcessModel;
