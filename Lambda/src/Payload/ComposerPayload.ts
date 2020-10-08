import * as LamDION from "@di-on.solutions/lamdion";

export class ComposerPayload implements LamDION.EventPayload {
    public composer: string | undefined;
}