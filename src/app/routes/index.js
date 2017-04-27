import AppContainer from '../containers/App';

export default function routes() {
  return {
    component: AppContainer,
    childRoutes: [
      require('./landing'),
      require('./notFound')
    ]
  };
}
