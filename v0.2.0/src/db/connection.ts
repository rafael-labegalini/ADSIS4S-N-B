import { DataSource } from "typeorm"
import { Category } from "../entities/category.entity"


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: 'database.sqlite',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })