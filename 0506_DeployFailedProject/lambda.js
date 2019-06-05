let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    s3.listObjects({
        'Bucket': 'as2-test-lahiru',
        'MaxKeys': 10,
        'Prefix': ''
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
             Contents: [
                {
                   ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                   Key: "example1.jpg",
                   LastModified: <Date Representation>,
                   Owner: {
                      DisplayName: "myname",
                      ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                   },
                   Size: 11,
                   StorageClass: "STANDARD"
                },
                {...}
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

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
    //kumudika commit
    //kumudika commit 2
}