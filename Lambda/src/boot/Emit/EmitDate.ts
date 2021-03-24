import * as LamDION from "@di-on.solutions/lamdion";
import {DatePayload} from "../../Payload/DatePayload";
import {TitlePayload} from "../../Payload/TitlePayload";

export const handler = LamDION.AWSEventBridgeBoostrap(TitlePayload, async (event) => {
    const payload = new DatePayload();
    payload.date = new Date();

    const dto = new LamDION.EventDTO<DatePayload>(event);
    dto.EventPayload = payload;

    const eventBridge = new LamDION.EventBridgePublisher({
        eventEmitterID: {
            componentName: "Date",
            topicName: "Emit",
        }
    });

    await eventBridge.emit(DatePayload, dto);
});