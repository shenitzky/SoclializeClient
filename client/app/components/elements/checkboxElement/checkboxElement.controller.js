class CheckboxElementController {
  constructor() {
    this.name = 'checkboxElement';
  }
  
  //notify parent element
  notifyParent(obj) {
    this.onElementChange({obj: obj, model: this.sectionModel, key: this.sectionKey})
  }
  
}

export default CheckboxElementController;
