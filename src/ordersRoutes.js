/* eslint-disable prettier/prettier */
import AllOrdersPage from "views/Orders/AllOrders/AllOrders";
import OrderedPage from "views/Orders/Ordered/Ordered";
import Reviewed from "views/Orders/Reviewed/Reviewed";
import PendingRefund from "views/Orders/PendingRefund/PendingRefund";
import ReviewDeleted from "views/Orders/ReviewDeleted/ReviewDeleted";
import Refunded from "views/Orders/Refunded/Refunded";
import OnHold from "views/Orders/OnHold/OnHold";
import PendingReview from "views/Orders/PendingReview/PendingReview";
import Cancelled from "views/Orders/Cancelled/Cancelled";
import Commissioned from "views/Orders/Commissioned/Commissioned";
import Completed from "views/Orders/Completed/Completed";
import { Cancel, CheckCircle, CreditCard, IndeterminateCheckBox, PanTool, QueryBuilder, ThumbUpAlt, Visibility } from "@material-ui/icons";

const orderRoutes = [
  {
    path: "/all",
    name: "All Orders",
    icon: Visibility,
    component: AllOrdersPage,
    layout: "/Dashboard",
  },
  {
    path: "/ordered",
    name: "Ordered",
    icon: Visibility,
    component: OrderedPage,
    layout: "/Dashboard",
  },
  {
    path: "/reviewed",
    name: "Reviewed",
    icon: Visibility,
    component: Reviewed,
    layout: "/Dashboard",
  },
  {
    path: "/pendingRefund",
    name: "Pending Refund",
    icon: ThumbUpAlt,
    component: PendingRefund,
    layout: "/Dashboard",
  },
  {
    path: "/reviewDeleted",
    name: "Review Deleted",
    icon: Cancel,
    component: ReviewDeleted,
    layout: "/Dashboard",
  },
  {
    path: "/refunded",
    name: "Refunded",
    icon: IndeterminateCheckBox,
    component: Refunded,
    layout: "/Dashboard",
  },
  {
    path: "/onHold",
    name: "On Hold",
    icon: PanTool,
    component: OnHold,
    layout: "/Dashboard",
  },
  {
    path: "/pendingReview",
    name: "Pending Review",
    icon: QueryBuilder,
    component: PendingReview,
    layout: "/Dashboard",
  },
  {
    path: "/cancelled",
    name: "Cancelled",
    icon: Cancel,
    component: Cancelled,
    layout: "/Dashboard",
  },
  {
    path: "/commissioned",
    name: "Commissioned",
    icon: CreditCard,
    component: Commissioned,
    layout: "/Dashboard",
  },
  {
    path: "/completed",
    name: "Completed",
    icon: CheckCircle,
    component: Completed,
    layout: "/Dashboard",
  },
  
];

export default orderRoutes;
