import * as React from 'react';

import ToolTipFrame from './ToolTipFrame';
import ReactTooltip from 'react-tooltip';

function Tooltip_({ id, ...props }, ref) {
    return (
        <React.Fragment>
            <div data-tip data-for={id}>
                {props.children}
            </div>
            <ReactTooltip id={id} place="left" backgroundColor={'#ffffff00'} effect="solid">
                <ToolTipFrame root={{ ref }} {...props} children={props.content} />
            </ReactTooltip>
        </React.Fragment>
    );
}

const Tooltip = React.forwardRef(Tooltip_);

export default Tooltip;
