export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div className="p-4 space-y-4">
      <div>{children}</div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow">{users}</div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">{revenue}</div>
        </div>
        <div className="flex flex-1 p-4 bg-gray-100 rounded-lg shadow">
          {notifications}
        </div>
      </div>
    </div>
  ) : (
    login
  );
}
