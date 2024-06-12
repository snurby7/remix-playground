import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "@remix-run/react";
import * as React from "react";

const STARTING_REM = 3;
export default function ScrollSensor() {
  const [textSizeRem, setTextSizeRem] = React.useState(STARTING_REM);

  React.useEffect(() => {
    const onElementScrolled = (event) => {
      requestAnimationFrame(() => {
        const scrollPercentage =
          1 - event.target.scrollTop / event.target.scrollHeight;
        if (scrollPercentage < 0.95) {
          const computedTextSize = STARTING_REM * scrollPercentage;
          setTextSizeRem(computedTextSize > 1 ? computedTextSize : 1);
        } else {
          setTextSizeRem(STARTING_REM);
        }
      });
    };

    // Avoid running during SSR
    if (typeof document !== "undefined") {
      const element = document.getElementById("scroll-content");
      element?.addEventListener("scroll", onElementScrolled);
    }

    // Clean up
    return () => {
      if (typeof document !== "undefined") {
        const element = document.getElementById("scroll-content");
        element?.removeEventListener("scroll", onElementScrolled);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <Stack spacing={2} mb={2}>
        <Typography variant="body1" gutterBottom>
          Scroll watcher so when one element scrolls another can respond
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Home
        </Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h3" fontSize={`${textSizeRem}rem`}>
            Scale me
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box id="scroll-content" maxHeight={"400px"} overflow={"auto"}>
            Sponte vox cupio veritatis texo decet aer accedo aliquid. Vel
            patruus cotidie sperno pectus coniecto adhuc tabella usus. Verus
            suppono curatio. Depopulo quasi magnam aptus sponte pecco. Sulum
            tantum cavus calculus depraedor sint. Audio cetera capio vinco.
            Turbo trans dolorum campana corona patrocinor universe soleo facere.
            Tempore statim creptio abutor trepide dolore vox appono solium.
            Thema officia amaritudo totus voluptates pectus vilitas damnatio.
            Venustas vulticulus tot corrigo demitto itaque vallum desidero.
            Caelum placeat aut sumptus amplus. Comprehendo bestia suppellex sum
            dignissimos beatus artificiose aeternus. Auditor deleo caelestis
            administratio cunae communis labore crudelis. Tubineus chirographum
            harum cur quia consequuntur circumvenio commemoro. Tibi claudeo
            claustrum ater. Delicate deorsum vester vociferor baiulus comparo.
            Pauper colligo tamdiu tabula subiungo. Utpote vitium caecus cubo
            utor." Client: "Attollo virga adeo victoria. Articulus cohibeo sint
            atrox voluptates claustrum. Contigo via quia cedo. Aegrus spes cerno
            calculus admitto vereor tui theologus sollicito amo. Casus bestia
            voluptas adfero adficio amicitia subiungo capillus. Stabilis
            depraedor sophismata. Voveo decipio beneficium voluptate. Cariosus a
            numquam vere admoneo sto totidem conor auctor. Tero velum
            blanditiis. Velociter spoliatio solio maxime sit deludo quasi
            corporis ipsam crudelis. Bene confero patria tremo subnecto. Colo
            quaerat validus cattus cito tubineus cunae uredo desidero. Harum
            ceno velum degusto tergum. Accendo sumo vesco altus minima conqueror
            varius spiculum ago porro. Supra cattus denego. Dedecor concido
            crinis trucido traho capto distinctio cunae denuo voro. Voluptatum
            defluo laudantium absum vulariter crustulum sollicito concedo. Aveho
            cubicularis tres apostolus unde sonitus.
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
