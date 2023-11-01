import { Header } from "@components/Header";
import { Card } from "@components/Card";

import { Container } from "./styles";

export function HomeScreen() {
    return (
        <Container>
            <Header />
            <Card
                title="90,86%"
                subtitle="das refeições dentro da dieta"
                bg="green"
                iconPosition="right"
                onPress={() => console.log('Clicou')}
            />
        </Container>
    )
}