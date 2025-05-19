import IBaseRepository from "../base.repository";
import ItemRemittance from "../../models/item/Item";
import TItemRemittanceModel from "../../models/item/interfaces/Item.model";

class ItemRepository implements IBaseRepository<TItemRemittanceModel> {
    async findAll(): Promise<TItemRemittanceModel[]> {
        return await ItemRemittance.findAll();
    }

    async findOne({ id }: { id: string }): Promise<TItemRemittanceModel | null> {
        return await ItemRemittance.findOne({
            where: { id },
        });
    }

    async delete({ id }: { id: string }): Promise<boolean> {
        const deletedRows = await ItemRemittance.destroy({ where: { id } });
        return deletedRows > 0;
    }

    async create({ data }: { data: TItemRemittanceModel }): Promise<TItemRemittanceModel> {
        return await ItemRemittance.create(data);
    }

    async update({ data }: { data: TItemRemittanceModel }): Promise<TItemRemittanceModel | null> {
        const [affectedRows] = await ItemRemittance.update(data, {
            where: {
                id: data.id,
                quotationId: data.quotationId,
            },
        });

        return affectedRows > 0 ? data : null;
    }
}

export default new ItemRepository();
