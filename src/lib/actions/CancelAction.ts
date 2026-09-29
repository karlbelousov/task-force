import AbstractAction from "./AbstractAction";

export default class CancelAction extends AbstractAction {
  public static getLabel() {
    return "Отменить";
  }

  public static getInternalName() {
    return "act_cancel";
  }

  public static checkRights(
    userId: number,
    performerId: number,
    clientId: number,
  ) {
    return userId == clientId;
  }
}
