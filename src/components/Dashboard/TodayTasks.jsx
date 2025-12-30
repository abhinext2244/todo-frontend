const TodayTasks = ({ count }) => {
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px"
      }}
    >
      <h3>Today’s Tasks</h3>

      {count === 0 ? (
        <p>No tasks for today 🎉</p>
      ) : (
        <p>
          You have <strong>{count}</strong> task(s) scheduled for today.
        </p>
      )}
    </div>
  );
};

export default TodayTasks;
