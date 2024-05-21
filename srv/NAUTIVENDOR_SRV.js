const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const NAUTIVENDOR_SRV = await cds.connect.to("NAUTIVENDOR_SRV"); 
      srv.on('READ', 'CHARTREQSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'CHARTVENSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'DynamicTableSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'ITEM_BIDSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'MasBidTemplateSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'NAVOYGHSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'NAVOYGIPSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'PortsSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'VendBidHSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'VendBidSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'VendFBidSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'VendorDataSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'ZCOMMERCIAL_RANKSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'ZGet_QUOTESet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'ZLastBidSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'ZRANK_SINGLESet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'sendInvBidSet', req => NAUTIVENDOR_SRV.run(req.query)); 
}