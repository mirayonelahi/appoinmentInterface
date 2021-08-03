import { BiCalendar } from "react-icons/bi"
import Search from "./components/Search"
import AddAppoinment from "./components/AddAppoints"
import AppointmentInfo from "./components/appointmentInfo"
import appoinmentList from "./data.json"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3"> <BiCalendar className="inline-block text-red-400 align-top" /> Your Appoinments</h1>
      <AddAppoinment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appoinmentList.map(
          appoinment => (
   
            <AppointmentInfo key={appoinment.id}
              appoinment={appoinment}
            />

          )
        )
        
        }

      </ul>


    </div>
  );
}

export default App;
