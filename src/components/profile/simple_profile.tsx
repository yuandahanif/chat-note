import { getUserLogged, removeAccessToken, user } from "@utils/network-data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SimpleProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<user | null>(null);

  const logout = () => {
    removeAccessToken();
    navigate(0);
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await getUserLogged();
        if (!data.error) {
          setProfile(data.data);
        }
      } catch (error) {
        alert("failed to fetch note");
        console.error("error fetching note: ", error);
      }
    };

    getProfile();
  }, []);
  return (
    <div className="sticky bottom-0 left-0 right-0 z-50 flex justify-between rounded-md dark:bg-gray-700 bg-white p-5 shadow-md">
      <span className="line-clamp-1">{profile?.name}</span>

      <div>
        <button type="button" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default SimpleProfile;
