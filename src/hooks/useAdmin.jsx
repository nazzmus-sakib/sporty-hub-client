import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data?.role);
        setLoading(false);
      });
  }, [user]);

  return [isAdmin, loading];
};

export default useAdmin;
