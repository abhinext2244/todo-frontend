const StatCard = ({ title, value }) => {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        minWidth: "150px",
        textAlign: "center"
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default StatCard;
