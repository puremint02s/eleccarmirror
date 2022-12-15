import { useEffect, useState } from "react";
import { getUserRefuelRecord } from "apis/RefuelRecordApi";

function CalcAverageEfficiency(currentUserId: string) {
  const [firstAmount, setFirstAmount] = useState(0);
  const [firstOdometer, setFirstOdometer] = useState(0);
  const [secondOdometer, setSecondOdometer] = useState(0);

  useEffect(() => {
    async function getRefuelRecord(currentUserId: string) {
      const res = await getUserRefuelRecord(currentUserId);
      if (res) {
        setFirstAmount(res[res.length - 2].gas_amount);
        setFirstOdometer(res[res.length - 2].odometer);
        setSecondOdometer(res[res.length - 1].odometer);
      }
    }
    getRefuelRecord(currentUserId);
  }, []);

  const calcResult = ((secondOdometer - firstOdometer) / firstAmount).toFixed(
    2,
  );
  const intCalcResult = parseInt(calcResult);
  const averageEfficiency = Math.abs(intCalcResult);

  return { averageEfficiency };
}

export default CalcAverageEfficiency;
