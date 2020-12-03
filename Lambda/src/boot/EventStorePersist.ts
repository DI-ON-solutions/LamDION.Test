import * as LamDION from "@di-on.solutions/lamdion";

export const handler = LamDION.AWSEventBridgeBoostrap<any>(async (event): Promise<any> => {
    console.log("[LAMDION TEST]: Recieved following event:");

    const eventStore = new LamDION.EventStore({
        tableName: process.env.DDB_TABLE_NAME,
        tableRegion: process.env.AWS_REGION
    });

    await eventStore.persistDTO(event);

    console.log("[LAMDION TEST]: Persisted event");
});