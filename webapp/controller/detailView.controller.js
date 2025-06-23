sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("app.project1.controller.detailView", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        view2ToView1: function () {
            this.oRouter.navTo("RouteView1");
        },

        onSave: function () {
            const requiredFields = [
                "equipmentId",
                "equipmentDesc",
                "comboBox",
                "comboBox1",
                "room",
                "sortField"
            ];

            let isValid = true;

            requiredFields.forEach(id => {
                const control = this.byId(id);
                if (control.getValue && !control.getValue()) {
                    control.setValueState("Error");
                    control.setValueStateText("This field is required");
                    isValid = false;
                } else {
                    control.setValueState("None");
                }
            });

            if (isValid) {
                MessageToast.show("Saved successfully!");
            } else {
                MessageToast.show("Please fill in all required fields.");
            }
        }
    });
});
 