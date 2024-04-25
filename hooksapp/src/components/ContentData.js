import React, { useContext } from "react";
import { ColorContext, UserContext } from "./MyContext";

const ContentData = () => {
  const user= useContext(UserContext);
  const color = useContext(ColorContext);
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ColorContext.Consumer>
              {(color) => {
                return (
                  <div style={{ color: color }}>
                    <ul>
                      <li>Nom: {user.name}</li>
                      <li>Age: {user.age}</li>
                    </ul>
                  </div>
                );
              }}
            </ColorContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ContentData;
