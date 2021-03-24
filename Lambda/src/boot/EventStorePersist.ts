import * as LamDION from "@di-on.solutions/lamdion";
const cloneDeep = require('clone-deep');
import {DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb";

export const handler = LamDION.Bootstrap(async (event): Promise<any> => {
    console.log("[LAMDION TEST]: Recieved following event:");

    let payload = cloneDeep(event["detail"]);
    delete payload["EventVersion"];
    delete payload["EventTime"];
    delete payload["EventCausationID"];
    delete payload["EventCorrelationID"];
    delete payload["EventID"];

    const time = new Date(event["detail"]["EventTime"]);

    const dynamoDBClient = new DynamoDBClient({
        apiVersion: "2012-08-10",
        region: process.env.AWS_REGION
    });

    const putItem = new PutItemCommand({
        TableName: process.env.DDB_TABLE_NAME,
        Item: {
            'EVENT_ID': {
                S: event["detail"]["EventID"]
            },
            'EVENT_CAUSATION_ID': {
                S: event["detail"]["EventCausationID"]
            },
            'EVENT_CORRELATION_ID': {
                S: event["detail"]["EventCorrelationID"]
            },
            'EVENT_TIME': {
                N: time.getTime().toString()
            },
            'EVENT_EMITTER_ID': {
                S: event["source"]
            },
            'EVENT_PAYLOAD': {
                S: JSON.stringify(payload)
            },
            'EVENT_TYPE': {
                S: event["detail-type"]
            },
            'EVENT_VERSION': {
                N: event["detail"]["EventVersion"].toString()
            }
        }
    });

    await dynamoDBClient.send(putItem);

    console.log("[LAMDION TEST]: Persisted event");
});