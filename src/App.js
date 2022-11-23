import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoApp from "./todoApp/page";
import { Container } from "@mui/material";
import AppHeader from "./components/AppHeader";
import AuthContextProvider from "./signin/context/auth-context";
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AppHeader />
        <Container sx={{ mt: 3 }}>
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/todos" element={<TodoApp />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
