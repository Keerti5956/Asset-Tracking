sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/m/MessageToast"
], function(Controller, Device, MessageToast) {
    "use strict";

    return Controller.extend("app.project1.controller.View1", {
        onInit: function () {
            // Initialization logic
        },

        onExecute: function () {
            var oInput = this.byId("equipId");
            var sEquipId = oInput.getValue();

            if (!sEquipId) {
                MessageToast.show("Please enter an Equipment Number.");
                return;
            }

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDetail", {
                equipId: sEquipId
            });
        },

        onAfterRendering: function () {
            var oButton = this.byId("btnId");
            if (oButton) {
                var oDomRef = oButton.getDomRef();
                if (Device.system.phone) {
                    oButton.setWidth("100px");
                    // oButton.setText("EXECUTED");

                    if (oDomRef) {
                        oDomRef.style.fontFamily = "Arial, sans-serif";
                        oDomRef.style.fontStyle = "italic";
                        oDomRef.style.fontWeight = "bold";
                    }
                } else {
                    oButton.setWidth("300px");
                    
                } 
            }
        }
    });
});
