import {render} from '@testing-library/react-native';
import {ErrorBoundary} from 'react-error-boundary';
import renderer from 'react-test-renderer';
// import { RecoilRoot } from 'recoil'

// import { Navigator, Screen } from '@core/navigator/CommonNavigator'
// import { Container } from '@core/navigator/Container'
// import { ThemeProvider } from '@core/theme/theme-provider'

type Props = {
  component: any;
  name?: string;
};

const logError = (error: Error, info: {componentStack: string}) => {
  // Do something with the error, e.g. log to an external API
  console.log(error, info);
};
/* 
const withThemeProvider = (component: Props['component']) => (
  // @ts-ignore
  <ErrorBoundary FallbackComponent="Something went wrong" onError={logError}>
    <ThemeProvider>
      {component}
    </ThemeProvider>
  </ErrorBoundary>
)
 */
const App = (component: Props['component']) => (
  // @ts-ignore
  <ErrorBoundary FallbackComponent="Something went wrong" onError={logError}>
    {component}
  </ErrorBoundary>
);

const toJSON = (component: Props['component']) => {
  const r = App(component);
  renderer.create(r).toJSON();
  return render(r);
};

export * from '@testing-library/react-native';
export {App, toJSON};
