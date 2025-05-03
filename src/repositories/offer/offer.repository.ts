import IBaseRepository from "../base.repository";
import TOfferModel from "../../models/offer/interfaces/Offer.model";
import Offer from "../../models/offer/Offer";

class OfferRepository implements IBaseRepository<TOfferModel> {
    async findAll(): Promise<TOfferModel[]> {
        return await Offer.findAll();
    }

    async findOne({ id }: { id: string }): Promise<TOfferModel | null> {
        return await Offer.findOne({
            where: { id },
        });
    }

    async delete({ id }: { id: string }): Promise<boolean> {
        const deletedRows = await Offer.destroy({ where: { id } });
        return deletedRows > 0;
    }

    async create({ data }: { data: TOfferModel }): Promise<TOfferModel> {
        return await Offer.create(data);
    }

    async update({ data }: { data: TOfferModel }): Promise<TOfferModel | null> {
        const [affectedRows] = await Offer.update(data, {
            where: {
                id: data.id,
                quotationId: data.quotationId,
            },
        });

        return affectedRows > 0 ? data : null;
    }

    async findAllByQuotation(quotationId: any): Promise<TOfferModel[]> {
        return await Offer.findAll({
            where: { quotationId: Number(quotationId) },
        });
    }
}

export default new OfferRepository();
