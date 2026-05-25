import { useState } from 'react';
import Navbar from '../components/navBar';
import MacScreen from './components/MacScreen';
import Keyboard from './components/Keyboard';
import Footer from '../components/footer';
import { EXPERIENCES, CATEGORY_KEYS, HOT_KEYS } from './data/experiences';
import './home.css';

function Home() {
  const [activeKey, setActiveKey] = useState(null);
  const [highlightedCategory, setHighlightedCategory] = useState(null);

  const handleKeyPress = (letter) => {
    setHighlightedCategory(null);
    setActiveKey(prev => (prev === letter ? null : letter));
  };

  const handleCategoryClick = (category) => {
    setHighlightedCategory(prev => (prev === category ? null : category));
    setActiveKey(null);
  };

  return (
    <div className="page">
      <Navbar onCategoryClick={handleCategoryClick} />
      <main className="main-content">
        <MacScreen activeKey={activeKey} experiences={EXPERIENCES} />
        <Keyboard
          activeKey={activeKey}
          highlightedCategory={highlightedCategory}
          categoryKeys={CATEGORY_KEYS}
          hotKeys={HOT_KEYS}
          onKeyPress={handleKeyPress}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
