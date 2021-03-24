import * as LamDION from "@di-on.solutions/lamdion";
import {DatePayload} from "../../Payload/DatePayload";

export const handler = LamDION.AWSEventBridgeBoostrap(DatePayload,async (event): Promise<any> => {
    console.log("[LAMDION TEST]: Recieved following event:");
    console.log(event);

    console.log(event.EventPayload.date);
    console.log(event.EventPayload.date.getTime());
});