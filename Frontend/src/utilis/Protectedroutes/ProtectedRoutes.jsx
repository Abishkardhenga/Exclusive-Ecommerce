import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../UseContext/UseContext";
import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const ProtectedRoutes = () => {
  const { state, dispatch } = useContext(UserInfo);
  const [cookies] = useCookies();
  const [loading, setLoading] = useState(false); // Set to true initially
  const userverifyapi = "http://localhost:8000/verify-user";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!cookies.Token) {
          console.log("no cookie is available");
          return;
        }

        const response = await axios.post(
          userverifyapi,
          {},
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setLoading(true);

          dispatch({ type: "setUserdata", payload: response });
        }
      } catch (error) {
        console.log("Error verifying user:", error.message);
      }
    };

    fetchData();
  }, [cookies]);

  if (!loading) {
    return <div>Loading...</div>;
  }

  if (state?.userdata) {
    return <Outlet />;
  } else {
    alert("no cookie available");

    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
