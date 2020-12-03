import * as LamDION from "@di-on.solutions/lamdion";

export interface TitlePayload extends LamDION.EventPayload {
    title: string | undefined;
}