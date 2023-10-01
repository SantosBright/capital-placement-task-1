import { ConfigProvider } from "antd";
import ApplicationForm from "./ApplicationForm";
import SideNav from "./layouts/SideNav";
import TabNav from "./layouts/TabNav";

import "../styles/App.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#087B2F",
        },
      }}
    >
      <div className="app">
        <SideNav />
        <main>
          <TabNav />
          <div className="container">
            <ApplicationForm />
          </div>
        </main>
      </div>
    </ConfigProvider>
  );
}

export default App;
