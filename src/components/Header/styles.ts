import styled from "styled-components/native";

import logoImage from '@assets/logo.png';
import avatarImage from '@assets/avatar.png';

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.Image.attrs({source: logoImage})`
    width: 82px;
    height: 37px;
`

export const Avatar = styled.Image.attrs({source: avatarImage})`
    width: 40px;
    height: 40px;
`