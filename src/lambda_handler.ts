import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda";
import model from "./models";
import {startConnection} from './database';

export async function getUsers(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    context.callbackWaitsForEmptyEventLoop = false;
    await startConnection();
    const users = await model.find();
    let response:APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify(users)
    };
    return response;​
}

export async function getUserById(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    context.callbackWaitsForEmptyEventLoop = false;
    await startConnection();
    const user = await model.findById(event.pathParameters!.id);
    let responseId:APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify(user)
    };
    return responseId;
}

export async function createUser(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult>{

    context.callbackWaitsForEmptyEventLoop = false;
    await startConnection(); 
    const user = JSON.parse(event.body!);
    const creation = await model.create(user);
       
    let responseId:APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify(creation)
    };
    return responseId;

}

