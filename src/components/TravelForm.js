import React, { useState } from 'react';

function TravelForm() {
  const [travelDate, setTravelDate] = useState('');

  const handleDateChange = (e) => {
    setTravelDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You will travel on ${travelDate}`);
    // ทำการส่งข้อมูลไปยังเซิร์ฟเวอร์หรือประมวลผลข้อมูลต่อไปตามที่ต้องการ
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="travelDate">เลือกวันที่เดินทาง:</label>
      <input
        type="date"
        id="travelDate"
        name="travelDate"
        value={travelDate}
        onChange={handleDateChange}
      />
      <button type="submit">ยืนยัน</button>
    </form>
  );
}

export default TravelForm;
