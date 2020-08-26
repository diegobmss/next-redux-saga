import { END } from 'redux-saga'
import { wrapper } from '../store'
import { Creators as colorGroupActions } from '../store/ducks/colorGroups';

const Home = ({ colorGroups }) => {
  console.log(colorGroups);
  return <h1>{colorGroups.data}</h1>
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  // store.dispatch(loadData())
  store.dispatch(colorGroupActions.requestColorGroups())
  store.dispatch(END)
  await store.sagaTask.toPromise()

  const { colorGroups } = store.getState()

  return {
    props: {
      colorGroups
    },
  };
})

export default Home
