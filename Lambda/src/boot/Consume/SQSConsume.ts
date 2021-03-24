import * as LamDION from "@di-on.solutions/lamdion";
import {TitlePayload} from "../../Payload/TitlePayload";

export const handler = LamDION.AWSSimpleQueueServiceBootstrap(TitlePayload, async (event) => {
    if(event.length >= 1) {
        console.log("[LAMDION TEST]: Extracted following DTO from AWS Simple Queue Service:");
        console.log(event[0]);
    }
});