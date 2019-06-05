let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    s3.listObjects({
        'Bucket': 'hirudinee-test001',
        'MaxKeys': 10
    }).promise()
        .then(data => {

            let jsonObj = data;
            let jsonStr = JSON.stringify(jsonObj);

            console.log(data);
            callback(null, { "message": "Successfully executed", jsonStr });          // successful response

        })
        .catch(err => {
            console.log(err, err.stack);
            let jsonObj = err;
            let jsonStr = JSON.stringify(jsonObj);

            callback(null, { "message": "error", jsonObj }); // an error occurred
        });

}