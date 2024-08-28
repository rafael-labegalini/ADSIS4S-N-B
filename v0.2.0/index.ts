import 'reflect-metadata';
import { AppDataSource } from './src/db/connection';
import { Category } from './src/entities/category.entity';

const category = new Category();
category.name = "Teste";

const repository = AppDataSource.getRepository(Category)
repository.save(category)
    .then(() => console.log('Salvo com sucesso'));