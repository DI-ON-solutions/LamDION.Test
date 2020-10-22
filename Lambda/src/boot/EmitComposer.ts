import * as LamDION from "@di-on.solutions/lamdion";
import * as AWSLambda from "aws-lambda";
import {ComposerPayload} from "../Payload/ComposerPayload";
import {v4 as uuidv4} from "uuid";

export const handler = LamDION.Bootstrap(async (event: AWSLambda.EventBridgeEvent<any, any>) => {
    let payload = new ComposerPayload();
    payload.composer = "Mozart 2011";

    const EventCorrelationID = uuidv4();

    const dto = new LamDION.EventDTO<ComposerPayload>();
    dto.EventPayload = payload;
    dto.EventCorrelationID = EventCorrelationID;

    const secondDTO = new LamDION.EventDTO<ComposerPayload>();
    secondDTO.EventPayload = payload;
    secondDTO.EventCorrelationID = EventCorrelationID;

    console.log(dto);
    console.log(secondDTO);

    const eventBridge = new LamDION.EventBridgePublisher({
        eventBusName: process.env.EVENT_BUS_NAME,
        eventEmitterID: "lambdion.emit.composer"
    });

    await eventBridge.emit(dto);
    await eventBridge.emit(secondDTO);
});