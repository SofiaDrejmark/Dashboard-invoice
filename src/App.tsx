import { useState } from "react";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import ProjectList from "./pages/ProjectList";
import TaskList from "./pages/TaskList";
import InvoiceList from "./pages/InvoiceList";
import SingleProject from "./pages/SingleProject";
import New from "./pages/New";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/new" element={<New />} />
            <Route path="/projectlist" element={<ProjectList />} />
            <Route path="/tasklist" element={<TaskList />} />
            <Route path="/invoicelist" element={<InvoiceList />} />
            <Route path="/projects/:projectId" element={<SingleProject />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
