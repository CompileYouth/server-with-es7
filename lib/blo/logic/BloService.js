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

        result = this._formatData(result);

        this.busLineInfo.set(`${lineId}-${direction}`, result);
        return result;
    }

    // Format json to csv for speed
    _formatData(data) {
        if (data.length === 0) {
            return [];
        }
        else {
            return [ data[0].LINE_ID, data[0].DIRECTION, data.map(info => [ info.STOP_ID, info.LAT, info.LNG ]) ];
        }
    }
}
