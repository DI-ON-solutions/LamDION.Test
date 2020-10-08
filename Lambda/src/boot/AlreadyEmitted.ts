import * as LamDION from "@di-on.solutions/lamdion";
import * as AWSLambda from "aws-lambda";
import {TitlePayload} from "../Payload/TitlePayload";

export const handler = LamDION.Bootstrap(async (event: AWSLambda.EventBridgeEvent<any, any>): Promise<any> => {
    const eventBridgeConvert = new LamDION.EventBridgeConvert(event);
    const dto = eventBridgeConvert.toEventDTO(TitlePayload);

    console.log("[LAMDION TEST]: Recieved following event:");
    console.log(dto);

    const eventStore = new LamDION.EventStore({
        tableName: process.env.DDB_TABLE_NAME,
        tableRegion: process.env.AWS_REGION
    });

    const notEmittedDTO = new LamDION.EventDTO();
    notEmittedDTO.EventPayload = new TitlePayload();

    if(!await eventStore.alreadyEmitted(notEmittedDTO)) {
        console.log("[LAMDION TEST]: Not emitted currently");
    }

    if(await eventStore.alreadyEmitted(dto)) {
        console.log("[LAMDION TEST]: Already emitted");
    }

});