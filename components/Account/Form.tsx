import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    InputGroup,
    InputLeftElement,
    Image as ChakraImage,
    Grid,
} from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";

export type ProfileFormProps = {
   
};

const ProfileForm = ({
    
}: ProfileFormProps) => {
    const inputFile = useRef<HTMLInputElement>(null);



    // TODO Only show upload BUtton if IPFS is ready
    const [uploadReady, setUploadReady] = useState(true);

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
                <FormControl mb={2}>
                    <FormLabel>Profile Picture</FormLabel>
                    <Box
                        bg={"white"}
                        height="320px"
                        rounded="lg"
                        width={["100%", "400px", "225px"]}
                        mb={2}
                    >
                        
                    </Box>

                    
                </FormControl>
            </Box>

            <Box pl={[0, 0, 1]} pr={8}>
                <FormControl mb={2}>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                        defaultValue={""}
                        placeholder="Full name"
                        onChange={() => {}}
                        name="fullName"
                    />
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>Username</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            @
                        </InputLeftElement>
                        <Input
                            placeholder="username"
                            defaultValue={""}
                            onChange={() => {}}
                            name="username"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>About me</FormLabel>
                    <Input
                        defaultValue={""}
                        placeholder="About me"
                        onChange={() => {}}
                        name="aboutMe"
                    />
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>Hobby</FormLabel>
                    <Textarea
                        defaultValue={""}
                        placeholder="Hobbys"
                        onChange={() => {}}
                        name="hobbys"
                    />
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>City</FormLabel>
                    <Input
                        placeholder="City"
                        defaultValue={""}
                        onChange={() => {}}
                        name="city"
                    />
                </FormControl>

                <FormControl mb={2}>
                    <FormLabel>Country</FormLabel>
                    <Input
                        placeholder="Country"
                        defaultValue={""}
                        onChange={() => {}}
                        name="Country"
                    />
                </FormControl>

                <Button
                    colorScheme="green"
                    mt={2}
                    size="lg"
                    onClick={() => {}}
                >
                    Save
                </Button>
            </Box>
        </Grid>
    );
};

export default ProfileForm;
