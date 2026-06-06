import { useEffect, useState } from "react";
import { getCurrentUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

export default function DashboardPage() {

  const { logout } = useAuth();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const response = await getCurrentUser();

      setUser(response.data);

    } catch (err) {

      console.error(err);

      setError("Failed to load profile");

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <div className="flex justify-between mb-8">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <div className="bg-slate-800 p-6 rounded">

        <h2 className="text-xl mb-4">
          Business Information
        </h2>

        <p>
          <strong>Business:</strong> {user.businessName}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>

        <p>
          <strong>Business ID:</strong> {user.businessId}
        </p>

      </div>

    </div>
  );
}