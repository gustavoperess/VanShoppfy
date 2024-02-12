import HeaderComponent from '../../components/header/header.component';
import BannerComponent from '../../components/banner/banner.component';
import "./HomePage.css"

export const HomePage = () => {
  return (
    <>
    <div className="container-fluid">
      <HeaderComponent />
      <BannerComponent />
    </div>
    </>
  );
};