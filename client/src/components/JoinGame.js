import React, { useState } from "react";
import { useChatContext, Channel } from "stream-chat-react";
import Game from "./Game";
import CustomInput from "./CustomInput";
import Cookies from "universal-cookie";
import { Chat } from "stream-chat-react";

function JoinGame() {
  const [rivalUsername, setRivalUsername] = useState("");
  const { client } = useChatContext();
  const [channel, setChannel] = useState(null);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [isAuth, setIsAuth] = useState(false);
  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setIsAuth(true);
      });
  }

  // async function queryUsers() {
  //   try {
  //     const users = await User.find(); // This will find all users in the 'User' collection.
  //     console.log(users);
  //   } catch (err) {
  //     console.error('Error querying users:', err);
  //   }
  // }

  const createChannel = async () => {
  const response = await client.queryUsers({ name: { $eq: rivalUsername } });

    if (response.users.length === 0) {
      alert("User not found");
      return;
    }

    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id],
    });

    await newChannel.watch();
    setChannel(newChannel);
  };

  return (
    <div className="joingamemargin">
    <>
      {channel ? (
        <Channel channel={channel} Input={CustomInput}>
          <Game channel={channel} setChannel={setChannel} />
        </Channel>
      ) : (
        <div className="joinGame">
          <h4>Create Game</h4>
          <input
            placeholder="Username of rival..."
            onChange={(event) => {
              setRivalUsername(event.target.value);
            }}
          />
          <button class="btn btn-success" onClick={createChannel}> Join/Start Game</button>

          {/* {isAuth ? (
        <Chat> */}
          {/* <JoinGame /> */}
          <div className="logoutb">
          <button class="btn btn-error" onClick={logOut}> Log Out</button>
          </div>
          {/* </Chat>
      ) : (
        <> 
                </>
      )} */}

        </div>
      )}
    </>
    </div>
  );
}

export default JoinGame;
