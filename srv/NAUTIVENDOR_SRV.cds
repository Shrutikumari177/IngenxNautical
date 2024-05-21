using NAUTIVENDOR_SRV from './external/NAUTIVENDOR_SRV.cds';

service NAUTIVENDOR_SRVSampleService {
    
    entity CHARTREQSet as projection on NAUTIVENDOR_SRV.CHARTREQSet
    {        key Chrnmin, Chrcdate, Chrqsdate, Chrqstime, Chrqedate, Chrqetime, Chrqdate, key Voyno, Voynm, Lifnr     }    
;
    
    entity CHARTVENSet as projection on NAUTIVENDOR_SRV.CHARTVENSet
    {        Chrnmin, key Lifnr, Voyno     }    
;
    
    
    
    entity ITEM_BIDSet as projection on NAUTIVENDOR_SRV.ITEM_BIDSet
    {        key Voyno, Zcode, Value, CodeDesc, RevBid, Good, Mand, Must, Zmin, Zmax     }    
;
    
    entity MasBidTemplateSet as projection on NAUTIVENDOR_SRV.MasBidTemplateSet
    {        key Code, Value, Cvalue, Cunit, Datatype, Tablename, MultiChoice     }    
;
    
    entity NAVOYGHSet as projection on NAUTIVENDOR_SRV.NAVOYGHSet
    {        key Voyno, Voynm, Vessn, Vimo, Voyty, Carty, Curr, Bidtype, Frcost, Frtu     }    
;
    
    entity NAVOYGIPSet as projection on NAUTIVENDOR_SRV.NAVOYGIPSet
    {        key Voyno, Vlegn, Portc, Portn, Pdist, Medst, Vetad, Vetat, Vetdd, Vetdt, Cargs, Cargu     }    
;
    
    entity PortsSet as projection on NAUTIVENDOR_SRV.PortsSet
    {        key ZfValue, ZfDesc, Country, Countryn     }    
;
    
    entity VendBidHSet as projection on NAUTIVENDOR_SRV.VendBidHSet
    {        key Voyno, key Lifnr, key Chrnmin, Vimono, Vname     }    
;
    
    entity VendBidSet as projection on NAUTIVENDOR_SRV.VendBidSet
    {        key Voyno, Lifnr, Zcode, Value, Cvalue, Cunit, key Chrnmin, CodeDesc     }    
;
    
    entity VendFBidSet as projection on NAUTIVENDOR_SRV.VendFBidSet
    {        Voyno, Lifnr, Zcode, Biddate, Bidtime, key Chrnmin, CodeDesc, Value, Cvalue, Cunit, Chrqsdate, Chrqstime, Chrqedate, Chrqetime, DoneBy, Uname, Stat, Zmode, Zcom     }    
;
    
    entity VendorDataSet as projection on NAUTIVENDOR_SRV.VendorDataSet
    {        key Lifnr, PartnerRole, Anred, Name1, Name2, Name3, Sort1, StrSuppl1, StrSuppl2, HouseNum1, Stras, Pstlz, Ort01, Land1, Regio, TimeZone, Spras, Telf1, Telf2, Telfx, SmtpAddr, Erdat, DateTo     }    
;
    
    entity ZCOMMERCIAL_RANKSet as projection on NAUTIVENDOR_SRV.ZCOMMERCIAL_RANKSet
    {        key IvChrnmin, key IvLifnr, key IvVoyno, IvRank     }    
;
    
    entity ZGet_QUOTESet as projection on NAUTIVENDOR_SRV.ZGet_QUOTESet
    {        key IvChat, key IvVend, EvQuote     }    
;
    
    entity ZLastBidSet as projection on NAUTIVENDOR_SRV.ZLastBidSet
    {        key IvVend, key IvVoyno, EvComment, EvQuote     }    
;
    
    entity ZRANK_SINGLESet as projection on NAUTIVENDOR_SRV.ZRANK_SINGLESet
    {        WOutput, key ImChat, key ImVendor     }    
;
    
    entity sendInvBidSet as projection on NAUTIVENDOR_SRV.sendInvBidSet
    {        key Voyno, key Lifnr, key Chrnmin, Cvalue, Cunit, Stat, Zmode, Zcom     }    
;
}