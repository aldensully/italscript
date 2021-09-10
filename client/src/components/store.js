import { Store } from "pullstate";

export const UIStore = new Store({
  selectedNodeId:'',
  selectedNodeX:0,
  selectedNodeY:0,
  newNodeSpawn:false
});