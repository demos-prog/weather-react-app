import { ButtonGroup, Button, Box } from "@material-ui/core";

export default function ButtonsGroup({ setUrl, setCity }) {
  function handleChangeCity(e) {
    setUrl("/" + e.target.value);
    localStorage.setItem("city", e.target.value);
    setCity(e.target.value);
  }

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "30px",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        <Button value="Minsk" onClick={handleChangeCity}>
          Minsk
        </Button>
        <Button value="Moscow" onClick={handleChangeCity}>
          Moscow
        </Button>
        <Button value="Bratislava" onClick={handleChangeCity}>
          Bratislava
        </Button>
      </ButtonGroup>
    </Box>
  );
}
