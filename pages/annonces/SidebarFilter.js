import React, { useState } from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const priceRanges = [
  { label: "0 - 2 000 €", value: [0, 2000] },
  { label: "2 000 - 5 000 €", value: [2000, 5000] },
  { label: "5 000 - 10 000 €", value: [5000, 10000] },
  { label: "10 000 - 20 000 €", value: [10000, 20000] },
  { label: "20 000 - 30 000 €", value: [20000, 30000] },
  { label: "30 000 € et plus", value: [30000, 50000] },
];

const mileageRanges = [
  { label: "0 - 10 000 km", value: [0, 10000] },
  { label: "10 000 - 30 000 km", value: [10000, 30000] },
  { label: "30 000 - 50 000 km", value: [30000, 50000] },
  { label: "50 000 - 80 000 km", value: [50000, 80000] },
  { label: "80 000 - 100 000 km", value: [80000, 100000] },
  { label: "100 000 km et plus", value: [100000, 150000] },
];

export default function SidebarFilter({ brands, handleFilter }) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [mileageRange, setMileageRange] = useState([0, 100000]);
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const handleBrandChange = (brand) => {
    const updatedSelectedBrands = [...selectedBrands];
    if (updatedSelectedBrands.includes(brand)) {
      const index = updatedSelectedBrands.indexOf(brand);
      updatedSelectedBrands.splice(index, 1);
    } else {
      updatedSelectedBrands.push(brand);
    }
    setSelectedBrands(updatedSelectedBrands);
  };

  const handleMileageChange = (value) => {
    setMileageRange(value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleApplyFilter = () => {
    handleFilter(selectedBrands, mileageRange, priceRange);
  };

  return (
    <div className="ms-4">
    
      <h3>Marques :</h3>
      {brands.map((brand) => (
        <Form.Check
          key={brand}
          type="checkbox"
          id={brand}
          label={brand}
          checked={selectedBrands.includes(brand)}
          onChange={() => handleBrandChange(brand)}
        />
      ))}

      <Form.Group>
        <Form.Label>Kilométrage :</Form.Label>
        <Slider
          value={mileageRange}
          onChange={handleMileageChange}
          min={0}
          max={100000}
          step={1000}
          label={`${mileageRange[0]} km - ${mileageRange[1]} km`}
        />
        {mileageRanges.map((range) => (
          <Form.Check
            key={range.label}
            type="radio"
            name="mileageRange"
            id={range.label}
            label={range.label}
            checked={
              mileageRange[0] === range.value[0] && mileageRange[1] === range.value[1]
            }
            onChange={() => setMileageRange(range.value)}
          />
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Prix :</Form.Label>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          min={0}
          max={50000}
          step={100}
          label={`${priceRange[0]} € - ${priceRange[1]} €`}
        />
        {priceRanges.map((range) => (
          <Form.Check
            key={range.label}
            type="radio"
            name="priceRange"
            id={range.label}
            label={range.label}
            checked={priceRange[0] === range.value[0] && priceRange[1] === range.value[1]}
            onChange={() => setPriceRange(range.value)}
          />
        ))}
      </Form.Group>

      <Button variant="primary" onClick={handleApplyFilter}>
        Appliquer le filtre
      </Button>
    </div>
  );
}
