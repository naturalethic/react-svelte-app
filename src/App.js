import SvelteComponent from 'react-svelte';
import Widget from './Widget.svelte';

function App() {
  return (
    <div className="App">
      <SvelteComponent this={Widget} />
    </div>
  );
}

export default App;
