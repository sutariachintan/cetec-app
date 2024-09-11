import ScanIn from "../hooks/ScanIn";

const OpenWorkList = () => {
  const { orders, error, isLoading } = ScanIn();

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {orders.map((order) => (
          <li
            key={order.id}
            className="list-group-item d-flex justify-content-between"
          >
            {order.prcpart}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => console.log(order + "update")}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => console.log("closed")}
              >
                Close
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OpenWorkList;
