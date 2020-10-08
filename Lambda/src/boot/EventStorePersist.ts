import * as LamDION from "@di-on.solutions/lamdion";
import {VirtualPayload} from "../Payload/VirtualPayload";

export const handler = LamDION.Bootstrap(async (event: AWSLambda.EventBridgeEvent<any, any>): Promise<any> => {
    const eventBridgeConvert = new LamDION.EventBridgeConvert(event);
    const dto = eventBridgeConvert.toEventDTO(VirtualPayload);

    console.log("[LAMDION TEST]: Recieved following event:");
    console.log(dto);

    const eventStore = new LamDION.EventStore({
        tableName: process.env.DDB_TABLE_NAME,
        tableRegion: process.env.AWS_REGION
    });

    await eventStore.persistDTO(dto);

    console.log("[LAMDION TEST]: Persisted event");
});