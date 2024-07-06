import Dashboard from "./components/dashboard";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { Tab, Tabs } from "./components/ui/tabs";

function App() {
  return (
    <Layout>
      <Profile />
      
      <Tabs>
        <Tab label="Dashboard" active />
        <Tab label="Fanbase" />
        <Tab label="Engagement" />
        <Tab label="Revenue" />
        <Tab label="Releases" />
        <Tab label="Collectibles" />
      </Tabs>

      <Dashboard />
    </Layout>
  );
}

export default App;
