import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'

const svgPathLength = 2160;

const styles = () => ({
    progress : {
        width: '20vw',
        height: '40vh',
        fill: 'rgba(0, 0, 0, 0)',
        strokeWidth: '30',
    },
    track : {
        stroke: 'rgb(0, 71, 83)',
        transform: 'translate(290px, 800px)rotate(-120deg)',
    },
    fill : {
        stroke: 'rgb(104, 214, 198)',
	    strokeLinecap: 'round',
	    strokeDasharray: `${svgPathLength}`,
	    strokeDashoffset: `${svgPathLength}`,
        transition: 'stroke-dashoffset 2s',
        transform: 'translate(290px, 800px)rotate(-120deg)',
    },
    value : {
        fill : "#fff",
        fontSize : "14rem"
    }, 
    root: {
      display: "inline"
    }
})


class HexagonalProgressBar extends Component {
    setStrokeDashoffset = progress => ((100 - progress) / 100) * svgPathLength

    render() {
        const {classes} = this.props;
        return (
                <div className={classes.root}>
                    <svg className={classes.progress} viewBox="0 0 776 628">
                    <path className={classes.track} d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                    <path className={classes.fill} style={{strokeDashoffset: this.setStrokeDashoffset(this.props.progress) }} d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                    <text className={classes.value} x="29%" y="60%">{this.props.progress}%</text>
                    </svg>
                </div>
        );
    }
}

export default withStyles(styles)(HexagonalProgressBar);
