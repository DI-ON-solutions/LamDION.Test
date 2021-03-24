import * as LamDION from "@di-on.solutions/lamdion";
import {ComposerPayload} from "../../Payload/ComposerPayload";

export const handler = LamDION.AWSEventBridgeBoostrap(ComposerPayload,async (event): Promise<any> => {
    //Search all lambdion.emit.composer dtos
    console.log("[LAMDION TEST]: Search all lambdion.emit.composer DTOs");

    const eventStore = new LamDION.EventStore({
        tableName: process.env.DDB_TABLE_NAME,
        tableRegion: process.env.AWS_REGION
    });

    console.log(await eventStore.searchDTO(ComposerPayload, event.EventCorrelationID, {
        topicName: "Emit",
        componentName: "Composer"
    }));
});