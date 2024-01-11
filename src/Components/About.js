import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");

    return (
      <div>
        <div>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </div>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    );
  }
}

export default About;
