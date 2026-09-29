import AbstractAction from "./AbstractAction";

export default class CompleteAction extends AbstractAction {
  public static getLabel() {
    return "Завершить";
  }

  public static getInternalName() {
    return "act_complete";
  }

  public static checkRights(
    userId: number,
    performerId: number,
    clientId: number,
  ) {
    return performerId == userId;
  }
}
