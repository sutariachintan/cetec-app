import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import ordlineworkService, { ordlinework } from "../services/ordlinework-service";

const ScanIn = () => {
  const [orders, setOrders] = useState<ordlinework[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = ordlineworkService.getAll<ordlinework>();
    request
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { orders, error, isLoading, setError };
}

export default ScanIn;