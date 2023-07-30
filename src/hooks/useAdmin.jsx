import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://sporty-hub-server.vercel.app/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data?.role);
        setLoading(false);
      });
  }, [user]);

  return [isAdmin, loading];
};

export default useAdmin;
