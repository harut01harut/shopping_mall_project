import { DeepPartial, FindManyOptions, FindOneOptions, FindOptionsWhere } from "typeorm";
import { I_PaginateOptions } from "../../paginate";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
import {UpdateResult} from "typeorm/query-builder/result/UpdateResult";

export interface I_BaseRepository<T> {
  create(data: DeepPartial<T>): T;
  createMany(data: DeepPartial<T>[]): T[]
  save(data: DeepPartial<T>): Promise<T>
  saveMany(data: DeepPartial<T>[]): Promise<T[]>
  findOneById(id: any): Promise<T>
  findByCondition(filterCondition: FindOneOptions<T>): Promise<T>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>
  findAndFilterWithPagination(query: I_PaginateOptions, options?: FindManyOptions<T>): Promise<[ T[], number ]>
  findWithRelations(relations: FindManyOptions<T>): Promise<T[]>
  findOne(options: FindOneOptions<T>): Promise<T>
}
