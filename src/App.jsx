import React from "react";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { Works } from "./Views/Works";
import { Contact } from "./Views/Contact";

export const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Container>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/works">
                            <Works />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </Container>
            </div>
            <Footer />
        </Router>
    );
};
