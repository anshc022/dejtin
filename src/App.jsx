import { useState } from 'react';
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';
import LayoutSwitcher from './components/ThemeSwitcher';

const layouts = { 1: Layout1, 2: Layout2, 3: Layout3 };

function App() {
  const [current, setCurrent] = useState(1);
  const ActiveLayout = layouts[current];

  return (
    <div className="min-h-screen">
      <ActiveLayout />
      <LayoutSwitcher current={current} onChange={setCurrent} />
    </div>
  );
}

export default App;
