import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServer from 'ra-data-json-server';

const dataProvider = jsonServer('https://hangouts-production.up.railway.app/');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="getusers" list={ListGuesser} />
    </Admin>
  );
}

export default App;
