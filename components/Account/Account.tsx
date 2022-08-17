import React from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Image,
    Grid,
} from "@chakra-ui/react";

export type AccountDataProps = {
    profile: any;
};

const AccountData = ({ profile }: AccountDataProps) => {
    console.log("ac", profile);
    return (
        <Grid
            templateColumns={[
                "repeat(100%)",
                "repeat(100%)",
                "220px calc(100% - 200px)",
            ]}
            gap="20px"
        >
            <Box
                overflow={"hidden"}
                rounded="lg"
                maxWidth={["100%", "400px", "225px"]}
                margin="0 auto"
            >
                <FormLabel>Profile Picture</FormLabel>
                <Box
                    // bg={props.picBg}
                    height="320px"
                    rounded="lg"
                    width={["100%", "400px", "225px"]}
                    mb={2}
                >
                    {profile?.profileImg && (
                        <Image
                            height="320px"
                            rounded="lg"
                            maxWidth={["100%", "400px", "225px"]}
                            margin="0 auto"
                            src={profile.profileImg}
                            alt="profileImgPreview"
                            objectFit="cover"
                        />
                    )}
                </Box>
            </Box>
            <Box>
                <FormControl mb={2}>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                        type="text"
                        defaultValue={profile.fullName}
                        readOnly
                    />
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>User Name</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            @
                        </InputLeftElement>
                        <Input
                            defaultValue={profile.username}
                            type="text"
                            readOnly
                        />
                    </InputGroup>
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>About me</FormLabel>
                    <Textarea defaultValue={profile.aboutMe} readOnly />
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>Hobby</FormLabel>
                    <Textarea defaultValue={profile.hobbys} readOnly />
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>City</FormLabel>
                    <Input type="text" defaultValue={profile.city} readOnly />
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>Country</FormLabel>
                    <Input
                        type="text"
                        defaultValue={profile.country}
                        readOnly
                    />
                </FormControl>
            </Box>
        </Grid>
    );
};

export default AccountData;
