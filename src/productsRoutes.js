/* eslint-disable prettier/prettier */
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


const productsRoutes = [
  {
    path: "/allProducts",
    name: "All Products",
    icon: Visibility,
    component: AllProducts,
    layout: "/Dashboard",
  },
  {
    path: "/generalProducts",
    name: "General",
    icon: Home,
    component: GeneralProducts,
    layout: "/Dashboard",
  },
  {
    path: "/electronicProducts",
    name: "Electronics",
    icon: ImportantDevices,
    component: ElectronicProducts,
    layout: "/Dashboard",
  },
  {
    path: "/hbProducts",
    name: "Health & Beauty",
    icon: Favorite,
    component: H_B,
    layout: "/Dashboard",
  },
  {
    path: "/babyProducts",
    name: "Baby",
    icon: ChildFriendly,
    component: Baby,
    layout: "/Dashboard",
  },
  {
    path: "/gamingProducts",
    name: "Gaming Devices",
    icon: SportsEsports,
    component: Gaming,
    layout: "/Dashboard",
  },
  {
    path: "/fashionProducts",
    name: "Fashion",
    icon: LocalFlorist,
    component: Fashion,
    layout: "/Dashboard",
  },
  {
    path: "/mobileAccessoriesProducts",
    name: "Mobile Accessories",
    icon: PhoneAndroid,
    component: MobileAccessories,
    layout: "/Dashboard",
  },
  {
    path: "/expensiveProducts",
    name: "Expensive Products",
    icon: MonetizationOn,
    component: Expensive,
    layout: "/Dashboard",
  },
  {
    path: "/petProducts",
    name: "Pet Related",
    icon: Pets,
    component: Pet,
    layout: "/Dashboard",
  },
  {
    path: "/hkProducts",
    name: "Home & Kitchen",
    icon: Kitchen,
    component: H_K,
    layout: "/Dashboard",
  },
];

export default productsRoutes;
