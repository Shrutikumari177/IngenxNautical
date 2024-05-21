sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      'sap/m/Token',
      'sap/m/MessageBox',
      'sap/m/MessageToast',
      "sap/ui/model/Filter",
      "sap/ui/model/FilterOperator"
    ],
    function(BaseController,Token,IconPool,MessageBox, MessageToast,Filter,  FilterOperator) {
      "use strict";
      let getModelData = [];
    let getModelData2 = [];
      let sloc;
  
      return BaseController.extend("com.ingenx.nauti.chartering.controller.CharteringApproval", {
        onInit: function() {
              
               let oModel = new sap.ui.model.json.JSONModel();
               this.getView().setModel(oModel, "dataModel");
               let oModel3 = this.getOwnerComponent().getModel();
               let oBindList3 = oModel3.bindList("/chartapprSet");
               oBindList3.requestContexts(0, Infinity).then(function (aContexts) {
                aContexts.forEach(function (oContext) {
                  getModelData.push(oContext.getObject());
                });
                oModel.setData(getModelData);
                console.log(getModelData,"bhai kha ho");
              }.bind(this))
                },
                
        // onVoyageApprovalReportSelected: function() {
                
        //     debugger;
        //         var oTable = this.getView().byId("myTable");
        //         var bShowTable = this.getView().byId("_IDLabel2");
        //   oTable.setVisible(bShowTable);
        //         },

                onSelectionChange: function(oEvent) {
                  var selectedItem = oEvent.getParameter("selectedItem").getText();
                  var oTable = this.getView().byId("myTable");
              
                 
                  if (selectedItem === "Voyage Approval Status Report") {
                      oTable.setVisible(true);
                  } else {
                      oTable.setVisible(false);
                  }
              },
              
            //   onValueHelpClosevoy: function(evt) {
               
            //     var oMultiInput = this.byId("ChartNo");
            //     var aSelectedContexts = evt.getParameter("selectedContexts");
            //     var selectedValues = [];
            
            //     if (aSelectedContexts && aSelectedContexts.length > 0) {
            //         selectedValues = aSelectedContexts.map(function(oContext) {
            //             return oContext.getProperty("Creqno"); 
            //         });
                    
                 
            //         var oInput = this.byId("searchField3");
            //         oInput.setValue(selectedValues[0]); 
            //     }
            // },

            onCharterNoSelectionChange: function(oEvent) {
              var oMultiInput = oEvent.getSource();
              var sSelectedCharterNo = oMultiInput.getTokens()[0].getKey(); // Assuming the key of the token represents the Chartering No.
              
              // Get the value help dialog's model directly
              var oModel = oMultiInput.getModel();
          
              if (oModel) {
                  var aData = oModel.getProperty("/chartapprSet");
                  var oSelectedCharter = aData.find(function(oCharter) {
                      return oCharter.CharteringNo === sSelectedCharterNo;
                  });
          
                  var sCharterApprovalReqNo = oSelectedCharter ? oSelectedCharter.Creqno : "";
                  
                  // Update the input field value directly
                  var oApprovalReqNoInput = this.getView().byId("searchField3");
                  oApprovalReqNoInput.setValue(sCharterApprovalReqNo);
              }
          },          
                
                CharterNo: function () {
                  var oView = this.getView();
           
                  if (!this._oTankInfomat) {
                    this._oTankInfomat = sap.ui.xmlfragment(oView.getId(), "com.ingenx.nauti.chartering.fragments.charter", this);
                    oView.addDependent(this._oTankInfomat);
                  }
                  this._oTankInfomat.open();
           
                },
           onValueHelpClosevoy: function (evt) {
            
                  var oMultiInput = this.byId("ChartNo");
                  var oDescriptionInput = this.byId("searchField3");
                  var aSelectedContexts = evt.getParameter("selectedContexts"),
                  
                  oVBox=this.byId("tab")
                  var selectedValues = [];
                  var selectedValues2=[];

                var oModel= this.getView().getModel("chartner")
                var aExistingData= oModel ? oModel.getData():[];

                if (!oModel){
                  oModel = new sap.ui.model.json.JSONModel();
                  this.getView().setModel(oModel, "chartner")
                
                }

                // this.byId("ChartNo").setValue(oSelectedCharter.getTitle());
                // this.byId("searchField3").setValue(oSelectedCharter.getDescription());

                var aExistingTokens = oMultiInput.getTokens();
                var aExistingTokens2 = oDescriptionInput.getTokens();
                if (aSelectedContexts && aSelectedContexts.length > 0) {
                  selectedValues = aSelectedContexts.map(function(oContext) {
                      // Extract the Chrnmin value from the sPath string using regular expression
                      var sPath = oContext.getPath();
                      var match = /Chrnmin='(\d+)'/g.exec(sPath);
                      console.log("match",match);
                      var ChrnminValue = match ? match[1] : null;
                      console.log("ChrnminValue",ChrnminValue);
                      return ChrnminValue;
                  }).filter(function(value) {
                      return value !== null; // Filter out null values
                  });

                  selectedValues2 = aSelectedContexts.map(function(oContext) {
                    // Extract the Chrnmin value from the sPath string using regular expression
                    var sPath = oContext.getPath();
                    var match = /Creqno='(\d+)'/g.exec(sPath);
                    console.log("match2",match);
                    var CreqnoValue = match ? match[1] : null;
                    console.log("Creqno",CreqnoValue);
                    return CreqnoValue;
                }).filter(function(value) {
                    return value !== null; // Filter out null values
                });

                console.log("Selected Values2:", selectedValues2);

          
                  // Now selectedValues array contains only the values of Chrnmin without the trailing characters
                  console.log("Selected Values:", selectedValues);
              
           

                    selectedValues = Array.from(new Set(selectedValues));
   
            selectedValues.forEach(function (sVendorID) {
                if (!aExistingTokens.some(function (oToken) {
                    return oToken.getKey() === sVendorID;
                })) {
                    oMultiInput.addToken(new sap.m.Token({
                        key: sVendorID,
                        text: sVendorID
                    }));
                }
            });
            selectedValues2.forEach(function (sVendorID) {
              if (!aExistingTokens2.some(function (oToken) {
                  return oToken.getKey() === sVendorID;
              })) {
                oDescriptionInput.addToken(new sap.m.Token({
                      key: sVendorID,
                      text: sVendorID
                  }));
              }
          });

            oVBox.setVisible(true)
            var aFilteredData = getModelData.filter(function (data) {
              return selectedValues.includes(data.Chrnmin);
          });
          console.log("aFilteredData",aFilteredData);
 
          var aCombinedData = aExistingData.concat(aFilteredData);
         
          aCombinedData = aCombinedData.filter((entry, index, self) =>
              index === self.findIndex((t) => (
                  (t.Chrnmin === entry.Chrnmin && t.Creqno=== entry.Creqno)
              ))
          );
          console.log("aCombinedData",aCombinedData);
          oModel.setData(aCombinedData);
 
          console.log("Filtered data based on selected vendors:", aFilteredData);
      } else {
         
          oVBox.setVisible(false);
      }
      var oTable = this.byId("myTable")
  oTable.setVisible(true);
  console.log(selectedValues,"ye bhi ha")
    },
    onRefresh: function() {
      var oMultiInput = this.byId("ChartNo");
      var oDescriptionInput = this.byId("searchField3");
      var oTable = this.byId("myTable");
      var oVBox = this.byId("tab");
  
      
      oMultiInput.removeAllTokens();
      oDescriptionInput.removeAllTokens();
  
     
      oTable.setVisible(false);
  
     
      oVBox.setVisible(false);
  
      
      this.byId("Save").setEnabled(true);
      this.byId("Refresh").setEnabled(true);
  },
  
      });
      
    }
  );
  