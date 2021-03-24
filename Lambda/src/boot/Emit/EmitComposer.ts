import * as LamDION from "@di-on.solutions/lamdion";
import {ComposerPayload} from "../../Payload/ComposerPayload";
import {TitlePayload} from "../../Payload/TitlePayload";

export const handler = LamDION.AWSEventBridgeBoostrap(TitlePayload, async (event) => {
    const payload = new ComposerPayload();
    payload.composer = "Mozart 2011";

    const eventBridge = new LamDION.EventBridgePublisher({
        eventEmitterID: {
            componentName: "Composer",
            topicName: "Emit",
        }
    });

    const dto = new LamDION.EventDTO<ComposerPayload>(event);
    dto.EventPayload = payload;
    await eventBridge.emit(ComposerPayload, dto);

    const secondDTO = new LamDION.EventDTO<ComposerPayload>(event);
    secondDTO.EventPayload = payload;
    await eventBridge.emit(ComposerPayload, secondDTO);
});