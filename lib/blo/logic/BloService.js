import { query } from "../../db/connection";

export default class BloService {
    async getBusLineInfo(lineId, direction) {
        const result = await query(`
            select * from "SAP_ITRAFFIC_DEMO"."sap.traffic.demo.ptm.s.db::BUS.GIS_EXT.LINE_STOP" where LINE_ID=? and DIRECTION=?
        `, [lineId, direction]);
        return result;
    }
}
