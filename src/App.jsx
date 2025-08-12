import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import ContactLayOut from "./Layouts/ContactLayOut";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import ProjectsLayOut from "./Layouts/ProjectsLayOut";
import ProjectsDetails, { projectsLoader } from "./components/ProjectsDetails";
import ErrorPage from "./pages/ErrorPage";
import SingleProjectInfo, {
  projectsLoaderById,
} from "./pages/SingleProjectInfo";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route
          path="projects"
          element={<ProjectsLayOut />}
          errorElement={<ErrorPage />}
        >
          <Route index element={<ProjectsDetails />} loader={projectsLoader} />

          <Route
            path=":id"
            element={<SingleProjectInfo />}
            loader={projectsLoaderById}
          />
        </Route>

        <Route path="contact" element={<ContactLayOut />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

// npx json-server --watch Projects.json --port 5000
