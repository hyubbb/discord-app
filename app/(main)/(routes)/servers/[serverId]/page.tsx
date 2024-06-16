"use client";
import { useUser } from "@clerk/nextjs";

const ServerIdPage = () => {
  const { user } = useUser();
  return (
    <div>
      <h1>ServerIdPage</h1>
      {user?.fullName}
    </div>
  );
};
export default ServerIdPage;
