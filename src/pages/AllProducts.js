import React from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import ProductLayout from '../layouts/allproducts/ProductLayout';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchBar from '../components/allproducts/ProductSearch';

export default function AllProducts() {
  return (
    <div>
      <CommonLayout>
        <SearchBar />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <NavLink style={{ textDecoration: 'none' }} to={`/allproducts`}>
            <div>All </div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`/vegetable`}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
              Vegetable
            </div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`/fruit`}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>Fruit</div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`/other`}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
              Other Products
            </div>
          </NavLink>
        </div>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          pl={4}
          pr={4}
          pt={5}
        >
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          {/* <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid> */}
        </Grid>
      </CommonLayout>
    </div>
  );
}
