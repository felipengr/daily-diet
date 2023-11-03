import { ArrowLeft } from "phosphor-react-native";
import { Typography } from "@components/Typography";
import { BackButton, Container, Content, Header } from "./styles";

export type LayoutColor = {
    bg?: 'gray' | 'green' | 'red'
}

type LayoutProps = LayoutColor & {
    header: JSX.Element | string
    children: React.ReactNode
    onPressBack?: () => void
}

export function Layout({ bg = 'gray', header, children, onPressBack }: LayoutProps) {
    return (
        <Container bg={bg}>
            <Header>
                {typeof header === 'string' ? (
                    <>
                        <BackButton
                            style={{ width: '15%' }}
                            onPress={onPressBack}
                        >
                            <ArrowLeft />
                        </BackButton>
                        <Typography
                            style={{ width: '60%' }}
                            fontSize="title_sm"
                            fontFamily="bold"
                            lineHeight="lg"
                            textAlign="center"
                        >
                            {header}
                        </Typography>
                        <Typography style={{ width: '15%' }} />
                    </>
                ): (
                    <>{header}</>
                )}
            </Header>
            <Content>
                {children}
            </Content>
        </Container>
    )
}