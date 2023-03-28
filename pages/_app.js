// import Sidebar from '../component/Sidebar'
import toast, { Toaster } from "react-hot-toast";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Sidebar/> */}
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
