import Reactotron from 'reactotron-react-native';

// import { reactotronRedux } from 'reactotron-redux';
// import reactotronSaga from 'reactotron-redux-saga';

let reactotron: any | null = null;

if (__DEV__) {
  const tron: any = Reactotron.configure()
    .useReactNative()
    // .use(reactotronRedux())
    // .use(reactotronSaga({ except: undefined }))
    .connect();

  tron.clear();
  reactotron = tron;
  console.log = tron.log;
}

export default reactotron;
