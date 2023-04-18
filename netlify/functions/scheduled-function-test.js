// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.js

const { schedule } = require("@netlify/functions");

const handler = async function(event, context) {
    console.log("Received event:", event);

    return {
        statusCode: 200,
    };
};

exports.handler = schedule("@hourly", handler);

