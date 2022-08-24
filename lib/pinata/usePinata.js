import toast from 'react-hot-toast'
import { pinFileToIPFS } from './ipsPinata';

const usePinata = (file) => {
        const filename = file?.name;
        var parts = filename.split(".");
        const fileType = parts[parts.length - 1];

       return pinFileToIPFS(file, filename)
            .then((res) => {
                // Createthe url and get the sha256 base64 hash of the url
                const _fileUrl =
                    "https://ipfs.io/ipfs/" + res.data.IpfsHash;
                const _urlHash = new shajs.sha256()
                    .update(_fileUrl)
                    .digest("base64");

                setIpfsData((prevIpfs) => ({
                    ...prevIpfs,
                    fileUrl: _fileUrl,
                    fileSize: res.data.PinSize,
                    urlSha256: _urlHash,
                }));
                toast.success(
                    "File deployed to IPFS! CID: " + res.data.IpfsHash,
                    "ipfsSccss",
                );
                return [res.data.IpfsHash, res.data.PinSize];
            })
            .then(
                ([fileCid, filePinSize]) => {
                    if (deployCrust) {
                        upload(fileCid, filePinSize)
                            .then((crustScs) => {
                                if (crustScs === true) {
                                    toast.success(
                                        "success",
                                        "File deployed to Crust!",
                                        "crustSccss",
                                    );
                                    // TODO: fix below
                                    // unpinPinata(fileCid);
                                }
                            })
                            .catch((error) => console.log(error));
                    }
                },
            )
            .catch((e) => {
                toast.error("Couldn't pin file to Pinata!", "ipfsError");
                console.log("Couldn't pin file to Pinata ", e);
            });
    }

export default usePinata;