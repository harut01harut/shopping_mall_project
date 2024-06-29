import {DeepPartial, FindManyOptions, FindOneOptions, FindOptionsWhere, ILike, Repository} from "typeorm";
import {I_BaseRepository} from "./interfaces/base-repository.interfaces";
import {I_PaginateOptions} from "../paginate";
import {PaginationDto} from "@common/dto/pagination.dto";

interface HasId {
  id: number
}

export abstract class BaseAbstractRepository<T extends HasId> implements I_BaseRepository<T>{
  private entity: Repository<T>
  protected constructor(
    entity: Repository<T>
  ) {
    this.entity = entity
  }

  public save(data: DeepPartial<T>): Promise<T> {
    return this.entity.save(data)
  }

  public saveMany(data: DeepPartial<T>[]): Promise<T[]> {
    return this.entity.save(data)
  }

  public create(data: DeepPartial<T>): T {
    return this.entity.create(data)
  }

  public createMany(data: DeepPartial<T>[]): T[] {
    return this.entity.create(data);
  }

  public findOneById(id: any): Promise<T> {
    const options: FindOptionsWhere<T> = {
      id: id
    }
    return this.entity.findOneBy(options)
  }

  public findByCondition(filterCondition: FindOneOptions<T>): Promise<T> {
    return this.entity.findOne(filterCondition)
  }

  public findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return this.entity.find(relations)
  }

  public findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.entity.find(options)
  }

  public findAndFilterWithPagination(query: I_PaginateOptions, options?: FindManyOptions<T>): Promise<[ T[], number ]> {

    const {
      page,
      perPage,
      sortOrder,
      sortField,
    } = query

    let queryOptions: FindManyOptions<T> = {}

    const filter = {}
    const paginationKeys = Object.keys(new PaginationDto())

    for (const queryKey in query) {
      if(
        !paginationKeys.includes(queryKey)
        && query[queryKey] !== undefined
      ){
        filter[queryKey] = typeof query[queryKey] === 'string'
          ? ILike(`%${query[queryKey]}%`)
          : query[queryKey]
      }
    }

    queryOptions.where = filter

    if (sortField && sortOrder) {
      const tmp = {}
      tmp[sortField] = sortOrder
      queryOptions.order = tmp
    }

    queryOptions.skip = (page - 1) * perPage;
    queryOptions.take = perPage;

    return this.entity.findAndCount({ ...queryOptions, ...options })
  }

  public findOne(options: FindManyOptions<T>): Promise<T> {
    return this.entity.findOne(options)
  }
}
