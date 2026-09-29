import AbstractAction from "./AbstractAction";

export default class ResponseAction extends AbstractAction {
  public static getLabel() {
    return "Откликнуться";
  }

  public static getInternalName() {
    return "act_response";
  }

  public static checkRights(
    userId: number,
    performerId: number,
    clientId: number,
  ) {
    return userId !== performerId;
  }
}
