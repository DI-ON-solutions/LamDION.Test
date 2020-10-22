import * as LamDION from "@di-on.solutions/lamdion";
import * as AWSLambda from "aws-lambda";
import {TitlePayload} from "../Payload/TitlePayload";
import {ComposerPayload} from "../Payload/ComposerPayload";

export const handler = LamDION.Bootstrap(async (event: AWSLambda.EventBridgeEvent<any, any>): Promise<any> => {
    const eventBridgeConvert = new LamDION.EventBridgeConvert(event);
    const dto = eventBridgeConvert.toEventDTO(ComposerPayload);

    //Search all lambdion.emit.composer dtos
    console.log("[LAMDION TEST]: Search all lambdion.emit.composer DTOs");

    const eventStore = new LamDION.EventStore({
        tableName: process.env.DDB_TABLE_NAME,
        tableRegion: process.env.AWS_REGION
    });

    console.log(await eventStore.searchDTO(dto.EventCorrelationID, "lambdion.emit.composer"));
});