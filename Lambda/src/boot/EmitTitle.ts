import * as LamDION from "@di-on.solutions/lamdion";
import * as AWSLambda from "aws-lambda";
import {TitlePayload} from "../Payload/TitlePayload";

export const handler = LamDION.Bootstrap(async (event: AWSLambda.EventBridgeEvent<any, any>): Promise<AWSLambda.APIGatewayProxyResult> => {
    let payload = new TitlePayload();
    payload.title = "Gute Nacht";

    const dto = new LamDION.EventDTO<TitlePayload>();
    dto.EventPayload = payload;

    const eventBridge = new LamDION.EventBridgePublisher({
        eventBusName: process.env.EVENT_BUS_NAME,
        eventEmitterID: "lambdion.emit.title"
    });

    await eventBridge.emit(dto);

    return {
        statusCode: 200,
        body: "{}"
    };
});