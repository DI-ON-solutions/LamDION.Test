import * as LamDION from "@di-on.solutions/lamdion";

export interface ComposerPayload extends LamDION.EventPayload {
    composer: string | undefined;
}