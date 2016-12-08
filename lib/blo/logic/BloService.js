import { query } from "../../db/connection";

export default class BloService {
    constructor() {
        this.busLineInfo = new Map();
    }

    async getBusLineInfo(lineId, direction) {
        let result = this.busLineInfo.get(`${lineId}-${direction}`);

        if (result) {
            return result;
        }

        result = await query(`
            select * from "SAP_ITRAFFIC_DEMO"."sap.traffic.demo.ptm.s.db::BUS.GIS_EXT.LINE_STOP" where LINE_ID=? and DIRECTION=?
        `, [lineId, direction]);

        this.busLineInfo.set(`${lineId}-${direction}`, result);
        return result;
    }
}
