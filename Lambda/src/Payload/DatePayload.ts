import * as LamDION from "@di-on.solutions/lamdion";

export interface DatePayload extends LamDION.EventPayload {
    date: Date;
}