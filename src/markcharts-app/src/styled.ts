import styled, { CreateStyled } from '@emotion/styled';

export type Theme = {
    colors: {
        primary: string[],
    },
    shadows: string[],
}

export default styled as CreateStyled<Theme>;
