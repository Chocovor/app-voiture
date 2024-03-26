import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Garage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
                <p>marque : {children}</p>
                { color ? <p>couleur : {color}</p> : <p>Couleur: Néant</p>  }
                <p>prix moyen : {price}</p>
        </div>
      </Collapse>
    </>
  );
}

export default Garage;