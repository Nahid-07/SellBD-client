import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route/Routes";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div>
      <RouterProvider router={router}>\
      <Toaster>

      </Toaster>
      </RouterProvider>
    </div>
  );
}

export default App;
