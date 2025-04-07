"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/admin/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-lg mb-4">Welcome to the admin panel. Select an action below:</p>
      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/admin/products")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Manage Products
        </button>
        <button
          onClick={() => router.push("/admin/gallery")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Manage Gallery
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
