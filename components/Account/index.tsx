import Layout from "./Layout";
import { Box, Button, Heading, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent } from "react";
import ProfileForm from "./Form";
import AccountData from "./Account";
import { ACCEPTED_FILE_EXTENSIONS } from "../../utils/files";

const Account = () => {
    // The profile picture which will go into the NFT
    const picBg = useColorModeValue("gray.200", "gray.700");

    // The uploaded image which will be deployed through IPFS
    const [uploadImg, setUploadImg] = useState<File>();
    const [lockPage, setLockPage] = useState(true);
    const [updating, setUpdating] = useState(true);

    // Ipsf hook with details and upload hook.

   


    const profileImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (!files) return;

        if (files && files.length) {
            console.log("Files : ", files);
            const picname = files[0].name;
            const picPart = picname.split(".");
            const picType = picPart[picPart.length - 1];

            console.log("Pictype : ", picType);

            if (!ACCEPTED_FILE_EXTENSIONS.includes(picType)) {
                // return toast(
                //     "error",
                //     "Picture type not supported. Supported types are " +
                //         ACCEPTED_FILE_EXTENSIONS +
                //         " .",
                //     "Images",
                // );
            }

            setUploadImg(files[0]);
        }
    };



    return (
        <Layout>
            <Box className="px-4 md:px-10 max-w-screen-xl" py={2}>
                <Box className="drop-shadow-xl flex">
                    <Heading as="h1" mb={3}>
                        Title
                    </Heading>
                    {lockPage && (
                        <Button
                            className="ml-auto"
                            colorScheme="blue"
                            onClick={() => {}}
                        >
                            Update Profile
                        </Button>
                    )}
                </Box>
                <ProfileForm />
            </Box>
        </Layout>
    );
};

export default Account;
