import { Typography } from "@components/Typography";
import { Container, Content, Header } from "./styles";

type LayoutProps = {
    header: JSX.Element
}

export function Layout({ header }: LayoutProps) {
    return (
        <Container>
            <Header>
                <Typography>
                    Header
                </Typography>
            </Header>
            <Content>
                <Typography>
                    Content
                </Typography>
            </Content>
        </Container>
    )
}