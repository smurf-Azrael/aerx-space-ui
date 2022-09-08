const AWS = require('aws-sdk');
const filebase = new AWS.S3({
    endpoint: 'https://s3.filebase.com', 
    signatureVersion: 'v4',
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,

});

const listBuckets = (access_key) => {
    if (access_key == process.env.ACCESS_KEY){
        console.log("access key is right, listing all buckets....")
        filebase.listBuckets((err, data) => {
            if (err) {
                //Todo: throw an alert
                console.log("Error! unable to list available buckets ", err.stack);
            } else {
                //Todo: display buckets
                console.log("Available Buckets: ", data.Buckets);
            }
        })

    }else{
        //Todo: Throw an unauthorised error
        console.log("Invalid access key")
    }

}

const initChat = (caller, receiver, message) => {
    const aerx_chat = {
        Bucket: "aerx-chats",
        Key: `aerx-chat between ${[caller, receiver]}`,
        Body : `${Date.now()}` + " " + `${caller}` + ":"  + `${message}`,
        ContentType: "aerx-chat",
        Metadata : {
            sender: `${caller}`,
            receiver: `${receiver}`,
        }
    }
    filebase.putObject(aerx_chat, (err, data) => {
        if(err) {
            console.log("Error! unable to upload chat ", err.stack)
        }else{
            console.log("Chat uploaded succesfully ", data)
        }
    })
}

//Todo: use a function to handle the init chat on second try
const sendMessage = async(caller, receiver, message) => {
    const params = {
      Key: `aerx-chat between ${caller},${receiver}`,
      Bucket: "aerx-chats"
    };
    try {
        filebase.getObject(params, (err, data) => {
        if (err) {
            const param = {
                Key: `aerx-chat between ${receiver},${caller}`,
                Bucket: "aerx-chats"
              };
              filebase.getObject(param, (err, data) => {
                if (err) {
                   console.error("Chat does not exist")
                } else {
                  const prevChat = Buffer.from(data.Body, 'utf8').toString();
                  console.log("prev chats on second try: ", prevChat);
                  const aerx_chat = {
                    Bucket: "aerx-chats",
                    Key: `aerx-chat between ${[receiver, caller]}`,
                    Body : `${Date.now()}` + " " + `${caller}` + ":"  + `${message}` + "\n" + `${prevChat}`,
                    ContentType: "aerx-chat",
                    Metadata : {
                        sender: `${caller}`,
                        receiver: `${receiver}`,
                    }
                }
                filebase.putObject(aerx_chat, (err, data) => {
                    if(err) {
                        console.log("Error! unable to upload chat ", err.stack)
                    }else{
                        console.log("Chat uploaded succesfully ", data)
                    }
                })
                }
              });
        } else {
          const prevChat = Buffer.from(data.Body, 'utf8').toString();
          console.log("prev chats on first try: ", prevChat);
          initChat(caller, receiver, `${message}` + "\n" + `${prevChat}`)
        }
      })
    } catch (err) {
      console.error("try caught error: ",err);
    }
    
}

const getChat = async(caller, receiver) => {
    const params = {
      Key: `aerx-chat between ${caller},${receiver}`,
      Bucket: "aerx-chats"
    };
    try {
        filebase.getObject(params, (err, data) => {
        if (err) {
            const param = {
                Key: `aerx-chat between ${receiver},${caller}`,
                Bucket: "aerx-chats"
              };
              filebase.getObject(param, (err, data) => {
                if (err) {
                   console.error("Chat does not exist")
                   return false
                } else {
                  const prevChat = Buffer.from(data.Body, 'utf8').toString();
                  console.log("prev chats on second try: ", prevChat);
                  return prevChat;
                }
              });
        } else {
          const prevChat = Buffer.from(data.Body, 'utf8').toString();
          console.log("prev chats on first try: ", prevChat);
          return prevChat;
        }
      })
    } catch (err) {
      console.error("try caught error: ",err);
    }
    
}



export{listBuckets, initChat, sendMessage, getChat}
