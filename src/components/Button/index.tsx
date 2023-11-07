import { TouchableOpacityProps } from 'react-native'
import { Container } from "./styles";
import { Typography } from '@components/Typography';

export type ButtonType = {
    type?: 'solid' | 'outline'
    isActive?: boolean
}

type ButtonProps = TouchableOpacityProps & ButtonType & {
    title: string
    icon?: React.ReactNode
}

export function Button({
    type = 'solid',
    isActive = true,
    ...props 
}: ButtonProps) {
    return (
        <Container type={type} isActive={isActive} disabled={isActive ? false : true} {...props}>
            {props.icon && props.icon}
            <Typography
                color={type === 'solid' ? 'white' : 'gray_1'}
                fontFamily='bold'
                style={{ marginHorizontal: 12 }}
            >
                {props.title}
            </Typography>
        </Container>
    )
}