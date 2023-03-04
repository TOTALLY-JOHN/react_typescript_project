import './styles.css';
import image from './images/background.jpg';

export const App = () => {
  return (
    <div>
      <h1>React & Typescript & Webpack project</h1>
      <h2>Current Mode: {process.env.NODE_ENV}</h2>
      <img src={image} />
    </div>
  ); 
}