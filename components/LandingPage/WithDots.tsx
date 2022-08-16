import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
}

const colors = ["#FFA2F6", "#7E4CF9", "#A0FFCC"];

const toPercent = (num:number) => num + "%";

const WithDots:React.FC<{children: unknown}> = ({ children}) => {
    const positions = {
        top: [
            ["30%", "70%"],
            ["60%", "10%"],
            ["100", "500"],
        ],
        left: [30, ["90%", "50%"], ["95%"]],
    };

    const [dots, setDots] = useState<unknown>([]);

    useEffect(() => {
        const dots = [];
        for (let i = 0; i < getRandomArbitrary(3, 6); i++) {
            dots.push({
                top: toPercent(getRandomArbitrary(5, 100)),
                left: toPercent(getRandomArbitrary(5, 100)),
                radius: getRandomArbitrary(10, 20),
                color: colors[
                    Math.floor(getRandomArbitrary(0, colors.length - 1))
                ],
            });
        }
        console.log(dots);
        setDots(dots);
    }, []);

    return (
        <Box position="relative">
            {(dots as any).map((dot:any, i:number) => (
                <Box
                    position="absolute"
                    key={dot + i}
                    borderRadius="full"
                    bg={dot.color}
                    top={dot.top}
                    left={dot.left}
                    w={dot.radius}
                    h={dot.radius}
                />
            ))}
            {children}
        </Box>
    );
};
export default WithDots;
