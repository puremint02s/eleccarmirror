import { useEffect, useState } from "react";
import { getUserRefuelRecord } from "apis/RefuelRecordApi";

function CalcAverageEfficiency(currentUserId: string) {
  const [firstAmount, setFirstAmount] = useState(0);
  const [secondAmount, setSecondAmount] = useState(0);
  const [secondOdometer, setSecondOdometer] = useState(0);

  useEffect(() => {
    async function getRefuelRecord(currentUserId: string) {
      const res = await getUserRefuelRecord(currentUserId);
      // console.log(res);
      if (res) {
        setFirstAmount(res[res.length - 2].gas_amount);
        setSecondAmount(res[res.length - 1].gas_amount);
        setSecondOdometer(res[res.length - 1].odometer);
      }
    }
    getRefuelRecord(currentUserId);
  }, []);
  console.log(firstAmount);
  console.log(secondAmount);
  console.log(secondOdometer);

  const calcResult = (secondOdometer / (secondAmount - firstAmount)).toFixed(2);
  const intCalcResult = parseInt(calcResult);
  const averageEfficiency = Math.abs(intCalcResult);

  return { averageEfficiency };
}

export default CalcAverageEfficiency;
