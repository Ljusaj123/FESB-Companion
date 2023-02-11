//za svakog studenta oznaceno koje predmete ima taj dan

let schedule = [
  {
    id_studenta: 1,
    kolegiji: [
      {
        code: "MULT1",
        name: "multimedijski sustavi",
        classroom: "A101",
        time: "17:00-19:00",
        type: "predavanja",
        presence: false,
      },
      {
        code: "MULT2",
        name: "multimedijski sustavi",
        classroom: "A420",
        time: "11:00-12:30",
        type: "labovi",
        presence: true,
      },
      {
        code: "GR1",
        name: "grid računalni sustavi",
        classroom: "A102",
        time: "13:00-15:00",
        type: "predavanja",
        presence: true,
      },
      {
        code: "GR2",
        name: "grid računalni sustavi",
        classroom: "A102",
        time: "15:00-17:00",
        type: "auditorne",
        presence: false,
      },
    ],
  },
  {
    id_studenta: 2,
    kolegiji: [
      {
        code: "UGR1",
        name: "ugradbeni računalni sustavi",
        classroom: "B301",
        time: "10:00-12:00",
        type: "predavanja",
        presence: false,
      },
      {
        code: "PP2",
        name: "paralelno programiranje",
        classroom: "B526",
        time: "14:00-15:30",
        type: "labovi",
        presence: false,
      },
    ],
  },
  {
    id: 3,
    kolegiji: [
      {
        code: "MU1",
        name: "multimedijski sustavi",
        classroom: "A101",
        time: "17:00-19:00",
        type: "predavanja",
        presence: true,
      },
      {
        code: "UGR1",
        name: "ugradbeni računalni sustavi",
        classroom: "B301",
        time: "10:00-12:00",
        type: "predavanja",
        presence: false,
      },
      {
        code: "PP2",
        name: "paralelno programiranje",
        classroom: "B526",
        time: "14:00-15:30",
        type: "labovi",
        presence: false,
      },
    ],
  },
  {
    id: 4,
    kolegiji: [
      {
        code: "PMRIL1",
        name: "Programiranje mobilnih robota i letjelica",
        classroom: "A245",
        time: "15:00-17:00",
        type: "predavanja",
        presence: false,
      },
      {
        code: "PP2",
        name: "paralelno programiranje",
        classroom: "B526",
        time: "14:00-15:30",
        type: "labovi",
        presence: false,
      },
    ],
  },
  {
    id: 5,
    kolegiji: [
      {
        code: "MULT1",
        name: "multimedijski sustavi",
        classroom: "A101",
        time: "17:00-19:00",
        type: "labovi",
        presence: true,
      },
      {
        code: "PP2",
        name: "Paralelno programiranje",
        classroom: "B526",
        time: "12:00-13:30",
        type: "labovi",
        presence: true,
      },
    ],
  },
];

module.exports = schedule;
