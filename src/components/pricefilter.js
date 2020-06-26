import React from 'react'
import Form from 'react-bootstrap/Form'

function PriceFilter() {
    return (
      
        <Form.Group id="formGridCheckbox">

            <Form.Check type="checkbox" label="0 - 5000" />
            <Form.Check type="checkbox" label="5000 - 50000" />
            <Form.Check type="checkbox" label="50,000 - 100,000" />
            <Form.Check type="checkbox" label="100,000 - 500,000" />
            <Form.Check type="checkbox" label="500,000 - 1,000,000" />
        </Form.Group>

    )
}

export default PriceFilter;