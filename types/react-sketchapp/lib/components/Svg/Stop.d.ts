import React = require('react');

import { NumberProp } from './props';

export interface StopProps {
    stopColor?: string;
    stopOpacity?: NumberProp;
    children?: React.ReactChild[] | React.ReactChild;
}

export default class Stop extends React.Component<StopProps> {}
