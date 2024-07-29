import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from './index';

const withRedux = (App: React.FC<AppProps>) => {
  const AppWithRedux = (props: AppProps) => (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );

  return AppWithRedux;
};

export default withRedux;
