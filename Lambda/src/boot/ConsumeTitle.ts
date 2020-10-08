import * as LamDION from "@di-on.solutions/lamdion";
import * as AWSLambda from "aws-lambda";
import {TitlePayload} from "../Payload/TitlePayload";

export const handler = LamDION.Bootstrap(async (event: AWSLambda.EventBridgeEvent<any, any>): Promise<any> => {
    const eventBridgeConvert = new LamDION.EventBridgeConvert(event);
    const dto = eventBridgeConvert.toEventDTO(TitlePayload);

    console.log("[LAMDION TEST]: Recieved following event:");
    console.log(dto);
});