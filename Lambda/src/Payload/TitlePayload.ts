import * as LamDION from "@di-on.solutions/lamdion";

export class TitlePayload implements LamDION.EventPayload {
    public title: string | undefined;
}