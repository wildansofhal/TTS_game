import React from "react";
import "./styles.css";
import Crossword, {
  Grid,
  Cell,
  HiddenInput,
  Controls,
  ConfirmButton,
  AnagramHelper,
  Ring,
  CluePreview,
  Clues,
  Clue
} from "react-crossword";

export default function App() {
  const data = {
    id: "simple/1",
    number: 1,
    name: "Simple Crossword 1",
    date: 1542326400000,
    entries: [
      {
        id: "1-across",
        number: 1,
        humanNumber: "1",
        clue: "Bulan Ke-10",
        direction: "across",
        length: 7,
        group: ["1-across"],
        position: { x: 1, y: 1 },
        separatorLocations: {},
        solution: "OKTOBER"
      },
      {
        id: "2-across",
        number: 2,
        humanNumber: "3",
        clue: "Warna langit",
        direction: "across",
        length: 4,
        group: ["2-across"],
        position: { x: 1, y: 3 },
        separatorLocations: {},
        solution: "BIRU"
      },
      {
        id: "3-across",
        number: 3,
        humanNumber: "3",
        clue: "Kamu (Inggris)",
        direction: "across",
        length: 3,
        group: ["3-across"],
        position: { x: 2, y: 5 },
        separatorLocations: {},
        solution: "YOU"
      },
      {
        id: "4-across",
        number: 4,
        humanNumber: "4",
        clue: "Alat untuk menulis",
        direction: "across",
        length: 6,
        group: ["4-across"],
        position: { x: 2, y: 9 },
        separatorLocations: {},
        solution: "PENSIL"
      },
      {
        id: "1-down",
        number: 1,
        humanNumber: "1",
        clue: "Setelah Hari Senin",
        direction: "down",
        length: 6,
        group: ["1-down"],
        position: {
          x: 6,
          y: 0
        },
        separatorLocations: {},
        solution: "SELASA"
      },
      {
        id: "2-down",
        number: 2,
        humanNumber: "2",
        clue: "Alat pengukur suhu",
        direction: "down",
        length: 10,
        group: ["2-down"],
        position: {
          x: 3,
          y: 1
        },
        separatorLocations: {},
        solution: "TERMOMETER"
      },
      {
        id: "3-down",
        number: 3,
        humanNumber: "3",
        clue: "Jail (sinonim)",
        direction: "down",
        length: 4,
        group: ["3-down"],
        position: {
          x: 5,
          y: 8
        },
        separatorLocations: {},
        solution: "USIL"
      },
      {
        id: "4-down",
        number: 4,
        humanNumber: "4",
        clue: "Darat (antonim)",
        direction: "down",
        length: 4,
        group: ["4-down"],
        position: {
          x: 7,
          y: 9
        },
        separatorLocations: {},
        solution: "LAUT"
      }
    ],
    solutionAvailable: true,
    dateSolutionAvailable: 1542326400000,
    dimensions: {
      cols: 13,
      rows: 13
    },
    crosswordType: "quick"
  };

  return (
    <div className="App">
      <h1>CrossWord Game</h1>
      <Crossword data={data}>
        <Grid>
          <Cell />
        </Grid>

        <HiddenInput />

        <Controls>
          <ConfirmButton />
        </Controls>

        <AnagramHelper>
          {/* <ClueInput/> */}
          <Ring />
          <CluePreview />
        </AnagramHelper>

        <Clues>
          <Clue />
        </Clues>
      </Crossword>
    </div>
  );
}
