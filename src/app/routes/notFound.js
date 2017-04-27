import LandingContainer from '../containers/Landing';

export default {
  path: '*',
  component: LandingContainer,
  getIndexRoute(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, { component: require('../components/NotFound') });
    });
  }
};
