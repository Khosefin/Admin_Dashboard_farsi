import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col mr-[200px]">
        <Header />
        {router}
      </div>
    </div>
  );
}

export default App;
