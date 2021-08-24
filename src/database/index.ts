import { createConnection,Connection,getConnectionOptions } from "typeorm";

export default async ():Promise<Connection> =>{
    console.log('defaultOptions ');
    const defaultOptions = await getConnectionOptions();
    return createConnection(Object.assign(defaultOptions,{
        database:process.env.NODE_ENV === "test"?"myCommerce_test":defaultOptions.database
    }))
}