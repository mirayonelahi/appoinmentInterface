import {BiArchive} from "react-icons/bi"
import Search from "./components/Search";
import AddAppoinment from "./components/AddAppoints";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl"> <BiArchive className="inline-block text-red-400 align-top" /> Your Appoinments</h1>
      <Search />
      <AddAppoinment />
    </div>
  );
}

export default App;
