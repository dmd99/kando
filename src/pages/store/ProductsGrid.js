import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./ProductsGrid.module.scss";
import { Container, Grid } from "@material-ui/core";

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
        {/* Product Drawer */}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <div className="py-3">{products.length} Produits</div>
        </Grid>
        <Grid>
          {/* Searchinput */}
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>
      <div className={styles.p__footer}></div>
    </Container>
  );
};

export default ProductsGrid;
