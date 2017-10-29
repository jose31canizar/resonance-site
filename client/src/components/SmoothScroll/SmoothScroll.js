import React, { Component } from 'react';

class SmoothScroll extends Component {
    constructor(props) {
      super(props);
      this.state = {
        negativeOffset: 0,
        timer: null
      }
      this.handleSectionClick = this.handleSectionClick.bind(this);
      this.stop = this.stop.bind(this);
      this.scrollTo = this.scrollTo.bind(this);
    }
    render() {
        return (
          <div
            className={this.props.className}
            onClick={this.handleSectionClick}>
            {this.props.children}
          </div>
        );
    }

    handleSectionClick() {
        this.scrollTo(this.props.section);
    }

    stop() {
        clearTimeout(this.state.timer);
    }

    scrollTo(id, callback) {
        var settings = {
            duration: 500,
            easing: {
                outQuint: function (x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                }
            }
        };
        var percentage;
        var startTime;
        var node = document.getElementById(id);
        var nodeTop = node.offsetTop;
        var nodeHeight = node.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        var windowHeight = window.innerHeight
        var offset = window.pageYOffset;
        var delta = nodeTop - offset;
        var bottomScrollableY = height - windowHeight;
        var targetY = (bottomScrollableY < delta) ?
            bottomScrollableY - (height - nodeTop - nodeHeight + offset) :
            delta;
        startTime = Date.now();
        percentage = 0;

        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        function step() {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.state.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.state.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                if(this.props.mobile) {
                  this.setState({
                    negativeOffset: 0
                  })
                }
                window.scrollTo(0, yScroll - this.state.negativeOffset);
                this.setState({
                  timer: setTimeout(step.bind(this), 10)
                })
            }
        }

        this.state.timer = setTimeout(step.bind(this), 10);
    }
}

export default SmoothScroll;
