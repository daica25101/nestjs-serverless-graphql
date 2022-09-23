export interface IBaseRepository<T> {
  get() : Promise<T[]>;

  getById(id: string | number) : Promise<T>
}