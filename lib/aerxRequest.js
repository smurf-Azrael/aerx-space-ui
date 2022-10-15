const AWS = require("aws-sdk");
const filebase = new AWS.S3({
  endpoint: "https://s3.filebase.com",
  signatureVersion: "v4",
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
});

const uploadRequest = async (caller, receiver, type, amount, message) => {
  const params = {
    Key: `aerx-${type} between ${caller},${receiver}`,
    Bucket: "aerx-requests",
  };
  try {
    filebase.getObject(params, (err, data) => {
      if (err) {
        const param = {
          Key: `aerx-${type} between ${receiver},${caller}`,
          Bucket: "aerx-requests",
        };
        filebase.getObject(param, (err, data) => {
          if (err) {
            const aerx_request = {
              Bucket: "aerx-requests",
              Key: `aerx-${type} between ${[caller, receiver]}`,
              Body:
                "[" +
                `"${Date.now()}",` +
                " " +
                `"${caller}",` +
                " " +
                `"${message}",` +
                " " +
                `"${amount}"` +
                "]",
              ContentType: `aerx-${type}`,
              Metadata: {
                sender: `${caller} `,
                receiver: `${receiver} `,
              },
            };
            filebase.putObject(aerx_request, (err, data) => {
              if (err) {
                console.log("Error! unable to upload Request ", err.stack);
              } else {
                console.log("Request uploaded succesfully ", data);
              }
            });
          } else {
            const prevRequests = Buffer.from(data.Body, "utf8").toString();
            const aerx_request = {
              Bucket: "aerx-requests",
              Key: `aerx-${type} between ${[receiver, caller]}`,
              Body:
                "[" +
                `"${Date.now()}",` +
                " " +
                `"${caller}",` +
                " " +
                `"${message}",` +
                " " +
                `"${amount}"` +
                "]" +
                "##aerx-request##" +
                `${prevRequests}`,
              ContentType: `aerx-${type}`,
              Metadata: {
                sender: `${receiver} `,
                receiver: `${caller} `,
              },
            };
            filebase.putObject(aerx_request, (err, data) => {
              if (err) {
                console.log("Error! unable to upload Request ", err.stack);
              } else {
                console.log("Request uploaded succesfully ", data);
              }
            });
          }
        });
      } else {
        const prevRequests = Buffer.from(data.Body, "utf8").toString();
        const aerx_request = {
          Bucket: "aerx-requests",
          Key: `aerx-${type} between ${[caller, receiver]}`,
          Body:
            "[" +
            `"${Date.now()}",` +
            " " +
            `"${caller}",` +
            " " +
            `"${message}",` +
            " " +
            `"${amount}"` +
            "]" +
            "##aerx-request##" +
            `${prevRequests}`,
          ContentType: `aerx-${type}`,
          Metadata: {
            sender: `${caller} `,
            receiver: `${receiver} `,
          },
        };
        filebase.putObject(aerx_request, (err, data) => {
          if (err) {
            console.log("Error! unable to upload Request ", err.stack);
          } else {
            console.log("Request uploaded succesfully ", data);
          }
        });
      }
    });
  } catch (err) {
    console.error("try caught error: ", err);
  }
};

const getRequest = async (caller, receiver) => {
  const params = {
    Key: `aerx-${type} between ${caller},${receiver}`,
    Bucket: "aerx-requests",
  };
  try {
    await filebase.getObject(params, async (err, data) => {
      if (err) {
        const param = {
          Key: `aerx-${type} between ${receiver},${caller}`,
          Bucket: "aerx-requests",
        };
        await filebase.getObject(param, (err, data) => {
          if (err) {
            console.log("Request does not exist");
          } else {
            const prevRequest = Buffer.from(data.Body, "utf8").toString();
            console.log("prev c: ", prevRequest);
            const requestArray = prevRequest.split("##aerx-request##");
            let allRequests = [];
            for (let i = 0; i < requestArray.length; i++) {
              const requestArrayFormatted = requestArray[i].replaceAll(
                "\n",
                " "
              );
              const json = JSON.parse(requestArrayFormatted);
              console.log(json);
              console.log("time: ", json[0]);
              console.log("sender: ", json[1]);
              console.log("message: ", json[2]);
              console.log("amount: ", json[3]);
              const _request = {
                id: Math.random().toString(36).substr(2, 9),
                sender: {
                  id: json[1],
                  name: json[1],
                },
                // type: EMessageType.TEXT,
                message: json[2],
                amount: json[3],
                createdAt: json[0],
              };
              allRequests.push(_request);
            }
            const newMessages = [...messages, allRequests];
            dispatch(setDirectMessages(newMessages));
          }
        });
      } else {
        const prevRequest = Buffer.from(data.Body, "utf8").toString();
        console.log("prev c: ", prevRequest);
        const requestArray = prevRequest.split("##aerx-request##");
        let allRequests = [];
        for (let i = 0; i < requestArray.length; i++) {
          const requestArrayFormatted = requestArray[i].replaceAll("\n", " ");
          const json = JSON.parse(requestArrayFormatted);
          console.log(json);
          console.log("time: ", json[0]);
          console.log("sender: ", json[1]);
          console.log("message: ", json[2]);
          console.log("amount: ", json[3]);
          const _request = {
            id: Math.random().toString(36).substr(2, 9),
            sender: {
              id: json[1],
              name: json[1],
            },
            // type: EMessageType.TEXT,
            message: json[2],
            amount: json[3],
            createdAt: json[0],
          };
          allRequests.push(_request);
        }
      }
    });
  } catch (err) {
    console.error("try caught error: ", err);
  }
};

export { uploadRequest, getRequest };
