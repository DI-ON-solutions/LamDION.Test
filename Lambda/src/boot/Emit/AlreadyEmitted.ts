import * as LamDION from "@di-on.solutions/lamdion";
import {TitlePayload} from "../../Payload/TitlePayload";

export const handler = LamDION.AWSEventBridgeBoostrap(TitlePayload, async (event): Promise<any> => {
    console.log("[LAMDION TEST]: Recieved following event:");

    const eventStore = new LamDION.EventStore({
        tableName: process.env.DDB_TABLE_NAME,
        tableRegion: process.env.AWS_REGION
    });

    const notEmittedDTO = new LamDION.EventDTO<any>();

    notEmittedDTO.EventPayload = {
        title: "sldjflksdjfklsdafjasdf"
    };

    if(!await eventStore.alreadyEmitted(notEmittedDTO)) {
        console.log("[LAMDION TEST]: Not emitted currently");
    }

    if(await eventStore.alreadyEmitted(event)) {
        console.log("[LAMDION TEST]: Already emitted");
    }

});