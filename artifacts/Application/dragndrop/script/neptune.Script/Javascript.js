jQuery.sap.require("sap.ui.core.format.DateFormat");
jQuery.sap.require("sap.ui.layout.cssgrid.GridBoxLayout");

const deleteItem = (id) => {
  const data = modelDataModel.getData();
  const { devItems } = data;
  modelDataModel.setData({ ...data, devItems: devItems.filter((obj) => obj.id !== id) });
  diaMessage.open();
};

const addToDev = (item) => {
  const data = modelDataModel.getData();
  const { devItems, prodItems } = data;
  const newItem = { ...item, status: "development", icon: "sap-icon://in-progress" };
  modelDataModel.setData({ ...data, devItems: [...devItems, newItem], prodItems: prodItems.filter((obj) => obj.id !== item.id) });
};


const addToProd = (item) => {
  const data = modelDataModel.getData();
  const { devItems, prodItems } = data;
  const newItem = { ...item, status: "production", icon: "sap-icon://complete" };
  modelDataModel.setData({ ...data, devItems: devItems.filter(obj => obj.id !== item.id), prodItems: [...prodItems, newItem] });
};

const arrayMove = (arr, fromPos, toPos) => {
  while (fromPos < 0) {
    fromPos += arr.length;
  }
  while (toPos < 0) {
    toPos += arr.length;
  }
  if (toPos >= arr.length) {
    var k = toPos - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(toPos, 0, arr.splice(fromPos, 1)[0]);
}
