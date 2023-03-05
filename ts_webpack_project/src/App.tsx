import './styles.css';
import Counter from './Counter';

export const App = () => {
  return (
    <div>
      <h1>This is the React & Typescript & Webpack project</h1>
      <h2>Current Mode: {process.env.NODE_ENV}</h2>
      <Counter />
    </div>
  ); 
}