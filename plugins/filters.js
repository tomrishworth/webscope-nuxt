import Vue from "vue";
import { format } from "date-fns";

Vue.filter("date", value => format(value, "D MMM YYYY"));
