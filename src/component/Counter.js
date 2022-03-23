import React, { useState, useEffect } from "react";
import { Button, Badge, Spinner } from "react-bootstrap";
import "./counter.css";

const Counter = () => {
  let couleur = "warning";
  let displayBtn = "block";

  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [btn, setBtn] = useState(true);

  useEffect(() => {
    if (btn == false) {
      setTimeout(() => {
        setBtn(true)
      }, 800);
    }
  }, [btn]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  }, [loading]);

  const handleClick = () => {
    setBtn(false)
    setLoading(true);
    setTimeout(() => {
      setCounter(counter + 1);
    }, 800);
  };
  const handleClick1 = () => {
    setBtn(false)
    setLoading(true);
    setTimeout(() => {
      setCounter(counter - 1);
    }, 800);
  };

  // {displayBtn = "none"}

  if (counter === 0) {
    couleur = "warning";
  } else {
    couleur = "success";
  }
  if (counter < 0) {
    couleur = "danger";
  }

  return (
    <div id="centre">
      {loading ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
        
      ) : (
        console.log("ok")
      )}
      {btn? (<Badge bg={couleur} style={{ display: { displayBtn } }}>
        {counter ? counter : "Zero"}
      </Badge>) : console.log("ok") }
      
      <Button variant="secondary" onClick={handleClick}>
        Incréments
      </Button>
      <Button variant="secondary" onClick={handleClick1}>
        Décréments
      </Button>
    </div>
  );
};

export default Counter;
