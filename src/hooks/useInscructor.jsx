import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useInscructor = () => {
  const { user } = useContext(AuthContext);
  const [isInstructor, setIsInstructor] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsInstructor(data.role);
        setLoading(false);
      });
  }, [user]);

  return [isInstructor, loading];
};

export default useInscructor;
