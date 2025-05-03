import IBaseRepository from "../base.repository";
import { TQuotationModel } from "../../models/quotation/interfaces/Quotation.model";
import Quotation from "../../models/quotation/Quotation";
import { Op } from "sequelize";
import { z } from "zod";

const TQuotationSchema = z.object({
    cpf: z.string().nonempty(),
    email: z.string().nonempty(),
    currentDate: z.date(),
    originAddressId: z.number(),
    destinationAddressId: z.number(),
});

class QuotationRepository implements IBaseRepository<TQuotationModel> {
    async findAll(): Promise<TQuotationModel[]> {
        return await Quotation.findAll();
    }

    async findAllWithoutApprovedOffers(): Promise<TQuotationModel[]> {
        return await Quotation.findAll();
    }

    async findAllByCPF({ cpf }: { cpf: string }): Promise<TQuotationModel[]> {
        return await Quotation.findAll({
            where: { cpf },
        });
    }

    async findOne({ id }: { id: string }): Promise<TQuotationModel | null> {
        return await Quotation.findOne({ where: { id } });
    }

    async delete({ id }: { id: string }): Promise<boolean> {
        const deletedRows = await Quotation.destroy({ where: { id } });
        return deletedRows > 0;
    }

    async create({ data }: { data: any }): Promise<TQuotationModel> {
        await this.validateInput(data);
        return await Quotation.create(data);
    }

    async update({ data }: { data: TQuotationModel }): Promise<TQuotationModel | null> {
        const [affectedRows] = await Quotation.update(data, { where: { id: data.id } });
        return affectedRows > 0 ? data : null;
    }

    private async validateInput(data: TQuotationModel) {
        try {
            await TQuotationSchema.parseAsync(data);
        } catch (error) {
            throw new Error("Erro. Os campos obrigatórios devem ser preenchidos corretamente!");
        }
    }
}

export default new QuotationRepository();
