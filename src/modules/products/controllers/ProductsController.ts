import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListProductService();
    const products = await service.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const service = new ShowProductService();
    const { id } = request.params;

    const product = await service.execute({ id });

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const service = new CreateProductService();
    const { name, price, quantity } = request.body;

    const product = await service.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateProductService();
    const { name, price, quantity } = request.body;
    const { id } = request.params;

    const product = await service.execute({
      name,
      price,
      quantity,
      id,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const service = new DeleteProductService();
    const { id } = request.params;

    service.execute({ id });

    return response.json([]);
  }
}
