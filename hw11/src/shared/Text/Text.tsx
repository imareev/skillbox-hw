import React from "react";
import { Children } from "react";
import styles from './text.css';
import classNames from "classnames";

type TSizes =  50 | 28 | 20 | 16 | 14 | 12 | 10;

export enum EColor {
    black = 'black',
    orange = 'orange',
    green = 'green',
    grey='#999999'
}

interface ITextProps {
    As?: 'span' | 'h1' | 'h3' | 'h4' | 'p' | 'div';
    children?: React.ReactNode;
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColor;
}

export function Text(props: ITextProps) {
    const { As = 'span', color = EColor.black, children, size, mobileSize, desktopSize, tabletSize } = props;
    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${desktopSize}`]]: desktopSize },
        { [styles[`d${tabletSize}`]]: tabletSize },
        styles[color]
    )

    return (
        <As className={classes}>
            {children}
        </As>
    );
}
