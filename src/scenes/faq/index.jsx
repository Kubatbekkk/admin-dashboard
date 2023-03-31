import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            corporis?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis, corporis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Ipsum, dolor consectetur adipisicing elit. Veritatis, corporis?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis, corporis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Dolor sit amet consectetur adipisicing elit. Veritatis, corporis?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis, corporis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Lorem ipsum, dolor sit amet consectetur adipisicing?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis, corporis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Lorem ipsum Veritatis, corporis?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis, corporis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Veritatis, corporis?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis, corporis.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
