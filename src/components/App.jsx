import React, { Component, Fragment } from "react";
import Header from "Header";
import ToDoList from "ToDoList";

class App extends Component {
    return() {
        render(
            <div className="container">
                <Header />
                <ToDoList />
            </div>
        )
    }
}

export default App;