import { PressableProps } from 'react-native'
import { Typography } from '@components/Typography'
import { Container, Divider, Status } from './styles'

export type MealStatus = { isOnTheDiet: boolean }

type MealProps = PressableProps & MealStatus & {
    id: string
    hour: string
    description: string
}

export function Meal({ ...props }: MealProps) {
    return (
        <Container {...props}>
            <Typography
                fontSize='body_xs'
                fontFamily='bold'
            >
                {props.hour}
            </Typography>
            <Divider />
            <Typography
                style={{ flex: 1 }}
                numberOfLines={1}
            >
                {props.description}
            </Typography>
            <Status isOnTheDiet={props.isOnTheDiet} />
        </Container>
    )
}