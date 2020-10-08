import * as LamDION from "@di-on.solutions/lamdion";
import * as AWSLambda from "aws-lambda";
import {TitlePayload} from "../Payload/TitlePayload";

export const handler = LamDION.Bootstrap(async (event: AWSLambda.SQSEvent) => {
    if(event.Records.length >= 1) {
        const simpleQueueServiceConvert = new LamDION.SimpleQueueServiceConvert(event.Records[0]);
        const dto = simpleQueueServiceConvert.toEventDTO(TitlePayload);

        console.log("[LAMDION TEST]: Extracted following DTO from AWS Simple Queue Service:");
        console.log(dto);
    }
});