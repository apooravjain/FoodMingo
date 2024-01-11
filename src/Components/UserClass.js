import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dumy",
        location: "deafult",
        avatar_url: "photo",
      },
    };

    //console.log("Chid Constructor");
  }

  async componentDidMount() {
    //console.log("Child componentDidMount");

    const data = await fetch("https://api.github.com/users/apooravjain");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //const {count, count2} = this.state;

    //console.log("Chid render");

    return (
      <div className="m-4 px-4 ">
        <img className="w-20" src={avatar_url} />
        <h1>Name : {name}</h1>
        <h2>apooravjain12@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
