import { useEffect, useState } from "react";
import { getUserRefuelRecord } from "apis/RefuelRecordApi";

function CalcAverageEfficiency(currentUserId: string) {
  const [firstAmount, setFirstAmount] = useState(0);
  const [firstOdometer, setFirstOdometer] = useState(0);
  const [secondAmount, setSecondAmount] = useState(0);
  const [secondOdometer, setSecondOdometer] = useState(0);

  useEffect(() => {
    async function getRefuelRecord(currentUserId: string) {
      const res = await getUserRefuelRecord(currentUserId);
      setFirstAmount(res[0].gas_amount);
      setFirstOdometer(res[0].odometer);
      setSecondAmount(res[1].gas_amount);
      setSecondOdometer(res[1].odometer);
    }
    getRefuelRecord(currentUserId);
  }, []);

  const averageEfficiency = (
    secondOdometer /
    (secondAmount - firstAmount)
  ).toFixed(2);

  return <>{averageEfficiency}</>;
}

export default CalcAverageEfficiency;
