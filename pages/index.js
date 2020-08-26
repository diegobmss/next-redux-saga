import { END } from 'redux-saga'
import { wrapper } from '../store'
import { loadData } from '../actions'

const Home = (props) => {
  console.log('props', props);
  return <h1>Teste</h1>;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(loadData())
  store.dispatch(END)
  await store.sagaTask.toPromise()

  return {
    props: {
      state: store.getState(),
    },
  };
})

export default Home
