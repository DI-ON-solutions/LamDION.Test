import * as LamDION from "@di-on.solutions/lamdion";
import {jsonObject, jsonMember} from "@di-on-solutions/lamdion";

@jsonObject
export class DatePayload extends LamDION.EventPayload {

    @jsonMember
    public date: Date;
}