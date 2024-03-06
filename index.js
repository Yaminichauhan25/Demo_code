function findSpareChairs(meetingRooms, need) {
    let spareChairsTaken = [];
  
    for (const element of meetingRooms) {
      const room = element;
      const occupants = room[0].length;
      const chairs = room[1];
      const spareChairs = Math.max(0, chairs - occupants);
  
      if (spareChairs >= need) {
        spareChairsTaken.push(need);
        return spareChairsTaken;
      } else {
        spareChairsTaken.push(spareChairs);
        need -= spareChairs;
      }
    }
  
    if (need === 0) {
      return [1];
    } else {
      return [0];
    }
  }
  const meetingRooms = [
    ["XXX", 3],
    ["XXXXX", 6],
    ["XXXXXX", 9],
    ["XXX", 2],
  ];
  const need = 4;
  const result = findSpareChairs(meetingRooms, need);
  console.log(result);
  