import * as LamDION from "@di-on.solutions/lamdion";
import * as AWSLambda from "aws-lambda";
import {ComposerPayload} from "../Payload/ComposerPayload";

export const handler = LamDION.Bootstrap(async (event: AWSLambda.EventBridgeEvent<any, any>) => {
    let payload = new ComposerPayload();
    payload.composer = "Mozart 2011";

    const dto = new LamDION.EventDTO<ComposerPayload>();
    dto.EventPayload = payload;

    const eventBridge = new LamDION.EventBridgePublisher({
        eventBusName: process.env.EVENT_BUS_NAME,
        eventEmitterID: "lambdion.emit.composer"
    });

    await eventBridge.emit(dto);
});