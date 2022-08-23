// custom hook for IPFS
import { useEffect, useState } from "react";
import { pinToIPFS } from "../lib/pinata";
import { UseToastOptions } from "@chakra-ui/react";
import shajs from "sha.js";
import { AnyArray } from "immer/dist/internal";

export type usePinataProps = {
    file: File | undefined;
    toast: (
        status: UseToastOptions["status"],
        description: string,
        toastId: string,
    ) => void;
};

export type IPFSDataType = {
    fileUrl: string | null;
    fileSize: string | null;
    urlSha256: string | null;
};


// pin file to ipfs through pinata
export default function usePinata(
    file_url: string | undefined,
    file_name: string | undefined,
    method_type: string,
    username: string,
    // toast: (
    //     status: UseToastOptions["status"],
    //     description: string,
    //     toastId: string,
    // ) => void,
) {
    const [ipfsData, setIpfsData] = useState<IPFSDataType>({
        fileUrl: null,
        fileSize: null,
        urlSha256: null,
    });

    useEffect(() => {
        async function fileUpload() {
            const filename = file_name;
            if (filename != undefined) {
                var parts = filename.split(".");
                const fileType = parts[parts.length - 1];
                console.log("fileType to upload: ", fileType)
            }
            const { url, urlHash, size }: any = pinToIPFS(file_url, filename, method_type, username);
            setIpfsData((prevIpfs) => ({
                ...prevIpfs,
                fileUrl: url,
                fileSize: size,
                urlSha256: urlHash,
            }));
            // toast(
            //     "success",
            //     "File deployed to IPFS! CID: " + url,
            //     "ipfsSccss",
            // );
            return [urlHash, size];
        }

        file_url && fileUpload();
    }, [file_url]);

    return ipfsData;
}
