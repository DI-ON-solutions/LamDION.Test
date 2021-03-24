import * as LamDION from "@di-on.solutions/lamdion";
import {jsonObject, jsonMember} from "@di-on-solutions/lamdion";

@jsonObject
export class TitlePayload extends LamDION.EventPayload {

    @jsonMember
    public title: string | undefined;
}