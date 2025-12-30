const RecentUsers = ({ users }) => {
  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-4">Recent Users</h3>

      <ul className="space-y-3 text-sm">
        {users.map((u) => (
          <li
            key={u._id}
            className="flex justify-between border-b pb-2 last:border-none"
          >
            <span>{u.name}</span>
            <span className="text-gray-500">{u.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUsers;
