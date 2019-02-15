const Buildings = [
  { id: 0, address: "Prot 5" },
  { id: 1, address: "Port 1" },
  { id: 2, address: "Ptor 2" }
];

const Lamps = [
  { turnedOn: false, coordinates: [70, 40] },
  { turnedOn: true, coordinates: [40, 20] },
  { turnedOn: false, coordinates: [150, 40] },
  { turnedOn: false, coordinates: [170, 115] },
  { turnedOn: true, coordinates: [40, 20] },
  { turnedOn: false, coordinates: [50, 85] },
  { turnedOn: false, coordinates: [25, 155] }
];

const buildingDetails = [
  {
    lamps: [Lamps[1], Lamps[2]],
    rooms: [[0, 0, 100, 60], [100, 0, 180, 110], [150, 110, 180, 180]]
  },
  {
    lamps: [Lamps[0], Lamps[3]],
    rooms: [[0, 0, 100, 70], [70, 75, 100, 150], [100, 75, 200, 150]]
  },
  {
    lamps: [Lamps[4], Lamps[5], Lamps[6]],
    rooms: [[0, 0, 80, 50], [0, 50, 80, 120], [0, 120, 80, 180]]
  }
];

export default {
  "/building/{bid}/lamp/{lid}/turn-off": ({ params, urlparams }) => {
    const lamp = buildingDetails[urlparams.bid].lamps[urlparams.lid];
    lamp.turnedOn = false;
    return { message: "ok" };
  },
  "/building/{bid}/lamp/{lid}/turn-on": ({ params, urlparams }) => {
    const lamp = buildingDetails[urlparams.bid].lamps[urlparams.lid];
    lamp.turnedOn = true;
    return { message: "ok" };
  },
  "/building/{id}": ({ urlparams, params }) => {
    if (params.address) {
      const found = Buildings.filter(
        (building) => building.address === params.address
      );
      return found;
    }

    if (urlparams.id) {
      return buildingDetails[urlparams.id];
    }
  }
};
