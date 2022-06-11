import { Navbar, Welcome } from "./components"

const App= () => {
  return (
    <div className="h-screen gradient-bg-welcome">
        <Navbar />
        <Welcome />
    </div>
  );
}

export default App
