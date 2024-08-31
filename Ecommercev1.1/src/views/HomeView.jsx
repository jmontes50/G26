import OurCategories from "../components/Home/OurCategories";
import OurProducts from "../components/Home/OurProducts";
import HeaderSlider from "../components/Home/HeaderSlider";

const HomeView = () => {
  return (
    <>
      <HeaderSlider />
      <OurProducts />
      <OurCategories />
    </>
  );
};

export default HomeView;
