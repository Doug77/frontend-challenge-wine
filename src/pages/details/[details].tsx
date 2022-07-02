import Layout from '../../components/Layout';
import ProductsDetails from '../../components/ProductsDetails';
import ProductsDetailsMobile from '../../components/mobile/ProductsDetailsMobile';

export default function produtcs() {
  return (
    <Layout>
      <ProductsDetailsMobile />
      <ProductsDetails />
    </Layout>
  );
}
