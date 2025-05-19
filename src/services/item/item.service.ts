import itemRepository from "../../repositories/item/item.repository";

class ItemService {
    async findAll() {
        return itemRepository.findAll();
    }

    async findOne(id: string) {
        return itemRepository.findOne({ id });
    }

    async create(data: any) {
        return itemRepository.create({ data });
    }

    async update(data: any) {
        return itemRepository.update({ data });
    }

    async deleteOne(id: string) {
        return itemRepository.delete({ id });
    }
}

export default new ItemService();
