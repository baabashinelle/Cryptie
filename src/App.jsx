import { Navbar, Welcome } from "./components"

const App= () => {
  return (
    <div className="2xl:h-screen gradient-bg-welcome">
        <Navbar />
        <Welcome />
    </div>
  );
}

export default App
