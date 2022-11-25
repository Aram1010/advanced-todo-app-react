import React, { useEffect, useState } from "react";
import { AppLayerContext } from "../context";

const User = () => {
  const { user } = AppLayerContext();

  const [user_, setUser_] = useState(null);

  useEffect(() => {
    if (user) setUser_(user._delegate.providerData[0]);
  }, [user]);

  return (
    <div className="p-[10px]">
      {user_ && (
        <div className="flex items-center justify-end">
          <p>{user_.displayName.split(" ")[0]}</p>
          <img
            src={user_.photoURL}
            className="w-[30px] rounded-[50px] ml-[10px]"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default User;
