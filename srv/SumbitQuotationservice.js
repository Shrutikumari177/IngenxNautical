const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
   
    const NAUTIBTP_NAUTICAL_TRANSACTIO_SRV = await cds.connect.to("NAUTIBTP_NAUTICAL_TRANSACTIO_SRV"); 
    srv.on('READ', 'xNAUTIxCharteringHeaderItem', req => NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.run(req.query)); 
}
