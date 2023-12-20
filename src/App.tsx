import React from 'react';
import CardDescription from './components/CardDescription';
import CardButton from './components/CardButton';
import CardImage from './components/CardImage';
import './App.css';


const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card">{children}</div>
  );
};

function App() {
  return (
    <div className='container'>
      <Card>
        <CardImage src='https://i.ibb.co/Jy77K54/greeting.png' alt='Image cap'></CardImage>
        <CardDescription title='Card title' text="Some quick example text to build on the card title and make up the bulk of the card's content"></CardDescription>
        <CardButton text='Go somewhere'></CardButton>
      </Card>

      <Card>
        <CardDescription title='Special title treatment' text='With supporting text below as a natural lead-in to additional content'></CardDescription>
        <CardButton text='Go somewhere'></CardButton>
      </Card>
    </div>
  );
};

export default App;
