import AbstractAction from "./AbstractAction";

export default class DenyAction extends AbstractAction {
  public static getLabel() {
    return "Отказаться";
  }

  public static getInternalName() {
    return "act_deny";
  }

  public static checkRights(
    userId: number,
    performerId: number,
    clientId: number,
  ) {
    return userId == performerId;
  }
}
