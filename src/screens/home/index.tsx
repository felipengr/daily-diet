import { Header } from "@components/Header";
import { Container } from "./styles";
import { Typography } from "@components/Typography";

export function HomeScreen() {
    return (
        <Container>
            <Header />
            <Typography
                textAlign="right"
                color="green_dark"
                fontSize="title_lg"
                lineHeight="lg"
            >
                HomeScreen
            </Typography>
            
            <Typography
                textAlign="center"
                color="red_mid"
                fontSize="title_xs"
                lineHeight="lg"
            >
                HomeScreen
            </Typography>

            <Typography
                textAlign="left"
                color="green_light"
                fontSize="title_lg"
                lineHeight="lg"
            >
                HomeScreen
            </Typography>
        </Container>
    )
}