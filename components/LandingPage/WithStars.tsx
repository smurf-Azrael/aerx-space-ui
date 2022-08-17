import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomImage from "./CustomImage";

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const StarComponent: React.FC<{top: number, left: number, radius: number}> = ({ top, left, radius }) => (
    <Box position="absolute" top={top} left={left}>
        <Image
            src="/star.svg"
            width={radius}
            height={radius}
            style={{
                width: radius,
                height: radius,
            }}
        />
    </Box>
);

const WithStar: React.FC<{children: unknown}> = ({ children }) => {
    const positions = {
        top: [
            ["30%", "70%"],
            ["60%", "10%"],
            [100, 500],
        ],
        left: [30, ["90%", "50%"], ["95%"]],
    };

    const [stars, setStars] = useState<any>([]);

    useEffect(() => {
        const stars = [];
        for (let i = 0; i < 6; i++) {
            stars.push({
                top: positions.top[i],
                left: positions.left[i],
                radius: getRandomArbitrary(10, 20),
            });
        }
        setStars(stars);
    }, []);

    return (
        <Box position="relative">
            {stars.map((star: { top: number; left: number; radius: number; }, i: number) => (
                <StarComponent
                    key={i}
                    top={star.top}
                    left={star.left}
                    radius={star.radius}
                />
            ))}
            {children}
        </Box>
    );
};
export default WithStar;
