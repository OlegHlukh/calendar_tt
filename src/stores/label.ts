import {v4 as uuid} from 'uuid'

export interface Label {
  id: string;
  title: string;
  color: string;
}

class LabelStore {
  labels: Label[]

  constructor() {
    this.labels = []
  }

  addLabel = (label: Omit<Label, 'id'>) => {
    const id = uuid();

    this.labels.push({
      ...label,
      id,
    });
  }

  removeLabel = (id: string) => {
    this.labels = this.labels.filter(label => label.id !== id);
  }
}

export default new LabelStore();
