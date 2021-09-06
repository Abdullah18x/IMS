/* eslint-disable prettier/prettier */
import AddProduct from "views/Products/AddProduct/AddProduct";
import AllProducts from "views/Products/AllProducts/AllProducts";
import GeneralProducts from "views/Products/General/General";
import ElectronicProducts from "views/Products/Electronic/Electronic";
import H_B from "views/Products/H_B/H_B";
import Baby from "views/Products/Baby/Baby";
import Gaming from "views/Products/Gaming/Gaming";
import Fashion from "views/Products/Fashion/Fashion";
import MobileAccessories from "views/Products/MobileAccessories/MobileAccessories";

import { ChildFriendly, Favorite, Home, ImportantDevices, Kitchen, LocalFlorist, MonetizationOn, Pets, PhoneAndroid, SportsEsports, Visibility } from "@material-ui/icons";
import Expensive from "views/Products/Expensive/Expensive";
import Pet from "views/Products/Pet/Pet";
import H_K from "views/Products/H_K/H_K";
import Enabled from "views/Products/Enabled/Enabled";
import Disabled from "views/Products/Disabled/Disabled";


const productsRoutes = [
  {
    path: "/addProduct",
    name: "Add Product",
    icon: Visibility,
    component: AddProduct,
    layout: "/pmm",
  },
  {
    path: "/enabledProducts",
    name: "Enabled Products",
    icon: Visibility,
    component: Enabled,
    layout: "/pmm",
  },
  {
    path: "/disabledProducts",
    name: "Disabled Products",
    icon: Visibility,
    component: Disabled,
    layout: "/pmm",
  },
  {
    path: "/allProducts",
    name: "All Products",
    icon: Visibility,
    component: AllProducts,
    layout: "/pmm",
  },
  {
    path: "/generalProducts",
    name: "General",
    icon: Home,
    component: GeneralProducts,
    layout: "/pmm",
  },
  {
    path: "/electronicProducts",
    name: "Electronics",
    icon: ImportantDevices,
    component: ElectronicProducts,
    layout: "/pmm",
  },
  {
    path: "/hbProducts",
    name: "Health & Beauty",
    icon: Favorite,
    component: H_B,
    layout: "/pmm",
  },
  {
    path: "/babyProducts",
    name: "Baby",
    icon: ChildFriendly,
    component: Baby,
    layout: "/pmm",
  },
  {
    path: "/gamingProducts",
    name: "Gaming Devices",
    icon: SportsEsports,
    component: Gaming,
    layout: "/pmm",
  },
  {
    path: "/fashionProducts",
    name: "Fashion",
    icon: LocalFlorist,
    component: Fashion,
    layout: "/pmm",
  },
  {
    path: "/mobileAccessoriesProducts",
    name: "Mobile Accessories",
    icon: PhoneAndroid,
    component: MobileAccessories,
    layout: "/pmm",
  },
  {
    path: "/expensiveProducts",
    name: "Expensive Products",
    icon: MonetizationOn,
    component: Expensive,
    layout: "/pmm",
  },
  {
    path: "/petProducts",
    name: "Pet Related",
    icon: Pets,
    component: Pet,
    layout: "/pmm",
  },
  {
    path: "/hkProducts",
    name: "Home & Kitchen",
    icon: Kitchen,
    component: H_K,
    layout: "/pmm",
  },
];

export default productsRoutes;
