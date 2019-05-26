import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

type Props = {
  location: Object;
  children: any,
}

class ScrollTopComponent extends PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export const ScrollTop = withRouter(ScrollTopComponent);
