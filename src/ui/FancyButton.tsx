import * as React from 'react';
import ButtonUnstyled, {
    ButtonUnstyledProps,
    buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { styled, Theme } from '@mui/system';
import { orangePrimary } from "../App";

const ButtonRoot = React.forwardRef(function ButtonRoot(
    props: React.PropsWithChildren<{}>,
    ref: React.ForwardedRef<any>,
) {
    const { children, ...other } = props;

    return (
        <svg width="150" height="50" {...other} ref={ref}>
            <polygon points="0,50 0,0 150,0 150,50" className="bg" />
            <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
            <foreignObject x="0" y="0" width="150" height="50">
                <div className="content">{children}</div>
            </foreignObject>
        </svg>
    );
});

const CustomButtonRoot = styled(ButtonRoot)(
    ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${
        theme.palette.mode === 'light' ? orangePrimary : orangePrimary
    };
  --hover-color: ${
        theme.palette.mode === 'light'
            ? 'rgba(255, 119, 0,0.04)'
            : orangePrimary
    };
  --active-color: ${
        theme.palette.mode === 'light'
            ? 'rgba(255, 119, 0,0.12)'
            : orangePrimary
    };

  & polygon {
    fill: transparent;
    transition: all 1500ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2.5;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 15px;
      font-weight: 350;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);

const SvgButton = React.forwardRef(function SvgButton(
    props: ButtonUnstyledProps,
    ref: React.ForwardedRef<any>,
) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

export default function FancyButton() {
    return <SvgButton>Upload File</SvgButton>;
}
