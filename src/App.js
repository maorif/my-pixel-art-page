import './App.css';
import Header from './components/Header';
import PixelArtCard from './components/PixelArtCard';
import {
  shovel,
  sword,
  treasureChest
} from './assets/index.js';

function App() {
  return (
    <>
      <Header/>
      <main>
        <PixelArtCard 
          pixelArt={shovel}
          title={'Shovel'}
          description={'Pixel made shovel'}/>
  
        <PixelArtCard
          pixelArt={sword}
          title='Sword'
          description='Shiny gold sword'/>
  
        <PixelArtCard
          pixelArt={treasureChest}
          title='Treasure Chest'
          description='Spooky treasure chest'/>
      </main>
    </>
  );
};

export default App;
