import { Model } from "mongoose"

export default function crudFunctions(model : Model<any>) {
    return {
      model: model,
      create: async function (data : any) {
        const created = await this.model.create(data)
        return created
      },
      getAll: async function () {
        const allDocs = await this.model.find()
        return allDocs
      },
      getById: async function (id : string) {
        const doc = await this.model.findById(id)
        return doc
      },
      update: async function (id : string, data : any) {
        const updatedDoc = await this.model.findByIdAndUpdate(id, data, {
          new: true
        })
        return updatedDoc
      },
      delete: async function (id : string) {
        const deletedDoc = await this.model.findByIdAndDelete(id)
        return deletedDoc
      },
      getDocPaginated: async function (page = 1, limit = 10) {
        const docs = await this.model
          .find()
          .sort({ createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
        return docs
      },
      deleteManyByIds : async function (idsArray : string[] = []) {
        const response = this.model.deleteMany({
          _id : {
            "$in" : idsArray
          }
        });
        return response;
      }
    }
  }