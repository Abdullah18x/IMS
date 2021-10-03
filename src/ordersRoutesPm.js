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
    layout: "/pm",
  },
  {
    path: "/ordered",
    name: "Ordered",
    icon: Visibility,
    component: OrderedPage,
    layout: "/pm",
  },
  {
    path: "/reviewed",
    name: "Reviewed",
    icon: Visibility,
    component: Reviewed,
    layout: "/pm",
  },
  {
    path: "/pendingRefund",
    name: "Pending Refund",
    icon: ThumbUpAlt,
    component: PendingRefund,
    layout: "/pm",
  },
  {
    path: "/reviewDeleted",
    name: "Review Deleted",
    icon: Cancel,
    component: ReviewDeleted,
    layout: "/pm",
  },
  {
    path: "/refunded",
    name: "Refunded",
    icon: IndeterminateCheckBox,
    component: Refunded,
    layout: "/pm",
  },
  {
    path: "/onHold",
    name: "On Hold",
    icon: PanTool,
    component: OnHold,
    layout: "/pm",
  },
  {
    path: "/pendingReview",
    name: "Pending Review",
    icon: QueryBuilder,
    component: PendingReview,
    layout: "/pm",
  },
  {
    path: "/cancelled",
    name: "Cancelled",
    icon: Cancel,
    component: Cancelled,
    layout: "/pm",
  },
  {
    path: "/commissioned",
    name: "Commissioned",
    icon: CreditCard,
    component: Commissioned,
    layout: "/pm",
  },
  {
    path: "/completed",
    name: "Completed",
    icon: CheckCircle,
    component: Completed,
    layout: "/pm",
  },
  
];

export default orderRoutes;
