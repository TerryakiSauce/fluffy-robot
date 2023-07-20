let oDraggedControl = oEvent.getParameter('draggedControl');
let oDroppedControl = oEvent.getParameter('droppedControl');

let oDraggedContext = oDraggedControl.getBindingContext('DataModel');
let oDroppedContext = oDroppedControl.getBindingContext('DataModel');

if (!oDraggedContext && !oDroppedContext) return;

let oDraggedData = oDraggedContext.getObject();
let oDroppedData = oDroppedContext.getObject();

let indexDrag = 0;
let indexDrop = 0;

modelDataModel.oData.devItems.forEach(function (data, i) {
    if (data.id === oDraggedData.id) indexDrag = i;
    if (data.id === oDroppedData.id) indexDrop = i;
});

arrayMove(modelDataModel.oData.devItems, indexDrag, indexDrop);
modelDataModel.refresh();