var oDraggedControl = oEvent.getParameter('draggedControl');
var oDraggedContext = oDraggedControl.getBindingContext('DataModel');
var id = oDraggedContext.getObject().id;
deleteItem(id);