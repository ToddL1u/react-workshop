import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoApp from "./todoApp/page";
import { AppBar, Toolbar, Container, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
function App() {
  const pages = [{ text: "Todos", link: "/todos" }];
  return (
    <>
      <BrowserRouter>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {pages.map((item, index) => (
                  <Button
                    component={Link}
                    color="inherit"
                    to={item.link}
                    key={"page" + index}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/todos" element={<TodoApp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
