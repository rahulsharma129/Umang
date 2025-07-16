import React , {lazy, Suspense} from "react";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import ProtectRouter from "./components/auth/ProtectRouter";
import { LayoutLoader } from "./components/layout/Loaders";

// Lazy loading the Home component dyanamically
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;
// Main App component with routing


const App = () =>{
  return(
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader/>}>
        <Routes>
      <Route  element= { <ProtectRouter user={user}/> }>
      <Route path= "/" element={<Home/>} />
      <Route path= "/chat/:chatId" element={<Chat/>} />
      <Route path= "/groups" element={<Groups/>} />
      </Route>
     
      <Route path= "/login" element={<ProtectRouter user={!user} redirect="/">
      <Login/>
      </ProtectRouter>}/> 

      <Route path= "*" element={<NotFound/>}/>
    </Routes>

    </Suspense>
    </BrowserRouter>
  );
};
export default App;

