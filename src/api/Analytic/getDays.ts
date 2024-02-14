import { http } from "../../utils/request";

export function getDays() {
    return http.get<number>("/analytic/getDays")
}