import * as LamDION from "@di-on.solutions/lamdion";
import * as AWSLambda from "aws-lambda";
import {TitlePayload} from "../../Payload/TitlePayload";

export const handler = LamDION.Bootstrap(async (event: any): Promise<AWSLambda.APIGatewayProxyResult> => {
    const payload = new TitlePayload();
    payload.title = "Gute Nacht";

    const dto = new LamDION.EventDTO<TitlePayload>();
    dto.EventPayload = payload;

    const eventBridge = new LamDION.EventBridgePublisher({
        eventEmitterID: {
            componentName: "Title",
            topicName: "Emit",
        }
    });

    await eventBridge.emit(TitlePayload, dto);

    return {
        statusCode: 200,
        body: "{}"
    };
});