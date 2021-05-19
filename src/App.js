import React from "react";
import Blog from "./Components/Blog/Blog";
import Quiz from "./Components/Quiz/Quiz";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Consulting from "./Components/Consulting/Consulting";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lectures from "./Components/Lectures/Lectures";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        מאור יצקן ועדן אדרי
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const sections = [
    { title: "quiz", url: "/quiz" },
    { title: "lectures", url: "/lectures" },
    { title: "books", url: "/books" },
    { title: "blog", url: "/blog" },
    { title: "consulting", url: "/consulting" }
  ];
  return (
    <Router>
      <Route
        path="/"
        render={(props) => <Header {...props} sections={sections} />}
      />
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/lectures" component={Lectures} />
        <Route path="/consulting" component={Consulting} />
      </Switch>
      <Route path="/" render={(props) => <Footer {...props} />} />
    </Router>
  );
}
