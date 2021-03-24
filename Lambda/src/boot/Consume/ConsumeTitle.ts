import * as LamDION from "@di-on.solutions/lamdion";
import {TitlePayload} from "../../Payload/TitlePayload";

export const handler = LamDION.AWSEventBridgeBoostrap(TitlePayload, async (event): Promise<any> => {
    console.log("[LAMDION TEST]: Recieved following event:");
    console.log(event);

    console.log(event.EventPayload.title);
});