class CheckboxElementController {
  constructor() {
    this.name = 'checkboxElement';
  }
  
  notifyParent(obj) {
    this.onElementChange({obj: obj, model: this.sectionModel, key: this.sectionKey})
  }
  
}

export default CheckboxElementController;
