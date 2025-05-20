import { DataProvider } from "./components/context/context";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <div>
        <DataProvider>
          <HomePage />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
